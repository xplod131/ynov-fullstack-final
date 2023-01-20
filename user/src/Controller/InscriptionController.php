<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/inscription', name: 'app_admin_api')]
class InscriptionController extends AbstractController
{

    private EntityManagerInterface $entityManager;
    private UserPasswordHasherInterface $hasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $hasher)
    {
        $this->entityManager = $entityManager;
        $this->hasher = $hasher;

    }

    #[Route('/', methods: "POST")]
    public function createFutureUser(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $futureUser = new FutureUser();
        $futureUser->setEmail($data['email']);
        $futureUser->setFirstName($data['firstName']);
        $futureUser->setLastName($data['lastName']);
        $futureUser->setPhoneNumber($data['phoneNumber']);
        $futureUser->setNationality($data['nationality']);

        $this->entityManager->persist($futureUser);
        $this->entityManager->flush();


        return new JsonResponse(['id' => $futureUser->getId()], Response::HTTP_CREATED);
    }

    #[Route('/validate-user/{id}', methods: "POST")]
    #[IsGranted("ROLE_ADMIN")]
    public function validateFutureUser(int $id): JsonResponse
    {
        $futureUser = $this->entityManager->getRepository(FutureUser::class)->find($id);
        if (!$futureUser) {
            throw new NotFoundHttpException();
        }

        $user = new User();
        $user->setEmail($futureUser->getEmail());
        $user->setFirstName($futureUser->getFirstName());
        $user->setLastName($futureUser->getLastName());
        $user->setPhoneNumber($futureUser->getPhoneNumber());
        $user->setNationality($futureUser->getNationality());
        // Set default password and role for the User
        $user->setPassword($this->hasher->hashPassword($user, 'password'));
        $user->setRoles(['ROLE_USER']);

        $this->entityManager->remove($futureUser);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new JsonResponse(['id' => $user->getId()], Response::HTTP_CREATED);
    }

}
