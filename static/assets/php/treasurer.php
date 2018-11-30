<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = 'Treasurer';
$visitor_email = 'Treasurer@ecsu.org.uk';
$message = $_POST['The Treasurer has requested that the status of the link to the funding applications be changed.'];


$email_from = 'ECSU';//<== update the email address
$email_subject = "Toggle Application Funding Request Form Access";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n The Treasurer has requested that the status of the link to the funding applications be changed. \n".

$to = "webmaster@ecsu.org.uk";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../../treasurer/treasurer.html');




?>
