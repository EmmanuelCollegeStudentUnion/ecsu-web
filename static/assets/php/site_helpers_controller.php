<?php
App::Import('Lib', 'EcsuOfficers'); // for officer email addresses

class SiteHelpersController extends AppController {

	var $name = 'SiteHelpers';
	var $useTable = false;

	var $womensOfficerName = 'Eliza';
	var $commsOfficerName = 'Amira';

	function emma_request_gym_application_student() {
		$this->set('title_for_layout', 'Request a Gym Application Form');
		if(count(func_get_args()) > 0) {
			$name = $this->Session->read('Auth.User.firstname') . ' ' . $this->Session->read('Auth.User.lastname');
			$this->gym_app_request('president@ecsu.org.uk', 'Katie Craven', $name);
			//$this->gym_app_request('communications@ecsu.org.uk', 'Hannah', $name);
			$this->redirect('/');
		}
	}

	function request_gym_application_staff() {
                $this->set('title_for_layout', 'Request a Gym Application Form - STAFF ONLY');
		if(!empty($this->data)) {
			$this->gym_app_request('pt318@emma.cam.ac.uk', 'Peter Twitchett', $this->data['SiteHelper']['name']);
			$this->redirect('/');
		}
	}

	private function gym_app_request($to, $toname, $reqname) {
		$title = 'REQUESTING GYM APPLICATION FORM';
		$header = "From: ECSU Website <website@ecsu.org.uk>\r\n";
		$header .= "Reply-To: communications@ecsu.org.uk";

		$message = 'Dear ' . $toname . "\n\n";
		$message .= 'This is an automated email to inform you that *' . $reqname . '* has requested a gym application form from the ECSU Website at '. date('g:ia, jS M \'y'). '.' . "\n\n";
		$message .= 'Many thanks,'. "\n". $this->commsOfficerName;

		$result = mail($to, $title, $message, $header);

		if($result) {
			$this->Session->setFlash('An email has been sent to '.$toname . ' with your request for a gym application form.', 'good-flash');
		} else {
			$this->Session->setFlash('An error occured when attempting to send the request. Please email '.$toname.'('.$to.') with the subject \'REQUESTING GYM APPLICATION FORM\'.', 'bad-flash');
		}
	}
	/**
	 * Sends a pregnancy test kit request to the Women's Officer
	 */
	function request() {
		$message = 'Dear '. $this->womensOfficerName.','."\n\n";
		$message .= 'This is an automated email to inform you that a pregnancy test was anonymously requested from the ECSU website at '. date('g:ia, jS M \'y').'.'."\n\n";
		$message .= 'Many thanks,'."\n".$this->commsOfficerName;

		$message = wordwrap($message, 70);

		$title = 'ECSU - Pregnancy Test Requested';
		$addr = ‘webmaster@ecsu.org.uk’;

		$header = "From: ECSU Website <website@ecsu.org.uk>\r\n";
		$header .= "Reply-To: communications@ecsu.org.uk";

		$result = mail($addr, $title, $message, $header);

		if($result) {
			$this->Session->setFlash('We have anonymously emailed '.$this->womensOfficerName.', the Women\'s Officer, with your request. The test will be place in a brown, sealed envleope in her pigeonhole for you to collect.', 'good-flash');
		} else {
			$this->Session->setFlash('An error occured when attempting to send the request. Please try again or contact <a href="/about/exec/womens">'.$this->womensOfficerName.'</a> in the strictest confidence.', 'bad-flash');
		}
		$this->redirect($this->referer());
	}

	/**
	 * Handles Roar file uploading by Exec members. Also optimises uploaded files.
	 */
	function exec_roar_upload() {
		$this->set('title_for_layout', 'Roar! Uploader');
		if(isset($this->data)) {
			if($this->data['SiteHelper']['issue']['error'] != 0) {
				// If there is an error, report and stop
				$this->Session->setFlash('Error number ' . $this->data['SiteHelper']['issue']['error'] .' occured. Please contact the Comms Officer.', 'bad-flash');
			} elseif($this->data['SiteHelper']['issue']['type'] != 'application/pdf') {
				// If the uploaded file isn't a PDF, report and stop
				$this->Session->setFlash('The uploaded file is not a PDF file.', 'bad-flash');
			} else {
				$roarDir = WWW_ROOT . 'downloads/roar/'.date('Y').'/';
				if(!file_exists($roarDir)) {
					// If the Roar directory doesn't exist, create it.
					mkdir($roarDir, 0774, TRUE);
				}
				if(is_dir($roarDir)) {
					// If the Roar directory exists and is a directory convert the tmp_file to actual file
					$roarFile = $roarDir . $this->data['SiteHelper']['term'].'Roar'.$this->data['SiteHelper']['num']. '.pdf';
					$tmpName = $this->data['SiteHelper']['issue']['tmp_name'];
					$str = shell_exec('gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile='.$roarFile.' '.$tmpName);
					chmod($roarFile, 0664);
					$this->Session->setFlash('Uploaded successfully! The path you need for the <code>downloads</code> function is <code>/downloads/roar/'.date('Y').'/'.$this->data['SiteHelper']['term'].'Roar'.$this->data['SiteHelper']['num'].'.pdf</code>', 'good-flash');
				} else {
					$this->Session->setFlash('The Roar! Directory is a file! Contact the Comms Officer.', 'bad-flash');
				}
			}
		}
	}

	function admin_view_source($class, $type = 'controller') {
		$this->set('title_for_layout', 'View Source');
		$path = '';
		switch($type) {
			case 'controller':
				$path = CONTROLLERS . $class . '_controller.php';
				break;
			case 'model':
				$path = MODELS . $class . '.php';
				break;
			case 'component':
				$path = COMPONENTS . $class . '.php';
				break;
			case 'helper':
				$path = VIEWS .'helpers/'. $class . '.php';
				break;
			default:
				$this->Session->setFlash('Invalid type.', 'bad-flash');
			$this->redirect(array('controller' => 'pages', 'action' => 'index', 'prefix' => 'admin'));
			return;
		}
		$file = file_get_contents($path);
		$file = htmlentities($file, ENT_NOQUOTES, 'UTF-8');
		$this->set('file', $file);
		$this->set('path', $path);

	}
	
	/**
	 * Sends feedback to the officers
	 */
	function feedback_form() {
	    $fields = $this->data['SiteHelper'];
	    
	    // validation
	    $possible_emails = EcsuOfficers::emails();
	    $valid_email = array_key_exists($fields['Officer'], $possible_emails);
	    $valid_email = $valid_email && (empty($fields['SecondOfficer']) || array_key_exists($fields['Officer'], $possible_emails));
	    if(!$valid_email) {
	        $this->Session->setFlash('Attempted to send feedback to invalid email.', 'bad-flash');
	        $this->redirect($this->referer());
	        return;
	    }
	    
	    // Format fields
	    $officers = $fields['Officer'];
	    if(!empty($fields['SecondOfficer'])) {
	        $officers .= ' and ' . $fields['SecondOfficer'] . ' officers';
	    } else {
	        $officers .= ' officer';
	    }
	    
	    // prefix feedback lines with '> ' to appear as a quote
	    $feedback = str_replace("\r\n", "\n", $fields['Feedback']);
	    $feedback = explode("\n", $feedback);
	    $feedback = implode("\n> ", $feedback);
	    $feedback = "\n> " . wordwrap($feedback, 68, "\n> ");
	    
	    
		$message = 'Dear ECSU member,'."\n\n";
		$message .= 'This is an automated email to inform you of some anonymous feedback that has been addressed to the ' . $officers . '. ';
		$message .= 'It was submitted through the ECSU website on '. date('jS M \'y').'.'."\n\n";
		$message .= 'Feedback:'."\n";
		$message .= $feedback."\n\n"; //QUOTE
		$message .= 'Many thanks.';
		
		$message = wordwrap($message, 70);

		$title = 'ECSU - Anonymous Feedback';
		$addr = $fields['Officer'] . '@ecsu.org.uk';
		if(!empty($fields['SecondOfficer'])) {
		    $addr .= ', ' . $fields['SecondOfficer'] . '@ecsu.org.uk';
		}

		$header = "From: ECSU Website <website@ecsu.org.uk>\r\n";
		$header .= "Reply-To: no-reply@ecsu.org.uk";

		$result = mail($addr, $title, $message, $header);

		if($result) {
			$this->Session->setFlash('We have emailed the anonymous feedback to the ' . $officers, 'good-flash');
		} else {
			$this->Session->setFlash('An error occured when attempting to send the feedback. Please try again or report the error to the <a href="/about/exec/communications">communications officer</a>.', 'bad-flash');
		}
		$this->redirect($this->referer());
	}
}
?>
