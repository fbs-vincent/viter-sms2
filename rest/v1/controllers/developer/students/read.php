<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// use models
$val = new Students($conn);

// students?id=11
// THIS IS FOR REQUEST WITH SPECIFIC ID
if (array_key_exists('id', $_GET)) {
    $val->students_aid = $_GET['id'];
    checkId($val->students_aid);
    $query = checkReadById($val);
    http_response_code(200);
    getQueriedData($query);
}

// students
// THIS IS FOR REQUEST FOR READING ALL
if (empty($_GET)) {
    $query = checkReadAll($val);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
