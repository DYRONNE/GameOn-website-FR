

// DOM Elements
const modalbackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const topnavbar = document.getElementById("myTopnav");

// toggle navbar
function editNav() {
  topnavbar.classList.toggle("responsive");
  }

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbackground.style.display = "block";

}

// close modal function
function closeModal() {
  modalbackground.style.display = "none";
}


// ensemble des fonctions de validations

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} prenom
 * @throws {Error}
 */

function validerPrenom(prenom) {
  const errorElement = document.getElementById("error-first");
  if (prenom.length < 2) {
    errorElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    throw new Error("Invalid first name");
  } else {
    errorElement.textContent = "";
  }
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} nom
 * @throws {Error}
 */

function validerNom(nom) {
  const errorElement = document.getElementById("error-last");
  if (nom.length < 2) {
    errorElement.textContent = "Veuillez entrer au moins 2 caractères pour le champ du nom.";
    throw new Error("Invalid last name");
  } else {
    errorElement.textContent = "";
  }
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {number} quantity
 * @throws {Error}
 */
function validerQuantity(quantity) {
  const errorElement = document.getElementById("error-quantity");
  let quantityRegExp = new RegExp("^[0-9]+$");
  if (!quantityRegExp.test(quantity)) {
    errorElement.textContent = "La quantité n'est pas valide.";
    throw new Error("Invalid quantity");
  } else {
    errorElement.textContent = "";
  }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */

function validerEmail(email) {
  const errorElement = document.getElementById("error-email");
  let emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
  if (!emailRegExp.test(email)) {
    errorElement.textContent = "L'email n'est pas valide.";
    throw new Error("Invalid email");
  } else {
    errorElement.textContent = "";
  }
}

/**
 * Cette fonction prend une date en paramètre et valide qu'il est au bon format. 
 * @param {string} date
 * @throws {Error}
 */

function validerDate(date) {
  const errorElement = document.getElementById("error-date");
  let dateRegExp = new RegExp("/^\d{2}\/\d{2}\/\d{4}$/");
  if (!dateRegExp.test(date)) {
    errorElement.textContent = "Entrer une date valide.";
    throw new Error("Invalid date");
  } else {
    errorElement.textContent = "";
  }
}

/**
 * Cette fonction prend un booléen en paramètre et valide qu'il est vrai. 
 * @param {boolean} conditions 
 * @throws {Error}
 */
function validerConditions(conditions) {
  const errorElement = document.getElementById("error-conditions");
  if (conditions !== true) {
    errorElement.textContent = "Veuillez accepter les conditions d'utilisation.";
    throw new Error("Conditions not accepted");
  } else {
    errorElement.textContent = "";
  }
}
/**
* Cette fonction prend une liste de localisations en paramètre et valide qu'au moins une localisation est cochée.
 * @param {Array} listelocalisation
 * @throws {Error}
 */
function ValiderLocalisation(listelocalisation) {
  const errorElement = document.getElementById("error-location");
  let isValid = false;
  for (let i = 0; i < listelocalisation.length; i++) {
    if (listelocalisation[i].checked) {
      isValid = true;
      break;
    }
  }
  if (!isValid) {
    errorElement.textContent = "Aucune localisation n'est valide.";
    throw new Error("No location selected");
  } else {
    errorElement.textContent = "";
  }
}


  // recuperation  des donnees pour validation et appel des fonctions
try {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let balisePrenom = document.getElementById("first");
    let prenom = balisePrenom.value;
    validerPrenom(prenom);
  
    let BaliseNom = document.getElementById("last");
    let nom = BaliseNom.value;
    validerNom(nom);

    let BaliseEmail = document.getElementById("email");
    let email = BaliseEmail.value;
    validerEmail(email);
  
    let Birthdate = document.getElementById("birthdate")
    let date = Birthdate.value;
    validerDate(date);

    let BaliseQuantity = document.getElementById("quantity");
    let quantity = BaliseQuantity.value;
    validerQuantity(quantity)

    let ConditionsGenerales = document.getElementById("checkbox1");
    let conditions = ConditionsGenerales.checked;
    validerConditions(conditions)

    let listelocalisation = document.querySelectorAll("input[type=radio]");
    ValiderLocalisation(listelocalisation)

    }
)
} catch(error) {
  // Erreurs déjà gérées individuellement par chaque fonction de validation
}