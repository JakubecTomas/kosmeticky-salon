// clear localStorage - čistý začátek
localStorage.clear();

// textarea (index) pro jinou hodnotu
function ShowTextarea() {

  let anotherValue = document.getElementById("paper-value");
  let value = anotherValue.value;
  let textareaInput = document.getElementById("textareaInput");

  if (value == "jinaHodnota") {
      textareaInput.style.display = "grid"
  }
  else
      textareaInput.style.display = "none"
}
  




// ---------------------
// PRÁCE S DATABÁZÍ
// ---------------------

// vybrané ošetření z nabídky + uložení do localStorage
function getRadioValue() {
  let radioValue = document.querySelector('input[name="treatments"]:checked').value;
  let errorSelected = document.querySelector('.error--offer-selected');
  let linkNext = document.getElementById('ValidateNext');
  let price = radioValue.split(' ').pop();
  // ořezání názvu ošegtření o poslední slovo
  let radioValueToLocalStorage = radioValue;
  let lastIndex = radioValueToLocalStorage.lastIndexOf(" ");
  radioValueToLocalStorage = radioValueToLocalStorage.substring(0, lastIndex);

  // uložení názvu a ceny ošetření do localStorage
  localStorage.setItem("osetreniNazev",radioValueToLocalStorage);
  localStorage.setItem("osetreniCena", price);

  //vepsání vybraného ošetření do sumáře na konci seznamu
  document.getElementById("offer-selected").innerHTML = radioValue;
  // ošetření erroru nevybrání + úprava linku NextStep
  if(radioValue !== "") {
    errorSelected.style.display = "none";
  }
  else 
  errorSelected.style.display = "flex";
  linkNext.href = "voucher-contact.html";
}


// //validace vyplnění a nextStep
function NextStepOffer() {
  if( document.querySelector("#offerEmpty") == "Nemáte vybráno") {
    document.querySelector("#ValidateNext").setAttribute("href", "#ValidateError");
  }
  else {
    document.querySelector("#ValidateNext").setAttribute("href", "voucher-contact.html");
  }
}




