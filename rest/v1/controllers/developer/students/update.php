<?php

// DECLARATION OF CONNECTION TO DATABASE
$conn = null; // RESET CONNECTION
$conn = checkDbConnection(); // SET CONNECTION TO DATABASE
// STORE MODEL CLASS IN VARIABLE
$val = new Students($conn);

$val->students_aid = $_GET['id'];
$val->students_id = $data['students_id'];
$val->students_first_name = $data['students_first_name'];
$val->students_middle_name = $data['students_middle_name'];
$val->students_last_name = $data['students_last_name'];
$val->students_section = $data['students_section'];
$val->students_grade = $data['students_grade'];
$val->students_updated = date('Y-m-d H:i:s');

// VALIDATION
checkId($val->students_aid);

$query = checkUpdate($val);
returnSuccess($val, 'Students', $query);
