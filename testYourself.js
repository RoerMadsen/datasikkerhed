"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("custom-dialog");
  dialog.style.display = "block"; // Vis dialogen når siden indlæses

  const submitButton = document.getElementById("close-dialogue");
  submitButton.addEventListener("click", function () {
    dialog.style.display = "none"; // Skjul dialogen efter brugeren har klikket på "Send"
  });
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
