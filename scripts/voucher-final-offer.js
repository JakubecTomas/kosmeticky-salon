// -----------------------
// VYPSÁNÍ HODNOT Z - FINAL
// -----------------------

// jméno obdarovaného
let clientforName = localStorage.getItem("obdarovanyJmeno");
let giftedForNameSpace = document.getElementById("summary-gifted-name");

giftedForNameSpace.textContent = clientforName;


// proměnné pro výběr hodnot do poukazu (název / hodnota)
let figureName = localStorage.getItem("udajeDoPoukazu_1")
let figurePrice = localStorage.getItem("udajeDoPoukazu_2")

// WRITE názvu ošetření
let clientTreatment = localStorage.getItem("osetreniNazev");

let giftedTreatmentSpace = document.getElementById("summary-gifted-treatments");



// vepsání kodu poukazu
document.getElementById("summary-random-code").innerHTML = localStorage.getItem("kodPoukazu");

// vepsani aktualniho data
document.getElementById("actual-date").innerHTML = localStorage.getItem("aktualniDatum");



// selekce dle výběru - vepsání názvu ošetření
if( figureName == "název ošetření") {
    giftedTreatmentSpace.textContent = clientTreatment;
    document.getElementById("gifted--remove-name").style.display = "flex";  
}

// WRITE ceny ošetření
let clientPrice = localStorage.getItem("osetreniCena");
let clientPriceSpace = document.getElementById("summary-client-price");
let giftedPriceSpace = document.getElementById("summary-gifted-price");
let finalPriceSpace = document.getElementById("summary-final-price");
// získání a vypsání pouze číselné hodnoty 
let finalPriceOnly = clientPrice;
 
finalPriceOnly = finalPriceOnly.substr(10);




// selekce dle výběru - vepsání hodnoty ošetření
if( figurePrice == "hodnota ošetření") {
    giftedPriceSpace.textContent = clientPrice;
    document.getElementById("gifted--remove-price").style.display = "flex";  
    
}

// přání k poukazu
let wish = localStorage.getItem("obdarovanyPrani");
let wishSpace = document.getElementById("summary-gifted-wish");
let visibleWish = document.getElementById("gifted--remove-wish");
if( wish !== "") {
    visibleWish.style.display = "flex"
    wishSpace.textContent = wish;
    console.log(wish)
}
else
    visibleWish.style.display = "none"

