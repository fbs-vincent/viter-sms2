<?php

// DECLARATION OF CONNECTION TO DATABASE
$conn = null; // RESET CONNECTION
$conn = checkDbConnection(); // SET CONNECTION TO DATABASE
// STORE MODEL CLASS IN VARIABLE
$val = new Students($conn);


// TO CHECK PARAMETER IN THE URL
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

$val->students_is_active = 1;
$val->students_id = $data['students_id'];
$val->students_first_name = $data['students_first_name'];
$val->students_middle_name = $data['students_middle_name'];
$val->students_last_name = $data['students_last_name'];
$val->students_section = $data['students_section'];
$val->students_grade = $data['students_grade'];
$val->students_created = date('Y-m-d H:i:s');
$val->students_updated = date('Y-m-d H:i:s');

$query = checkCreate($val);
returnSuccess($val, 'Students', $query);
