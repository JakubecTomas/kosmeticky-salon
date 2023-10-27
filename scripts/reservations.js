let buttonNext = document.getElementById("button-next")
let success = document.getElementById("success-reservation")
var error = document.querySelector("#errorEmptyNameClient")

function nextStepReservation() {
    let input = document.getElementById("password-reservation").value;

    if (input === "76701") {
        success.setAttribute("href", "https://www.unissoftware.cz/reservation/?hash=ZmQ1Yjk0OTNlNTIzNWVmYTk1ZmQwYWNkZGMxZjI1NzM4ODAwODhkOA==");
        error.style.display = 'none';
    }
    else
        error.style.display = 'flex';
}