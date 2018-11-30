<?php
if(!isset($_POST['submit']))
{/**
	 * Sends a pregnancy test kit request to the Women's Officer
	 */
	function request() {
		$message = 'Dear '. $this->womensOfficerName.','."\n\n";
		$message .= 'This is an automated email to inform you that a pregnancy test was anonymously requested from the ECSU website at '. date('g:ia, jS M \'y').'.'."\n\n";
		$message .= 'Many thanks,'."\n".$this->commsOfficerName;

		$message = wordwrap($message, 70);

		$title = 'ECSU - Pregnancy Test Requested';
		$addr = ‘bl389@cam.ac.uk’;

		$header = "From: ECSU Website <website@ecsu.org.uk>\r\n";
		$header .= "Reply-To: communications@ecsu.org.uk";

		$result = mail($addr, $title, $message, $header);

		if($result) {
			$this->Session->setFlash('We have anonymously emailed Emily Robb, the Women\'s Officer, with your request. The test will be place in a brown, sealed envleope in her pigeonhole for you to collect.';
		} else {
			$this->Session->setFlash('An error occured when attempting to send the request. Please try again or contact <a href="../pages/womens_officer.html">Emily Robb</a> in the strictest confidence.');
		}

}
   
?> 