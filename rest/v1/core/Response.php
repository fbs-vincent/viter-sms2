<?php

class Response
{
    private $_success;
    private $_data;
    private $_statusCode;
    private $_toCache = false;
    private $_responseData = [];


    // ONLY SET THE SUCCESS VAR IN THE RESPONSE CLASS
    public function setSuccess($success)
    {
        $this->_success = $success;
    }
    // ONLY SET THE DATA IN THE RESPONSE CLASS
    public function setData($data)
    {
        $this->_data = $data;
    }
    // ONLY SET THE STATUS CODE IN THE RESPONSE CLASS
    public function setStatusCode($statusCode)
    {
        $this->_statusCode = $statusCode;
    }
    // ONLY SET THE CACHE IN THE RESPONSE CLASS
    public function toCache($toCache)
    {
        $this->_toCache = $toCache;
    }
    // THIS FUNCTION SEND THE RESPONSE TO THE UI/FRONTEND CLIENT
    public function send()
    {
        header('Content-type:application/json');

        if ($this->_toCache == true) {
            header("Cache-Control: max-age=60");
        } else {
            header("Cache-Control: no-cache, no-store");
        }
        $this->_responseData == $this->_data;

        echo json_encode($this->_responseData);
    }
}
