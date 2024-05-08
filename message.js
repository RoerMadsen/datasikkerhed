document.addEventListener("DOMContentLoaded", function () {
  const infoDialog = document.getElementById("info-dialog");
  const pwDialog = document.getElementById("pw");

  // Åbner dialogboks når siden indlæses
  infoDialog.style.display = "block";

  // Lukker dialogboks
  function closeInfoDialog() {
    infoDialog.style.display = "none";
    startDelayedMessages();
  }

  document.getElementById("close-info-dialogue").addEventListener("click", closeInfoDialog);

  // Funktion der forsinker indlæsningen af messengerbeskeder
  function startDelayedMessages() {
    const messagesContainer = document.querySelector(".messages");
    const messageTexts = [
      "Hej! Jeg er model og vil gerne give dig adgang til mit private billeder.",
      "Du skal bare trykke på det link jeg har sendt til dig",
      "Jeg bliver SÅ glad hvis du vil se mine billeder!!",
    ];

    function addMessageWithDelay(messageText, delay) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerText = messageText;

      setTimeout(function () {
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, delay);
    }

    messageTexts.forEach(function (text, index) {
      addMessageWithDelay(text, (index + 1) * 1000);
    });
  }

  // Åbner dialogboks om "lækket password" når man trykker på beskeden med linket
  function openPasswordDialog() {
    pwDialog.style.display = "block";
    document.getElementById("change-password").style.display = "block";
    document.getElementById("new-pw").style.display = "none";
    document.getElementById("data-leaked").style.display = "none";
  }

  document.getElementById("link-message").addEventListener("click", openPasswordDialog);

  // Skifter indholdet i dialogboksen hvis man vil skifte password
  document.getElementById("change-pw-btn").addEventListener("click", function () {
    document.getElementById("change-password").style.display = "none";
    document.getElementById("new-pw").style.display = "block";
  });

  // Skifter indholdet i dialogboksen hvis man ikke skifter
  document.getElementById("decline-pw-btn").addEventListener("click", function () {
    document.getElementById("change-password").innerHTML = document.getElementById("data-leaked").innerHTML;
    pwDialog.classList.add("fail-background");
  });

  // Lukker dialogboks hvis man trykker uden for den.
  window.addEventListener("click", function (event) {
    if (event.target === pwDialog) {
      pwDialog.style.display = "none";
    }
  });
});

// Bloker og anmeld knap
document.getElementById("block-report-btn").addEventListener("click", function () {
  document.getElementById("blocked-reported").style.display = "block";
});

// Tjek password styrke
document.querySelector(".pw-submit").addEventListener("click", function () {
  const pwGuess = document.querySelector(".pw-input").value;
  const pwMessage = document.querySelector(".pw-message");

  if (!pwGuess) {
    pwMessage.textContent = "Hov, feltet er tomt! Indtast venligst et password du vil teste, og prøv igen.";
  } else if (pwGuess.length < 8) {
    pwMessage.textContent = `Dit password er kun ${pwGuess.length} tegn! Du mangler ${8 - pwGuess.length} tegn, før det er sikkert.`;
  } else {
    const containsNumber = /\d/.test(pwGuess);
    const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwGuess);

    if (!containsNumber || !containsSpecialChar) {
      pwMessage.textContent = "Dit password skal indeholde mindst et tal og et specialtegn.";
    } else {
      pwMessage.textContent = `Flot! Dit password "${pwGuess}" opfylder alle krav.`;
    }
  }
});

// Vis / Skjul password
document.querySelector(".show-password").addEventListener("click", function () {
  const passwordInput = document.querySelector(".pw-input");
  const eyeIcon = document.querySelector(".eye-icon");

  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  eyeIcon.classList.toggle("bi-eye-fill");
  eyeIcon.classList.toggle("bi-eye");
});

// Luk dialogboks knapper
function addCloseModalListeners(modalClass, modalId) {
  document.querySelector(modalClass).addEventListener("click", function () {
    document.querySelector(modalId).style.display = "none";
  });
}

addCloseModalListeners(".close-blocked-reported-modal", "#blocked-reported");
addCloseModalListeners(".close-test-completed-modal", "#test-completed");
addCloseModalListeners(".close-pw-modal", "#pw");
addCloseModalListeners(".close-new-pw-modal", "#new-pw");

// Knap til at afslutte testen
document.querySelector(".save-quit").addEventListener("click", function () {
  document.getElementById("pw").style.display = "none";
  document.getElementById("test-completed").style.display = "block";
});
