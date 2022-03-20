<?php
require 'bdd-connect.php';

// $content = trim(file_get_contents("php://input"));

// $data = json_decode($content, true);

// $email = $data["emailValue"];

$email = $_POST['email'];

$emailSubmit=$pdo -> prepare('SELECT `email` FROM `utilisateurs` WHERE `email`=:email');
$emailSubmit -> execute(['email' => $email]);
$result = $emailSubmit->fetch(PDO::FETCH_ASSOC);


if($result['email'] == $email){
    echo '0';
}else{
    echo true;
}

// echo json_encode($_POST['email']);
?>