<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "Bensemmane001@gmail.com";
    $subject = "Nouveau message de $name (MetroQual)";
    $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('✅ Message envoyé avec succès'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('❌ Erreur lors de l\\'envoi'); window.location.href='contact.html';</script>";
    }
}
?>
