<?php

require_once "Database.php";
require_once "Response.php";

// THIS FUNCTION IS FOR USING THE DATABASE CONNECTION TO OTHER FILES
function checkDbConnection()
{
    try {
        $conn = Database::connectDb();
        return $conn;
    } catch (Throwable $e) {
        returnHandleError("Hindi nag connect sa Database pogi.");
    }
}

function checkQuery($query, $msg)
{
    if (!$query) returnHandleError($msg);
}

// object is the file in models directory
function checkCreate($object)
{
    $query = $object->create();
    checkQuery($query, "There's a problem processing your request. (create)");
    return $query;
}

// object is the file in models directory
function checkReadAll($object)
{
    $query = $object->readAll();
    checkQuery($query, "There's a problem processing your request. (readAll)");
    return $query;
}

// object is the file in models directory
function checkReadById($object)
{
    $query = $object->readById();
    checkQuery($query, "There's a problem processing your request. (readById)");
    return $query;
}

// object is the file in models directory
function checkUpdate($object)
{
    $query = $object->update();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

// object is the file in models directory
function checkDelete($object)
{
    $query = $object->delete();
    checkQuery($query, "There's a problem processing your request. (delete)");
    return $query;
}

// object is the file in models directory
function checkActive($object)
{
    $query = $object->active();
    checkQuery($query, "There's a problem processing your request. (active)");
    return $query;
}

// THIS FUNCTION RETURN SUCCESS IF UPDATES IN THE DATABASE IS SUCCESSFULL
function returnSuccess($object, $name, $query, $data = null)
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = $data;
    $returnData['count'] = $query->rowCount();
    $returnData["{$name} ID"] = $object->lastInsertedId;
    $returnData['success'] = true;
    $returnData['server_date'] = date("Y-m-d");
    $response->setData($returnData);
    $response->send();
    exit;
}

// THIS FUNCTION WILL RETRIEVE ALL DATA
function getResultData($query)
{
    $data = $query->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}


// THIS FUNCTION IS TO RETRIEVE THE DATA FROM MODELS
function getQueriedData($query)
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = getResultData($query);
    $returnData['count'] = $query->rowCount();
    $returnData['success'] = true;
    $returnData['server_date'] = date("Y-m-d");
    $response->setData($returnData);
    $response->send();
    exit();
}

// THIS FUNCTION CREATES A REUSABLE ERROR RESPONSE
function returnHandleError($msg, $error_message = 'Mali ka pogi', $error_description = '', $error_code = 'Mali ka ng request pogi')
{
    $response = new Response();
    $error = [];
    $response->setSuccess(false);
    $error['count'] = 0;
    $error['success'] = false;
    $error['error'] = $msg;
    $error['error_message'] = $error_message;
    $error['error_description'] = $error_description;
    $error['error_code'] = $error_code;
    $response->setData($error);
    $response->send();
    exit;
}

function sendResponse($result)
{
    $response = new Response();
    $response->setSuccess(true);
    $response->setStatusCode(200);
    $response->setData($result);
    $response->send();
}

function checkAccess()
{
    returnHandleError('Forbidden Access', 'Invalid Request', '', '401');
}

function checkEndpoint()
{
    returnHandleError('Endpoint Not Found.', 'Invalid Request', '', '404');
}

function checkId($id)
{
    if (!$id || !is_numeric($id)) {
        returnHandleError('Invalid ID', 'Invalid Request', '', '402');
    }
}
