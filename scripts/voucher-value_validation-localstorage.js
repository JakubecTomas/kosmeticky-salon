//ulozeni hodnoty poukazu do localstorage
let send = document.getElementById("odeslatHodnotu");
send.addEventListener('click', toLocalStorage);
let error = document.getElementById("errorEmpty")
let nextStep = document.getElementById("odeslatHodnotu");


function toLocalStorage() {

localStorage.setItem("predchozi", "hodnota");

    let voucherValue = document.getElementById("paper-value");
    let value = voucherValue.value;
    let noteForm = document.getElementById("textareaInput");
    let noteValue = noteForm.value;

    

    if (value !=="") {
        localStorage.setItem("hodnotaVyber",value);
        
        error.textContent = "";
        error.style.display = "none";

            if (value == "jinaHodnota" && noteValue !== "") {
                localStorage.setItem("hodnotaPozadovana",noteValue);
            }

            if (value == "jinaHodnota" && noteValue == "") {
                error.textContent = "Vyberte hodnotu poukazu";
                error.style.display = "grid"
            }

            // else
            //     nextStep.setAttribute("href", "voucher-contact.html");
    }

    else {
        error.textContent = "Vyberte hodnotu poukazu";
        error.style.display = "grid"
    }
    
if(value !=="") {
    nextStep.setAttribute("href", "voucher-contact.html");
}



}
