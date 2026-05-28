<?php

// REQUIRE TO ACCEPT JSON DATA
require_once "../../../core/header.php";
// REQUIRE NEEDED FUNCTIONS
require_once "../../../core/functions.php";
// REQUIRE THE MODEL CLASSES
require_once "../../../models/developer/students/Students.php";
// GET PAYLOAD FROM FRONTEND
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// HTTP AUTHORIZATION IS THE FIRST LAYER OF SECURITY OF OUR WEB APP
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    // POST == CREATE A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
    // GET == RETRIEVE A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
    // PUT == UPDATE A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "PUT") {
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }
    // DELETE == DELETE A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}

// THIS IS TO PREVENT WHITE PAGE
http_response_code(200);
checkAccess();
