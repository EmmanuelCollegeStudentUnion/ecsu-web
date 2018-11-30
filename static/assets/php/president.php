<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = 'ECSU';//<== update the email address
$email_subject = "Anonymous Welfare Form Submission";
$email_body = "Dear Glorious Leader, \n \n A new message has been submitted via the ECSU main site. This message was sent by $name.\n \n".
    
    "The message reads: \n $message \n \n".
    
    "If there are any errors in this form, please let me know. \n \n Ciao, \n Blammin | ".
    
$to = "president@ecsu.org.uk";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../../pages/sent.html');


?>
