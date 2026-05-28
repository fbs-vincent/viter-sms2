<?php

// DECLARATION OF CONNECTION TO DATABASE
$conn = null; // RESET CONNECTION
$conn = checkDbConnection(); // SET CONNECTION TO DATABASE
// STORE MODEL CLASS IN VARIABLE
$val = new Students($conn);
// TO CHECK PARAMETER IN THE URL
if (array_key_exists('id', $_GET)) {
    $val->students_aid = $_GET['id'];
    checkId($val->students_aid);

    $query = checkDelete($val);
    returnSuccess($val, 'Students', $query);
}



checkEndpoint();
