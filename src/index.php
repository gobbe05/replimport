<?php 
//Defines the access and allows origin to access
header("Access-Control-Allow-Origin: *");
//Gets content from a post 
$rest_json = file_get_contents("php://input")
$_POST = json_decode($rest_json, true)


//Checks if fields are empty
if(empty($_POST['name']) && empty($_POST['email'])) die();

//Checks if the post is incoming (I think)

if($_POST) {


    //set response code (200)

    http_response_code(200)
    
    //Sets direction and which email it is sent from
    $subject = $_POST['name'];
    $to = "gabbe05gr@gmail.com";
    $from = $_POST['email'];

    //Data

    $msg = $_POST['messaged'];


    //Declare headers (Dont know what it is yet)
    $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";

    //Send mail
    mail($to, $subject, $message, $headers);

    // echo json_encode( $_POST );

    echojson_encode(array(
        "sent" => true
    ));
}

else {
    //Tell user about the error

    echojson_encode(["sent" => false, "message" => "Something went wrong"]);
}