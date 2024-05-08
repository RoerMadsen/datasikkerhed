"use strict";

// Elementer der bruges flere gange
const percentageMessageElement = document.querySelector(".percentage-message");
const identityMessageElement = document.querySelector(".identity-message");

// Første mini-quiz
document.querySelector(".percentage-guess").addEventListener("click", function () {
  const guess = Number(document.querySelector(".percentage-quiz-input").value);

  if (!guess) {
    displayPercentageMessage("Hov! Du har ikke indtastet noget. Prøv igen.");
  } else if (guess === correctPercentage) {
    displayPercentageMessage(`Det er rigtigt! Ca. ${correctPercentage}% af datalæk skyldes svage eller genbrugte adgangskoder.`);
  } else if (guess > correctPercentage) {
    displayPercentageMessage("Dit gæt er lidt for højt, prøv et lavere tal (husk at det er et rundt tal).");
  } else if (guess < correctPercentage) {
    displayPercentageMessage("Dit gæt er lidt for lavt, prøv et højere tal (husk at det er et rundt tal).");
  }
});

// Anden mini-quiz
document.querySelector(".identity-guess").addEventListener("click", function () {
  const guess = Number(document.querySelector("#slider").value);

  if (!guess) {
    displayIdentityMessage("Hov! Du har ikke indtastet noget. Prøv igen.");
  } else if (guess === correctIdentityNumber) {
    displayIdentityMessage(`Det er rigtigt! Ca. ${correctIdentityNumber}.000 danskere udsættes hvert år for identitetsvindel.`);
  } else if (guess > correctIdentityNumber) {
    displayIdentityMessage("Dit gæt er lidt for højt, prøv et lavere tal.");
  } else if (guess < correctIdentityNumber) {
    displayIdentityMessage("Dit gæt er lidt for lavt, prøv et højere tal.");
  }
});

// Funktion til at skifte synligheden af elementer
function toggleElementVisibility(buttonId, elementId) {
  const button = document.getElementById(buttonId);
  const element = document.getElementById(elementId);

  button.addEventListener("click", function () {
    element.classList.toggle("mobile-hidden");
    button.style.backgroundImage = element.classList.contains("mobile-hidden") ?
      'url("/img/arrow-down-sm.png")' :
      'url("/img/arrow-up-sm.png")';
  });
}

// Anvend funktionen til at knytte klikhændelser for specifikke knapper og elementer
toggleElementVisibility("btn-passwordbeskyttelse", "passwordbeskyttelse");
toggleElementVisibility("btn-scamPhishing", "scamPhishing");
toggleElementVisibility("btn-identitetssvindel", "identitetssvindel");
toggleElementVisibility("btn-kompromiteredeKonti", "kompromiteredeKonti");
toggleElementVisibility("btn-finansielSvindel", "finansielSvindel");
toggleElementVisibility("btn-reputationsskade", "reputationsskade");
toggleElementVisibility("btn-juridiskeProblemer", "reputationsskade");

// Funktion til at vise beskeder
function displayPercentageMessage(percentageMessage) {
  percentageMessageElement.textContent = percentageMessage;
}

function displayIdentityMessage(identityMessage) {
  identityMessageElement.textContent = identityMessage;
}

// Check om procentknappen findes
if (document.querySelector(".percentage-guess")) {
  console.log("Procentknappen findes.");
} else {
  console.log("Knappen findes ikke.");
}
