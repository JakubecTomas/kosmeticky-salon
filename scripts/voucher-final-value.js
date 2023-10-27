// -----------------------
// VYPSÁNÍ HODNOT ZSTORAGE - FINAL
// -----------------------

// jméno obdarovaného
let clientforName = localStorage.getItem("obdarovanyJmeno");
let giftedForNameSpace = document.getElementById("summary-gifted-name");

giftedForNameSpace.textContent = clientforName;


// hodnota poukazu "hodnotaPozadovana"
let ValueOwn = localStorage.getItem("hodnotaPozadovana");
let ValueVoucher = localStorage.getItem("hodnotaVyber");
// space pro data
let giftedValueSpace = document.getElementById("summary-gifted-value-main");
let giftedValueOwnSpace = document.getElementById("summary-gifted-value-own");
// viditelnost
let visibleValueMain = document.getElementById("gifted--remove-value-main");
let visibleValueOwn = document.getElementById("gifted--remove-value-own");


// vepsání kódu
let randomCodeSpace = document.getElementById("summary-random-code");
randomCodeSpace.textContent = localStorage.getItem("kodPoukazu");


// vepsani aktualniho data
document.getElementById("actual-date").innerHTML = localStorage.getItem("aktualniDatum");


// hodnota poukazu VLASTNÍ VS MAIN
if(ValueVoucher == "jinaHodnota") {    
    visibleValueOwn.style.display = "flex";
    giftedValueOwnSpace.textContent = ValueOwn + " Kč";
}
else {   
    visibleValueMain.style.display = "flex";
    giftedValueSpace.textContent = ValueVoucher + " Kč";
    visibleValueOwn.style.display = "none";
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