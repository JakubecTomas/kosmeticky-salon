<?php 
define("FROM_EMAIL", "poukaz@kosmetika-daniela.cz");


$post_keys = array("jmeno", "telefon", "email", "poznamkaSalon", "provedeni", "vyzvednuti", "dorucovaciAdresa", "osetreni", "osetreniCena", "cenaVcetnePostovneho", "kodPoukazu", "obdarovana", "prani", "variabilniSymbol");

$keys_labels = array("jmeno" => "Jméno objednavatele: ", "telefon" => "Telefon: ", "email" => "E-mail: ", "poznamkaSalon" => "Poznámka do salonu: ", "provedeni" => "Varianta poukazu: ", "vyzvednuti" => "Vyzvednutí: ", "dorucovaciAdresa" => "Odešleme na adresu", "osetreni" => "VYBRANÉ OŠETŘENÍ: ", "osetreniCena" => "HODNOTA POUKAZU: ", "cenaVcetnePostovneho" => "CENA VČETNĚ POŠTOVNÉHO: ", "kodPoukazu" => "Kód poukazu: ", "obdarovana" => "Pro: ", "prani" => "Přání k poukazu: ", "variabilniSymbol" => "Variabilní symbol: ");

$keys_exists = true;
$data = array();

foreach($post_keys as $key){
	if(!isset($_POST[$key])){
		$keys_exists = false;
	} else {
		$data[$key] = strip_tags(htmlspecialchars($_POST[$key]));
	}
}

if($keys_exists){

	$content = "";
	$content .= "<h2>Poptávka poukazu</h2>";

	// filtr prázdných hodnot
	$data = array_filter($data, function($value) {
		return $value !== 'null' && $value !== ''; 
	});

	// Projde všechny data a vypíše do contentu
	foreach($data as $key => $item){
		if($key != 'variabilniSymbol') {
			$content .=  "<b>" . $keys_labels[$key] . "</b><br>" . " " . $item . "<br><br>";
		}
	}




	$content .= "<b>Platnost poukazu:</b><br>6 měsíců od data vystavení";
	$content .= "<br><br>";



	if($data["vyzvednuti"] == '') {
		$content .=  "<br><br>" . "<b>" . "PLATEBNÍ ÚDAJE:<br>- - - - - - - - - - - - - - -<br>číslo účtu:</b> 288850775/0300<br><b>variabilní symbol:</b> " . $data["variabilniSymbol"] . "<br>" . "<b>Částka k zaplacení: " . $data["osetreniCena"] . "</b>" . "<br><br>";
	}
	
	if($data["vyzvednuti"] == 'odeslat na adresu') {
		$content .=  "<br><br>" . "<b>" . "UPOZORNĚNÍ:" . "<br>" . "Poukaz odešleme po připsání celé částky na účet (včetně poštovného). Běžně odesíláme doporučeně, Českou poštou." . "</b>";

		$content .=  "<br><br>" . "<b>" . "PLATEBNÍ ÚDAJE:<br>- - - - - - - - - - - - - - -<br>číslo účtu:</b> 288850775/0300<br><b>variabilní symbol:</b> " . $data["variabilniSymbol"] . "<br>" . "<b>Částka k zaplacení: " . $data["cenaVcetnePostovneho"] . "</b>" . "<br><br>";
	}

	if($data["vyzvednuti"] == 'v salonu')  {
		$content .=  "<br><br>" . "<b>" . "Jak poukaz připravíme, budeme Vás kontaktovat pro domluvení termínu vyzvednutí." . "</b>" . "<br><br>";
	}
	
	$content .= "<br><br><hr>";
	$content .= "Žadatel / Žadatelka odesláním poptávky souhlasil / a se zpracováním svých osobních údajů. Souhlas byl udělen dnem odeslání této žádosti na dobu nutnou pro dokončení objednávky dárkového poukazu.";
	
	
	$subject = 'Poptávka poukazu | www.kosmetika-daniela.cz';

	$headers = "From: " . FROM_EMAIL . "\r\n";
	$headers .= "Reply-To: ". "info@kosmetika-daniela.cz" . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";
	
	if(mail("poukaz@kosmetika-daniela.cz", $subject, $content, $headers)) {
		echo "{\"result\":\"true\"}";
		
		mail($data["email"], $subject, $content, $headers);
	} else {
		echo "{\"result\":\"false\",\"reason\":\"Mail function failed\"}";
	}
	
} else {
	echo "{\"result\":\"false\",\"reason\":\"All data not sent\"}";
}