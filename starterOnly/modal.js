

// DOM Elements
const modalbackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const topnavbar = document.getElementById("myTopnav");
const modalbackgroundContent = document.querySelector(".content");
const content = document.querySelector(".content");

const testmodal = document.querySelector(".postRegisterModal");
const testcontent = document.querySelector(".postRegisterContent");
const testclose = document.querySelector(".postRegisterClose");
const btnfermer = document.querySelector(".btn-fermer");



// ----toggle navbar-----
function editNav() {
  topnavbar.classList.toggle("responsive");
  }

  // -----------ouverture et fermeture du formulaire------------- 

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbackground.style.display = "block";

}

// close modal 
function closeModal() {
  modalbackground.style.display = "none";
}

//  -------------- POST REGISTRATION MODAL --------------

// event listeners post registration modal

testclose.addEventListener("click", handleM); // Use addEventListener directly
btnfermer.addEventListener("click", handleM);

// launch post registration modal
function launchM() {
  testmodal.style.display = "block";
  
}

// close  post registration modal
function handleM() {
  testmodal.style.display = "none";
}


// ----------------ensemble des fonctions de validations---------------

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} prenom
 * @return {boolean}
 */

function validerPrenom(prenom) {
  const inputElement = document.getElementById("first");
  const errorElement = document.getElementById("error-first");
  if (prenom.length < 2) {
    errorElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    inputElement.classList.add("error-border");
    return false;
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
    return true;
  }
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} nom
 * @return {boolean}
 */

function validerNom(nom) {
  const inputElement = document.getElementById("last");
  const errorElement = document.getElementById("error-last");
  if (nom.length < 2) {
    errorElement.textContent = "Veuillez entrer au moins 2 caractères pour le champ du nom.";
    inputElement.classList.add("error-border");
    return false;
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
    return true;
  }
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {number} quantity
 * @return {boolean}
 */
function validerQuantity(quantity) {
  const inputElement = document.getElementById("quantity");
  const errorElement = document.getElementById("error-quantity");
  let quantityRegExp = new RegExp("^[0-9]+$");
  if (!quantityRegExp.test(quantity)) {
    errorElement.textContent = "La quantité n'est pas valide.";
    inputElement.classList.add("error-border");
    return false;
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
    return true;
  }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @return {boolean}
 */

function validerEmail(email) {
  const inputElement = document.getElementById("email");
  const errorElement = document.getElementById("error-email");
  let emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
  if (!emailRegExp.test(email)) {
    errorElement.textContent = "L'email n'est pas valide.";
    inputElement.classList.add("error-border");
    return false;
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
    return true;

  }
}

/**
 * Cette fonction prend une date en paramètre et valide qu'il est au bon format. 
 * @param {string} date
 * @return {boolean}
 */

function validerDate(date) {
  const inputElement = document.getElementById("birthdate");
  const errorElement = document.getElementById("error-date");
  let dateRegExp = new RegExp("^(0[1-9]|[12][0-9]|3[01])\\/(0[1-9]|1[0-2])\\/\\d{4}$");
  if (!dateRegExp.test(date)) {
    errorElement.textContent = "Entrer une date valide (format JJ/MM/AAAA).";
        inputElement.classList.add("error-border");
        return false;
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
    return true;

  }
}

/**
 * Cette fonction prend un booléen en paramètre et valide qu'il est vrai. 
 * @param {boolean} conditions 
 * @return {boolean}
 */
function validerConditions(conditions) {
  const inputElement = document.getElementById("checkbox1");
  const errorElement = document.getElementById("error-conditions");
  if (conditions !== true) {
    errorElement.textContent = "Veuillez accepter les conditions d'utilisation.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;

   
   
  }
}
/**
* Cette fonction prend une liste de localisations en paramètre et valide qu'au moins une localisation est cochée.
 * @param {Array} listelocalisation
 * @return {boolean}
 */
function validerLocalisation(listelocalisation) {
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
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}


  // ------------recuperation  des donnees pour validation et appel des fonctions---------------

  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();


  
    let balisePrenom = document.getElementById("first");
  let prenom = balisePrenom.value;
  let prenomValid = validerPrenom(prenom);

  let baliseNom = document.getElementById("last");
  let nom = baliseNom.value;
  let nomValid = validerNom(nom);

  let baliseEmail = document.getElementById("email");
  let email = baliseEmail.value;
  let emailValid = validerEmail(email);

  let birthdate = document.getElementById("birthdate");
  let date = birthdate.value;
  let dateValid = validerDate(date);

  let baliseQuantity = document.getElementById("quantity");
  let quantity = baliseQuantity.value;
  let quantityValid = validerQuantity(quantity);

  let conditionsGenerales = document.getElementById("checkbox1");
  let conditions = conditionsGenerales.checked;
  let conditionsValid = validerConditions(conditions);

  let listelocalisation = document.querySelectorAll("input[name='location']");
  let localisationValid = validerLocalisation(listelocalisation);

  if (prenomValid && nomValid && emailValid && dateValid && quantityValid && conditionsValid && localisationValid) {
    launchM();
    closeModal();
  } else {
    console.error("Erreur de validation des données du formulaire");
  }
});

