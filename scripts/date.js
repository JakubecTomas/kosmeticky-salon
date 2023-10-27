//datum pro VS
let today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();


if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const vsDataToStorage = `${yyyy}00${mm}${dd}`;
// uložení do Storage
localStorage.setItem("variabilniSymbol", vsDataToStorage);

const actualDataToStorage = `${dd}. ${mm}. ${yyyy}`;
localStorage.setItem("aktualniDatum", actualDataToStorage);