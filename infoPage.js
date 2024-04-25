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
      displayIdentityMessage(
        "Dit gæt er lidt for højt, prøv et lavere tal (husk at det er et rundt tal)"
      );
    } else if (guess < correctIdentityNumber) {
      displayIdentityMessage(
        "Dit gæt er lidt for lavt, prøv et lavere tal (husk at det er et rundt tal)"
      );
    }
  });
