<?php  
header('Access-Control-Allow-Origin: *');
if(isset($_POST['jx'])){

$name = $_POST['name'];
    $usremail = $_POST['email'];
$usrnum = $_POST['phone'];


$to = "ronald@happenize.com";
         $subject = "Muzun";
         
         $message = "<h1>Muzun</h1>";
         $message .= "<label><b>Name :</b> <label>  ".$name."<br>";
         $message .= "<label><b>Email :</b> <label>  ".$usremail."<br>";
         $message .= "<label><b>Phone :</b> <label>  ".$usrnum."<br>";
         if(isset($_POST['msg'])){ $msg = $_POST['msg'];
         $message .= "<label>Message : <label>  ".$msg."<br>";}
         $header = "From:Muzun <no-reply@muzun.com> \r\n";
         $header .= "Cc:info@happenize.com,rabia@happenize.com,taha@happenize.com< \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }


      }
	  
	  
/*****Slide Form****/
 if(isset($_POST['cu'])){
          
$usrnum = $_POST['phone'];

		  $usrnum = $_POST['phone'];
		  $to = "happenize@yopmail.com";
         $subject = "Call Us Now Muzun";
		 $message = "<h1>Call Us Now Slide Form</h1>";
		 $message .= "<label><b>Phone :</b> <label>  ".$usrnum;
         $header = "From:Call Us Now Slide Form <no-reply@happenize.ae> \r\n";
         $header .= "Cc:rabia@happenize.com,ronald@happenize.com< \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
		 $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }

	  }	  
	  
/******Call Me Later Form*****/
if(isset($_POST['cb'])){ 
   $usrnum = $_POST['phone'];
   $day = $_POST['day'];
   $time = $_POST['time'];

        $to = " happenize@yopmail.com";
         $subject = "MUZUN Landing Page - Call Later ";
         
         $message = "<h1>Muzun Landing Page - Call Later</h1>";
         $message .= "<label><b>Day :</b> <label>  ".$day."<br>";
         $message .= "<label><b>Time :</b> <label>  ".$time."<br>";
         $message .= "<label><b>Phone :</b> <label>  ".$usrnum."<br>";
         $header = "From:Muzun Call me Later <no-reply@muzun.ae> \r\n";
         $header .= "Cc:info@happenize.com,ronald@happenize.com< \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }


      }
if(isset($_POST['lv'])){

$msg = $_POST['msg'];
$usremail = $_POST['email'];
$usrnum = $_POST['phone'];


$to = "happenize@yopmail.com";
         $subject = "Muzun Landing Page - Leave Message Form";
         
         $message = "<h1>Muzun Landing Page - Leave Message Form</h1>";
         $message .= "<label><b>Email :</b> <label>  ".$usremail."<br>";
         $message .= "<label><b>Phone :</b> <label>  ".$usrnum."<br>"; 
         $message .= "<label><b>Message :</b> <label>  ".$msg."<br>"; 
         $header = "From:Muzun Landing Page <no-reply@muzun.ae> \r\n";
         $header .= "Cc:rabia@happenize.com, ronald@happenize.com< \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }


      }
/******Call Me Form******/
if(isset($_POST['callme'])){
$usrnum = $_POST['phone'];


$to = "happenize@yopmail.com";
         $subject = "Muzun - Call Me Back";
           
         $message .= "<label><b>Phone :</b> <label>  ".$usrnum."";
         if(isset($_POST['msg'])){ $msg = $_POST['msg'];
         $message .= "<label>Message : <label>  ".$msg."<br>";}
         $header = "From:Muzun Landing Page - Call Me <no-reply@muzun.ae> \r\n";
         $header .= "Cc:rabia@happenize.com,ronald@happenize.com< \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }


      }	  
	  
	  
?>