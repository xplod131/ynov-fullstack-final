<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin', name: 'app_admin_api')]
class AdminApiController extends AbstractController
{
    #[Route('/', methods: "GET")]
    #[IsGranted("ROLE_ADMIN")]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json([
            'message' => "Congratulations you are admin",
            'user' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()]
        );
    }
}
