<?php
include 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Check if email already exists
    $check_sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $check_sql);
    if (mysqli_num_rows($result) > 0) {
        echo json_encode(['success' => false, 'error' => 'Email already exists']);
        exit;
    }

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    
    if (mysqli_query($conn, $sql)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => mysqli_error($conn)]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
?>