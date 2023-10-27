// -----------------------
// VYPSÁNÍ HODNOT Z LOCALSTORAGE - SUMARIZACE
// -----------------------

// variabilní symbol - načtení z localStorage
let getVariabilniSymbol = localStorage.getItem("variabilniSymbol");
document.getElementById("vs-date").innerHTML = getVariabilniSymbol;

// vyzvednutí v salonu nebo odeslání kurýrem
let pickup = localStorage.getItem("odeslatPoukazKuryrem");
let pickupSpace = document.getElementById("summary-client-pickup");

// WRITE ceny ošetření
let clientPrice = localStorage.getItem("osetreniCena");
let giftedPriceSpace = document.getElementById("summary-gifted-price");
let finalPriceSpace = document.getElementById("summary-final-price");
// získání a vypsání pouze číselné hodnoty 
let finalPriceOnly = clientPrice;

// nastavení ceny poštovného
let deliveryPrice = 120;
let deliveryPriceArray = clientPrice.split("");
let deliveryPriceFilter = deliveryPriceArray.splice(10,4).join('').toString();
let deliveryPriceFinal = +deliveryPriceFilter + deliveryPrice;

 
finalPriceOnly = finalPriceOnly.substr(10);
finalPriceSpace.textContent = finalPriceOnly;



let deliveryAddress = localStorage.getItem("dorucovaciAdresa");
let deliveryAddressSpace = document.getElementById("summary-delivery-address");
let deliveryAddressParagraph = document.getElementById("summary-delivery-address-space");


let pickupNote = document.getElementById("summary-client-pickup-note");

if( (pickup == "odeslat na adresu") && (deliveryAddress !== "")) {
    pickupSpace.textContent = "odeslání kurýrem";
    deliveryAddressParagraph.style.display = "flex";
    deliveryAddressSpace.textContent = deliveryAddress;
    pickupNote.innerHTML = `<p>bankovním převodem na účet</p>
    <p>číslo účtu: 288850775/0300</p>
    <p>variabilní symbol: ${getVariabilniSymbol}</p>
    <p>částka k uhrazení: ${deliveryPriceFinal} Kč</p>
    <p>datum splatnosti: 7 dnů od data vystavení</p>
    
    <p>
        <b>Poukaz odesíláme po připsání celé částky na účet.</b><br>V případě neprovedení platby do data splatnosti bude poukaz automaticky stornován.
    </p>`;
}
else {
    pickupSpace.textContent = "vyzvednutí v salonu (po telefonické domluvě)";
}

if(deliveryAddress =="") {
    deliveryAddressSpace.style.display = "none";
}


// C.L.I.E.N.T

// jméno objednavatele
let clientName = localStorage.getItem("objednavatelJmeno");
let clientNameSpace = document.getElementById("summary-client-name");
clientNameSpace.textContent = clientName;
// telefon objednavatele
let clientPhone = localStorage.getItem("objednavatelTelefon");
let clientPhoneSpace = document.getElementById("summary-client-phone");
clientPhoneSpace.textContent = clientPhone;
// e-mail objednavatele
let clientEmail = localStorage.getItem("objednavatelEmail");
let clientEmailSpace = document.getElementById("summary-client-email");
clientEmailSpace.textContent = clientEmail;
// poznámka do salonu
let clientNote = localStorage.getItem("objednavatelPoznamkaSalonu");
let clientNoteSpace = document.getElementById("summary-client-note-salon");
clientNoteSpace.textContent = clientNote;



// G.I.F.T.E.D

// provedení poukazu
let variantVoucher = localStorage.getItem("_PROVEDENI POUKAZU");
let variantVoucherSpace = document.getElementById("summary-variant-voucher");
variantVoucherSpace.textContent = variantVoucher;

if(variantVoucher == "elektronická verze") {
    document.getElementById("client--remove-pickup").style.display = "none";
    document.getElementById("summary-client-pickup-note").textContent = "bankovním převodem na účet";
}

if(variantVoucher == "papírová verze") {
    document.getElementById("bank-account-number").style.display = "none";
    document.getElementById("gifted-vs").style.display = "none";
    document.getElementById("final-price").style.display = "none";
    document.getElementById("payable").style.display = "none";
    document.getElementById("warning-pay").style.display = "none";
}

// jméno obdarovaného
let clientforName = localStorage.getItem("obdarovanyJmeno");
let clientForNameSpace = document.getElementById("summary-gifted-name");

clientForNameSpace.textContent = clientforName;


// proměnné pro výběr hodnot do poukazu (název / hodnota)
let figureName = localStorage.getItem("udajeDoPoukazu_1")
let figurePrice = localStorage.getItem("udajeDoPoukazu_2")

// WRITE názvu ošetření
let clientTreatment = localStorage.getItem("osetreniNazev");
let giftedTreatmentSpace = document.getElementById("summary-gifted-treatments");

document.getElementById("gifted--remove-price").style.display = "flex";


// selekce dle výběru - vepsání názvu ošetření
if( figureName == "název ošetření") {
    giftedTreatmentSpace.textContent = clientTreatment;
    document.getElementById("gifted--remove-name").style.display = "flex";  
}

// // WRITE ceny ošetření
// let clientPrice = localStorage.getItem("osetreniCena");
// let giftedPriceSpace = document.getElementById("summary-gifted-price");
// let finalPriceSpace = document.getElementById("summary-final-price");
// // získání a vypsání pouze číselné hodnoty 
// let finalPriceOnly = clientPrice;
 
// finalPriceOnly = finalPriceOnly.substr(10);
// finalPriceSpace.textContent = finalPriceOnly;



// selekce dle výběru - vepsání hodnoty ošetření
if( figurePrice == "hodnota ošetření") {
    giftedPriceSpace.textContent = clientPrice;
    document.getElementById("gifted--remove-price").style.display = "flex";  
    
}

// přání k poukazu
let wish = localStorage.getItem("obdarovanyPrani");
let wishSpace = document.getElementById("summary-gifted-wish");

if( wish !== "") {
    wishSpace.textContent = wish;
}
else {
    document.getElementById("gifted--remove-wish").style.display = "none"
}

// načtení náhodného kodu ze storage
let randomCode = localStorage.getItem("kodPoukazu");



// - - - - - - - - - - - - - - - -
// výpočet ceny včetně poštovného

// pokud je vybráno odeslání kurýrem, tak uloží konečnou hodnotu so Storage a nechá v proměnné | jinak hodnotu v proměnné smaže
if(pickupSpace.textContent == "odeslání kurýrem") {
    // uložení částky včetně poštovného do Storage
    localStorage.setItem("cenaVcetnePostovneho", deliveryPriceFinal);
}
else {
    deliveryPriceFinal = "";
}




// -----------------------
// PŘÍPRAVA PRO ODESLÁNÍ NA SERVER
// -----------------------


// vytvoření classy
class Voucher {
    constructor(jmeno, telefon, email, poznamkaSalon, provedeni, vyzvednuti, dorucovaciAdresa, osetreni, osetreniCena, kodPoukazu, obdarovana, prani, variabilniSymbol, cenaVcetnePostovneho) {
        this.jmeno = jmeno;
        this.telefon = telefon;
        this.email = email;
        this.poznamkaSalon = poznamkaSalon;
        this.provedeni = provedeni;
        this.vyzvednuti = vyzvednuti;
        this.dorucovaciAdresa = dorucovaciAdresa;
        this.osetreni = osetreni;
        this.osetreniCena = osetreniCena;
        this.kodPoukazu = kodPoukazu;
        this.obdarovana = obdarovana;
        this.prani = prani;
        this.variabilniSymbol = variabilniSymbol;
        this.cenaVcetnePostovneho = cenaVcetnePostovneho;
    }
}

//vytvoření metody
let poukazVyplneno = new Voucher(clientName, clientPhone, clientEmail, clientNote, variantVoucher, pickup, deliveryAddress, clientTreatment, finalPriceOnly, randomCode, clientforName, wish, getVariabilniSymbol, deliveryPriceFinal + " Kč");

console.log(poukazVyplneno)


// nacteni provedeni poukazu pro následný switch
let vyberPoukazu = localStorage.getItem("_PROVEDENI POUKAZU");

// odeslání na server
let sendToServer = document.getElementById("final-page__link");
sendToServer.addEventListener('click', sendDataToServer);

function sendDataToServer() {

const form = new URLSearchParams(poukazVyplneno);
fetch('https://www.kosmetika-daniela.cz/scripts/mail_offer.php', {
  method: 'POST',
  body: form
})
.then(() => {
    switch (vyberPoukazu){
        case "papírová verze":
        window.location.href = "voucher-success-paper.html";
        break;
        case "elektronická verze":
        window.location.href = "voucher-final-offer.html";
        break;
    }
    });
}


// podmínky pro "hodnoty do e-mailu"
if((poukazVyplneno.provedeni == "papírová verze") && (poukazVyplneno.dorucovaciAdresa == "")) {
    poukazVyplneno.variabilniSymbol = "";
    poukazVyplneno.cenaVcetnePostovneho = "";
}

if(poukazVyplneno.provedeni == "papírová verze" && poukazVyplneno.vyzvednuti == null) {
    poukazVyplneno.vyzvednuti = "v salonu";
}

if((poukazVyplneno.provedeni == "elektronická verze")) {
    poukazVyplneno.cenaVcetnePostovneho = "";
}
