// průběh cesty
if(localStorage.getItem("predchozi") == "hodnota") {
    document.getElementById("value-or-offer").textContent = "s vybranou hodnotou"
}

// zobrazení výběru údajů do poukazu dle logiky výběr hodnoty VS výběr ošetření
if(localStorage.getItem("hodnotaVyber")) {
    document.querySelector(".send-paper-voucher").style.display = "none";
}



//zobrazení možností pro papírovou verzi
function showSendPaper() {
    if( document.getElementById("papirova-verze").checked = true) {
        document.querySelector(".send-voucher-courier").style.display = 'flex';
        document.querySelector(".email-client-text-label").style.display = 'none';
        document.querySelector(".gifted-textarea").style.display = 'none';
    }
    else {
        document.querySelector(".send-voucher-courier").style.display = 'none';
        document.querySelector(".email-client-text-label").style.display = 'inline';
    }
}


//zobrazení možností pro elektronickou verzi
function hiddenSendPaper() {
    if( document.getElementById("elektronicka-verze").checked = true) {
        document.querySelector(".send-voucher-courier").style.display = 'none';
        document.querySelector(".email-client-text-label").style.display = 'inline';
        document.querySelector(".gifted-textarea").style.display = 'flex';
    }
    else {
        document.querySelector(".send-voucher-courier").style.display = 'flex';
        document.querySelector(".email-client-text-label").style.display = 'none';
    }
}


// -----------------------
// VALIDACE DAT - KONTAKTY
// -----------------------
function showDeliveryAddress() {
if( document.getElementById("ship-letter").checked == true) {
    document.querySelector("#delivery-address").style.display = 'flex';
}
else {
    document.querySelector("#delivery-address").style.display = 'none';
}
}


//validace vyplnění a nextStep
let NextStepLink = document.getElementById("ValidateNext");
NextStepLink.addEventListener('click', ValidateInput);

function ValidateInput() {

//validace kontaktu
    if( document.querySelector(".name-label").value == "") {
        document.querySelector("#errorEmptyNameClient").style.display = 'flex';
    }
    else {
        document.querySelector("#errorEmptyNameClient").style.display = 'none';
    }

// validace emailu
    if( document.querySelector(".email-label").value == "") {
        document.querySelector("#errorEmptyEmail").style.display = 'flex';
    }
    else {
        document.querySelector("#errorEmptyEmail").style.display = 'none';
    }

// validace jména obdarovaného
    if( document.querySelector(".gifted-name-label").value == "") {
        document.querySelector("#errorEmptyGifted").style.display = 'flex';
    }
    else {
        document.querySelector("#errorEmptyGifted").style.display = 'none';
    }

// validace doručovací adresy
    if( document.querySelector("#delivery-address_input").value == "") {
        document.querySelector("#errorEmptyDeliveryAddress").style.display = 'flex';
    }
    else {
        document.querySelector("#errorEmptyDeliveryAddress").style.display = 'none';
    }

// validace údajů do poukazu
    if( document.querySelector("#valueTreatments").checked || document.querySelector("#nameTreatments").checked) {
        document.querySelector("#errorEmptyCheckboxData").style.display = 'none';
    }
    else {
    document.querySelector("#errorEmptyCheckboxData").style.display = 'flex';
    }

// ulozeni do localStorage
localStorage.setItem("objednavatelJmeno", document.querySelector(".name-label").value);

localStorage.setItem("objednavatelTelefon", document.querySelector(".phone-label").value);

localStorage.setItem("objednavatelEmail", document.querySelector(".email-label").value.trim());

localStorage.setItem("objednavatelPoznamkaSalonu", document.querySelector("#note-for-salon").value);

localStorage.setItem("dorucovaciAdresa", document.querySelector("#delivery-address_input").value);

localStorage.setItem("obdarovanyJmeno", document.querySelector(".gifted-name-label").value);

localStorage.setItem("obdarovanyPrani", document.querySelector("#wish-note").value);

    // provedeni poukazu
    if( document.getElementById("elektronicka-verze").checked) {
    localStorage.setItem("_PROVEDENI POUKAZU", document.getElementById("elektronicka-verze").value);
    }
    else {
    localStorage.setItem("_PROVEDENI POUKAZU", document.getElementById("papirova-verze").value);
    }

    // pozadovane udaje do poukazu
    if( document.getElementById("nameTreatments").checked) {
        localStorage.setItem("udajeDoPoukazu_1", document.getElementById("nameTreatments").value);
    }
   
    if( document.getElementById("valueTreatments").checked) {
        localStorage.setItem("udajeDoPoukazu_2", document.getElementById("valueTreatments").value);
    }

    // odeslat papirovy poukaz?
    if( document.querySelector(".send-letter").checked) {
        localStorage.setItem("odeslatPoukazKuryrem", document.querySelector(".send-letter").value);

    }

        

// detailni validace telefonniho cisla -- must return TRUE
    function validationPhone(phone) {
        let regex = /\d{9}/g;
        return regex.test(phone);
    }
    if(validationPhone(localStorage.getItem("objednavatelTelefon").trim()) == false) {
        document.querySelector("#errorPhone").style.display = 'flex';
    }
    else {
        document.querySelector("#errorPhone").style.display = 'none';
    }


// detailni validace e-mailu -- must return TRUE
    function validationEmail(email) {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return regex.test(email);
    }
    if(validationEmail(localStorage.getItem("objednavatelEmail").trim()) == false) {
        document.querySelector("#errorEmptyEmail").style.display = 'flex';
    }
    else {
        document.querySelector("#errorEmptyEmail").style.display = 'none';
    }



// zaverecna validace a zmena odkazu na sumar (různý sumář dle výběru hodnota VS ošetření)
if(document.querySelector("#errorEmptyNameClient").style.display == 'none' && document.querySelector("#errorPhone").style.display == 'none' && document.querySelector("#errorEmptyEmail").style.display == 'none' && document.querySelector("#errorEmptyGifted").style.display == 'none' && document.querySelector("#errorEmptyCheckboxData").style.display == 'none' && document.getElementById("value-or-offer").textContent == "s vybranou hodnotou"){
    document.querySelector("#ValidateNext").setAttribute("href", "voucher-summary-value.html");
}

else if(document.querySelector("#errorEmptyNameClient").style.display == 'none' && document.querySelector("#errorPhone").style.display == 'none' && document.querySelector("#errorEmptyEmail").style.display == 'none' && document.querySelector("#errorEmptyGifted").style.display == 'none' && document.querySelector("#errorEmptyCheckboxData").style.display == 'none' && document.getElementById("value-or-offer").textContent == "s vybraným ošetřením") {
    document.querySelector("#ValidateNext").setAttribute("href", "voucher-summary-offer.html");
}

}