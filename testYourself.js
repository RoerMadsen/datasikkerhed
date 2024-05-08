"use strict";

// Elementer der anvendes flere gange
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Vis dialogboksen når siden indlæses
document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("custom-dialog");
  dialog.style.display = "block";

  // Luk dialogboksen
  const closeButton = document.getElementById("close-dialogue");
  closeButton.addEventListener("click", function () {
    dialog.style.display = "none";
  });
});

// Funktioner til at åbne og lukke modal når man trykker på "slet" knappen
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Tilføj event listeners til knapperne
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



