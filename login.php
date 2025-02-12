<?php
header('Content-Type: application/json');

$valid_email = 'usuario@exemplo.com';
$valid_password = 'senha123';


$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$password = $data['password'];


if ($email === $valid_email && $password === $valid_password) {
    $response = array('success' => true, 'message' => 'Login bem-sucedido!');
} else {
    $response = array('success' => false, 'message' => 'E-mail ou senha incorretos.');
}


echo json_encode($response);
?>
