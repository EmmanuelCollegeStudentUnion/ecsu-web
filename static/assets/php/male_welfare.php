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
$email_body = "Hi Will, \n \n A new anonymous welfare form has been submitted via the ECSU main site. The alias they have provided is: $name.\n \n".
    
    "The message reads: \n $message \n \n".
    
    "If there are any errors in this form, please let me know. \n \n Ciao, \n Blammin | ".
    
$to = "wr258@cam.ac.uk";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../../pages/sent.html');


?>
