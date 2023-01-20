<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('user@example.com');
        $user->setFirstName('User');
        $user->setLastName('Test');
        $user->setNationality('Français');
        $user->setPhoneNumber('0600000000');
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);
        $user->setRoles(["ROLE_USER"]);

        $manager->persist($user);

        $admin = new User();
        $admin->setEmail("admin@example.com");
        $admin->setFirstName('Admin');
        $admin->setLastName('Test');
        $admin->setNationality('Français');
        $admin->setPhoneNumber('0600000000');
        $passwordAdmin = $this->hasher->hashPassword($user, 'password');
        $admin->setPassword($passwordAdmin);
        $admin->setRoles(["ROLE_ADMIN"]);

        $manager->persist($admin);

        $manager->flush();
    }
}
