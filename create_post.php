<?php
include 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $content = mysqli_real_escape_string($conn, $_POST['content']);

    $sql = "INSERT INTO posts (user_id, content) VALUES ('$user_id', '$content')";
    
    if (mysqli_query($conn, $sql)) {
        echo json