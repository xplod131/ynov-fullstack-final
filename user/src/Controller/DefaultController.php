<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route("/")]
class DefaultController extends AbstractController
{

    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/api/users/{id}', methods: "GET")]
    #[IsGranted("ROLE_ADMIN")]
    public function getUserById($id): JsonResponse
    {
        $user = $this->entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            throw new NotFoundHttpException();
        }

        return new JsonResponse($user->getUser());
    }

    #[Route('/api/users', methods: "GET")]
    #[IsGranted("ROLE_ADMIN")]
    public function getUsers(): JsonResponse
    {
        $users = $this->entityManager->getRepository(User::class)->findAll();

        $allUsers = array();

        foreach ($users as $user) {
            $allUsers[] = $user->getUser();
        }

        return new JsonResponse($allUsers);
    }

    #[Route('/api/future-users/{id}', methods: "GET")]
    #[IsGranted("ROLE_ADMIN")]
    public function getFutureUserById($id): JsonResponse
    {
        $futureUser = $this->entityManager->getRepository(FutureUser::class)->find($id);

        if (!$futureUser) {
            throw new NotFoundHttpException();
        }

        return new JsonResponse($futureUser->getFutureUser());
    }


    #[Route('/api/future-users', methods: "GET")]
    #[IsGranted("ROLE_ADMIN")]
    public function getFutureUsers(): JsonResponse
    {
        $futureUsers = $this->entityManager->getRepository(FutureUser::class)->findBy(['isValidated' => false]);

        $allFutureUsers = array();

        foreach ($futureUsers as $user) {
            $allFutureUsers[] = $user->getFutureUser();
        }

        return new JsonResponse($allFutureUsers);
    }

}
