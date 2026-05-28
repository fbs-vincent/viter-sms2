<?php

// REQUIRE TO ACCEPT JSON DATA
require_once "../../../core/header.php";
// REQUIRE NEEDED FUNCTIONS
require_once "../../../core/functions.php";
// REQUIRE THE MODEL CLASSES
require_once "../../../models/developer/students/Students.php";
// connect to db
$conn = null;
$conn = checkDbConnection();
// GET PAYLOAD FROM FRONTEND
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// store models in a variable
$val = new Students($conn);

// HTTP AUTHORIZATION IS THE FIRST LAYER OF SECURITY OF OUR WEB APP
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if (array_key_exists('id', $_GET)) {
        $val->students_aid = $_GET['id'];
        $val->students_is_active = trim($data['isActive']);
        $val->students_updated = date('Y-m-d H:i:s');

        // validation
        checkId($val->students_aid);

        $query = checkActive($val);

        http_response_code(200);
        returnSuccess($val, 'Students Active', $query);
    }
}

// THIS IS TO PREVENT WHITE PAGE
http_response_code(200);
checkAccess();
