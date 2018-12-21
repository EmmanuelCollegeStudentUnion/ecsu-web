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
$email_subject = "ECSU Pregnancy Test Request";
$email_body = "Dear Women's Officer, \n A message has been submitted through the ECSU webform from $name. \n".
    "The message proceeds as follows:  \n\n $message \n\n To reply to $name, press 'reply' in your email client. Please attempt to action this email within 24 hours of receiving it. \n Any questions regarding the operation of this system should be directed to the Webmaster, at webmaster@ecsu.org.uk \n The current address assigned for delivery is: ".

$to = "womens@ecsu.org.uk";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: /sent');

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}



?>
