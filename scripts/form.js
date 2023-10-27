// zmena popisu u zasad zpracovani osobnich udaju 
function isChecked(){
    if(document.getElementById("accept-checkbox").checked){
        document.getElementById("message").textContent = "Děkujeme za udělení souhlasu.";
    }
    else{
        document.getElementById("message").textContent = "Pro odeslání poptávky je nutné souhlasit se zásadami osobních údajů.";
    }
}

//zkryti inputu u digitalni verze
function eMailHiddenInput() {
    if(document.getElementById("papirova-verze").checked = true) {
        document.getElementById("showMailInput").style.display = 'none';
        document.getElementById('pulse').style.display = 'grid';
        document.getElementById("moveAfterShowContact").style.paddingTop = "25px";
    }
    else {
        document.getElementById("showMailInput").style.display = 'grid';
    }
}


// formular pro reference - open
function showFormReference() {
    document.getElementById('reference__send-form').style.display = 'grid';
    document.getElementById('reference__show-form').style.display = 'none';
    document.getElementById('close-form').style.display = 'grid';
    document.getElementById('close-form').style.opacity = "0.3";
}

// formular pro reference - close
function hidenFormReference() {
    document.getElementById('reference__send-form').style.display = 'none';
    document.getElementById('reference__show-form').style.display = 'grid';
    document.getElementById('close-form').style.opacity = "0";
}