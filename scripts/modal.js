const secrets = document.querySelector("#modal-secrets");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

const antiage = document.querySelector('#modal-antiage');
const openModalAntiage = document.querySelector(".open-antiage");
const closeModalAntiage = document.querySelector(".close-antiage");


openModal.addEventListener("click", () => {
  secrets.showModal();
  localStorage.setItem("osetreniNazev","Secrets de Sothys");
  localStorage.setItem("osetreniCena", "v hodnotě 4390 Kč");
});

closeModal.addEventListener("click", () => {
  secrets.close();
});




openModalAntiage.addEventListener("click", () => {
    antiage.showModal();
    localStorage.setItem("osetreniNazev","Ošetření mládí");
    localStorage.setItem("osetreniCena", "v hodnotě 2490 Kč");
  });
  
closeModalAntiage.addEventListener("click", () => {
    antiage.close();
  });