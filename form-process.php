<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n Email: $email \n Message: $message";
$recipient = "kissa101295@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank you for contacting me. I will get back to you as soon as possible:)" . " -" . "<a href='index.html' style='text-decoration:none;color:#C512DC;'> Return to my Portfolio</a>";
?>
