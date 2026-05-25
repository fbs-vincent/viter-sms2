<?php

// REQUIRE TO ACCEPT JSON DATA
require_once "../../core/header.php";
// REQUIRE NEEDED FUNCTIONS
require_once "../../core/functions.php";
// REQUIRE THE MODEL CLASSES
require_once "../../models/Students.php";
// GET PAYLOAD FROM FRONTEND
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// POST == CREATE A RECORD
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $result = require 'create.php';
    sendResponse($result);
    exit();
}
