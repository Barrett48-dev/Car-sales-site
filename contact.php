<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  // Format the message
  $entry = "Name: $name\nEmail: $email\nMessage: $message\n---------------------\n";

  // Save to messages.txt (append mode)
  file_put_contents("messages.txt", $entry, FILE_APPEND);

  // Confirmation message
  echo "<h2>Thanks, $name! Your message was received.</h2>";
}
?>