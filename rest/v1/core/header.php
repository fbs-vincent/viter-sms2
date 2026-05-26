<?php

// THIS SETUP ACCEPTS DATA TYPE NOT FILE OR IMAGE
header("Content-Type: application/json");
// THIS SETUP ACCEPTS ANY LINK WHO WANTS TO USE OUR API
header("Access-Control-Allow-Origin: *"); // localhost
// header("Access-Control-Allow-Origin: https://www.facebook.com"); // production
// THIS SETUP IS FOR SECURITY PURPOSES
// header("Access-Control-Allow-Credentials: true");
// THIS SETUP IS WHAT DOES METHOD ACCEPTS IN OUR APPLICATION
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
// THIS SETUP IS FOR DATE OF THE SERVER
date_default_timezone_set('Asia/Manila');
