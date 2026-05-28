<?php
namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\Routing\Attribute\Route;

class ProjectController extends AbstractController 
{
  #[Route('api/projects', name: 'api_projects_index', methods:['GET'])]
  public function index(): JsonResponse
  {
    $statuses = ['active', 'paused', 'completed'];

    $projects=[];

    for($i = 1; $i <= 20; $i++) {
        $projects[] = [
          'id' => $i,
          'name' => "Project {$i}",
          'ClientName' => "Client {$i}",
          'status' => $statuses[$i % count($statuses)],
          'dueDate' => (new \DateTimeImmutable("+{$i} days"))->format('Y-m-d'),
        ];
    }
    return $this->json($projects);
  }
}