<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = 'anonymous';
$visitor_email = 'anonymous';
$message = $_POST['message'];


$email_from = 'ECSU';//<== update the email address
$email_subject = "New ECSU Form submission";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $message \n".

$to = "webmaster@ecsu.org.uk";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: /sent');




?>
