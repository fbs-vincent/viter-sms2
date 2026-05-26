<?php

// TO ACCESS THIS FUNCTION OUTSIDE THE CLASS
// Database::connectDb();
// Database::dbConnection(); // error, cannot be

class Database
{
    private static $dbConnection;

    public static function connectDb()
    {
        // LOCAL CONFIGURATION
        $host = "localhost";
        $dbName = "viter_sms_v1";
        $username = "root";
        $password = "";

        // PRODUCTION CONFIGURATION
        // $host = "localhost";
        // $dbName = "viter-sms-v1";
        // $username = "root";
        // $password = "";

        if (self::$dbConnection == null) {
            // CONNECTION TO DATABASE
            // PARAMETER IS THE DATA THAT WE WANT TO SEND (COMMA SEPARATED)
            // FIRST PARAMETER, CONNECTION STRING TO DATABASE HOST AND DATABASE NAME
            // SECOND PARAMETER, USERNAME
            // THIRD PARAMETER, PASSWORD
            self::$dbConnection = new PDO("mysql:host={$host};dbname={$dbName};", $username, $password);
            // FOR ERROR HANDLING PURPOSES, 
            // IF AN ERROR OCCURS IN DATABASE THEN WILL THROW AN EXCEPTION ERROR
            self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // FOR SECURITY PURPOSES TO PREVENT SQL INJECTION
            self::$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$dbConnection;
    }
}
