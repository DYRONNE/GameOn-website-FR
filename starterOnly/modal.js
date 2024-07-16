

// DOM Elements
const modalbackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const topnavbar = document.getElementById("myTopnav");

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbackground.style.display = "block";
}

function closeModal() {
  modalbackground.style.display = "none";
}

function editNav() {
topnavbar.classList.toggle("responsive");
}