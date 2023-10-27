// -----------------------
// VYPSÁNÍ HODNOT Z LOCALSTORAGE - SUMARIZACE
// VYKRESLOVACÍ LOGIKA
// -----------------------

// variabilní symbol - načtení z localStorage
let getVariabilniSymbol = localStorage.getItem("variabilniSymbol");
document.getElementById("vs-date").innerHTML = getVariabilniSymbol;

// vyzvednutí v salonu nebo odeslání kurýrem
let pickup = localStorage.getItem("odeslatPoukazKuryrem");
let pickupSpace = document.getElementById("summary-client-pickup");

// hodnota VS ošetření
let ValueVoucher = localStorage.getItem("hodnotaVyber");
let ValueOwn = localStorage.getItem("hodnotaPozadovana");
let giftedValueSpace = document.getElementById("summary-gifted-value");
let finalValueSpace = document.getElementById("summary-final-price");

if(ValueVoucher === "jinaHodnota") {
    // zobrazení <p> a načtení vlastní hodnoty poukazu
    document.getElementById("gifted--remove-value").style.display = "flex"
    finalValueSpace.textContent = ValueOwn + " Kč";
}
else {
    // zobrazení <p> a načtení předurčené hodnoty poukazu
    document.getElementById("gifted--remove-value").style.display = "flex"
    finalValueSpace.textContent = ValueVoucher + " Kč";
}

if(ValueVoucher === "jinaHodnota") {
    giftedValueSpace.textContent = ValueOwn + " Kč";
}
else {
    giftedValueSpace.textContent = ValueVoucher + " Kč";
}

// nastavení ceny poštovného
let deliveryPrice = 120;
let deliveryPriceFinal = 0;

if(ValueVoucher === "jinaHodnota") {
    deliveryPriceFinal = +ValueOwn + deliveryPrice;
}
else {
    deliveryPriceFinal = +ValueVoucher + deliveryPrice;
}






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
let giftedForNameSpace = document.getElementById("summary-gifted-name");
giftedForNameSpace.textContent = clientforName;



// přání k poukazu
let wish = localStorage.getItem("obdarovanyPrani");
let wishSpace = document.getElementById("summary-gifted-wish");

if( wish !== "") {
    wishSpace.textContent = wish;
}
else
    document.getElementById("gifted--remove-wish").style.display = "none"

// načtení náhodného kodu ze storage
let randomCode = localStorage.getItem("kodPoukazu");


// -----------------------
// PŘÍPRAVA PRO ODESLÁNÍ NA SERVER
// -----------------------


// vytvoření classy
class Voucher {
    constructor(jmeno, telefon, email, poznamkaSalon, provedeni, vyzvednuti, dorucovaciAdresa, hodnota, hodnotaVlastni, kodPoukazu, obdarovana, prani, variabilniSymbol, cenaVcetnePostovneho) {
        this.jmeno = jmeno;
        this.telefon = telefon;
        this.email = email;
        this.poznamkaSalon = poznamkaSalon;
        this.provedeni = provedeni;
        this.vyzvednuti = vyzvednuti;
        this.dorucovaciAdresa = dorucovaciAdresa;
        this.hodnota = hodnota;
        this.hodnotaVlastni = hodnotaVlastni;
        this.kodPoukazu = kodPoukazu;
        this.obdarovana = obdarovana;
        this.prani = prani;
        this.variabilniSymbol = variabilniSymbol;
        this.cenaVcetnePostovneho = cenaVcetnePostovneho;
    }
}

//vytvoření metody
let poukazVyplneno = new Voucher(clientName, clientPhone, clientEmail, clientNote, variantVoucher, pickup, deliveryAddress, ValueVoucher, ValueOwn, randomCode, clientforName, wish, getVariabilniSymbol, deliveryPriceFinal + " Kč");


console.log(poukazVyplneno)


// nacteni provedeni poukazu pro následný switch
let vyberPoukazu = localStorage.getItem("_PROVEDENI POUKAZU");

// odeslání na server
let sendToServer = document.getElementById("final-page__link");
sendToServer.addEventListener('click', sendDataToServer);

function sendDataToServer() {

const form = new URLSearchParams(poukazVyplneno);
fetch('https://www.kosmetika-daniela.cz/scripts/mail_value.php', {
  method: 'POST',
  body: form
})
.then(() => {
    switch (vyberPoukazu){
        case "papírová verze":
        window.location.href = "voucher-success-paper.html";
        break;
        case "elektronická verze":
        window.location.href = "voucher-final-value.html";
        break;
    }
    });
}

// podmínky pro "hodnoty do e-mailu"
if((poukazVyplneno.provedeni == "papírová verze") && (poukazVyplneno.dorucovaciAdresa == "")) {
    poukazVyplneno.variabilniSymbol = "";
    poukazVyplneno.cenaVcetnePostovneho = "";
}

if(poukazVyplneno.hodnota == "jinaHodnota") {
    poukazVyplneno.hodnota = "";
}

if(poukazVyplneno.provedeni == "papírová verze" && poukazVyplneno.vyzvednuti == null) {
    poukazVyplneno.vyzvednuti = "v salonu";
}

if((poukazVyplneno.provedeni == "elektronická verze")) {
    poukazVyplneno.cenaVcetnePostovneho = "";
}


