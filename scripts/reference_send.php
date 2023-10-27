<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//cs">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<title>Daniela Jakubcová - Odesílání reference</title>

</head>
<body>
<meta http-equiv="refresh" content="0;url=reference_send-success.html">
<?php

if( !empty($_POST['name__reference']) || !empty($_POST['text-reference']) ){

    $to = "tomas.jakubec@outlook.com";
    $subject = "REFERENCE Z WEBU KE VLOŽENÍ";
    $name = $_REQUEST['name-reference'];

    $MESSAGE_BODY .= "NADPIS REFERENCE -- // ".$_POST["header-reference"]."\r\n";
    $MESSAGE_BODY .= "TEXT REFERENCE -- // ".$_POST["text-reference"]."\r\n"."- - - - - - - - - - -"."\r\n";

    $MESSAGE_BODY .= "JMÉNO KLIENTA/KLIENTKY -- // ".$_POST["name-reference"]."\r\n";
    $MESSAGE_BODY .= "KONTAKT -- // ".$_POST["contact-reference"]."\r\n"."- - - - - - - - - - -"."\r\n";

    $MESSAGE_BODY .= "UDĚLENÝ SOUHLAS: ".$_REQUEST['name-reference']."odesláním tohoto formuláře souhlasil/a se zpracováním svých osobních údajů. Souhlas byl udělen dnem odeslání této žádosti na dobu neurčitou.";

    $from = $_REQUEST['name-reference'];
    $headers .= "Content-type: text/plain; charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit";  

    mail($to,$subject,$MESSAGE_BODY,$headers);
    
}

;?> 

</body>
</html>