"use strict";

let correctPercentage = 80;
let correctIdentityNumber = 15;

const displayPercentageMessage = function (percentageMessage) {
  document.querySelector(".percentage-message").textContent = percentageMessage;
};

const displayIdentityMessage = function (identityMessage) {
  document.querySelector(".identity-message").textContent = identityMessage;
};

if (document.querySelector(".percentage-guess")) {
  console.log("procentknappen findes");
} else {
  console.log("knappen findes ikke");
}

// første mini quiz på informations-siden
document
  .querySelector(".percentage-guess")
  .addEventListener("click", function () {
    const guess = Number(
      document.querySelector(".percentage-quiz-input").value
    );
    console.log(guess, typeof guess);

    //hvis der ikke er noget input
    if (!guess) {
      displayPercentageMessage("Hov! du har ikke indtastet noget. Prøv igen");
    } else if (guess === correctPercentage) {
      displayPercentageMessage(
        `Det er rigtigt! ca. ${correctPercentage}.000 danskere bliver hvert år ofre for identitetsvindel.`
      );
    } else if (guess > correctPercentage) {
      displayPercentageMessage(
        "Dit gæt er lidt for højt, prøv et lavere tal (husk at det er et rundt tal)"
      );
    } else if (guess < correctPercentage) {
      displayPercentageMessage(
        "Dit gæt er lidt for lavt, prøv et lavere tal (husk at det er et rundt tal)"
      );
    }
  });

//anden mini-quiz på informationssiden
document
  .querySelector(".identity-guess")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector("#slider").value);
    console.log(guess, typeof guess);

    //hvis der ikke er noget input
    if (!guess) {
      displayIdentityMessage("Hov! du har ikke indtastet noget. Prøv igen");
    } else if (guess === correctIdentityNumber) {
      displayIdentityMessage(
        `Det er rigtigt! ca. ${correctIdentityNumber}.000 danskere udsættes hvert år for identitesvindel.`
      );
    } else if (guess > correctIdentityNumber) {
      displayIdentityMessage("Dit gæt er lidt for højt, prøv et lavere tal");
    } else if (guess < correctIdentityNumber) {
      displayIdentityMessage("Dit gæt er lidt for lavt, prøv et lavere tal.");
    }
  });

/////////////////// Folder tekstafsnit ind/ud
function toggleElementVisibility(buttonId, elementId) {
  // Find knappen og det tilhørende element
  const button = document.getElementById(buttonId);
  const element = document.getElementById(elementId);

  // Tilføj en klikhændelse til knappen
  button.addEventListener("click", function () {
    // Skift synligheden af elementet ved at tilføje eller fjerne klassen 'hidden'
    element.classList.toggle("mobile-hidden");

    // Skift baggrundsbilledet for knappen baseret på synligheden af elementet
    if (element.classList.contains("mobile-hidden")) {
      button.style.backgroundImage = 'url("/img/arrow-down-sm.png")';
    } else {
      button.style.backgroundImage = 'url("/img/arrow-up-sm.png")';
    }
  });
}

// Brug funktionen til at knytte klikhændelser for specifikke knapper og elementer
toggleElementVisibility("btn-passwordbeskyttelse", "passwordbeskyttelse");
toggleElementVisibility("btn-scamPhishing", "scamPhishing");
toggleElementVisibility("btn-identitetssvindel", "identitetssvindel");
toggleElementVisibility("btn-kompromiteredeKonti", "kompromiteredeKonti");
toggleElementVisibility("btn-finansielSvindel", "finansielSvindel");
toggleElementVisibility("btn-reputationsskade", "reputationsskade");
toggleElementVisibility("btn-juridiskeProblemer", "reputationsskade");
