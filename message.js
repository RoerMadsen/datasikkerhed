document.addEventListener("DOMContentLoaded", function () {
  const infoDialog = document.getElementById("info-dialog");
  const pwDialog = document.getElementById("pw-dialog");

  // Open info dialog when the page loads
  infoDialog.style.display = "block";

  // Close info dialog when close button is clicked
  document
    .getElementById("close-info-dialogue")
    .addEventListener("click", function () {
      infoDialog.style.display = "none";
      startDelayedMessages();
    });

  // Function to start delayed messages
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

  // Open pw dialog when link button is clicked
  document
    .getElementById("link-message")
    .addEventListener("click", function () {
      pwDialog.style.display = "block";
      document.getElementById("change-password").style.display = "block";
      document.getElementById("create-new-password").style.display = "none";
      document.getElementById("data-leaked").style.display = "none";
    });

  // Switch pw dialog content when change password button is clicked
  document
    .getElementById("change-pw-btn")
    .addEventListener("click", function () {
      document.getElementById("change-password").style.display = "none";
      document.getElementById("create-new-password").style.display = "block";
    });

  // Switch pw dialog content to data leaked when decline button is clicked
  document
    .getElementById("decline-pw-btn")
    .addEventListener("click", function () {
      document.getElementById("change-password").innerHTML =
        document.getElementById("data-leaked").innerHTML;
      pwDialog.classList.add("fail-background");
    });

  // Close pw dialog when clicking outside of the dialog
  window.addEventListener("click", function (event) {
    if (event.target === pwDialog) {
      pwDialog.style.display = "none";
    }
  });
});

///////////////////////////////// Tjek password styrke
document.querySelector(".pw-submit").addEventListener("click", function () {
  const guess = document.querySelector(".pw-input").value;
  console.log(guess, typeof guess);

  //Hvis der ikke er indtastet et password
  if (!guess) {
    document.querySelector(".pw-message").textContent =
      "Hov, feltet er tomt! Indtast venligst et password du vil teste, og prøv igen.";
    console.log("tomt felt");
  } else if (guess.length < 8) {
    document.querySelector(".pw-message").textContent = `Dit password er kun ${
      guess.length
    } tegn! Du mangler ${8 - guess.length} tegn, før det er sikkert.`;
    console.log("pw under 8 tegn");
  } else {
    // Check for tal og specialtegn
    const containsNumber = /\d/.test(guess);
    const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(guess);

    if (!containsNumber || !containsSpecialChar) {
      document.querySelector(".pw-message").textContent =
        "Dit password skal indeholde mindst et tal og et specialtegn.";
      console.log("mangler tal eller specialtegn");
    } else {
      document.querySelector(
        ".pw-message"
      ).textContent = `Flot! Dit password "${guess}" opfylder alle krav.`;
      console.log("gyldigt password");
    }
  }
});

//////////// Knap til at afslutte testen
document.querySelector(".save-quit").addEventListener("click", function () {
  document.getElementById("pw-dialog").style.display = "none";
  document.getElementById("test-completed").style.display = "block";
});

document.querySelector(".save-quit").addEventListener("click", function () {
  document.getElementById("pw-dialog").style.display = "none";
  document.getElementById("test-completed").style.display = "block";
});

///////////  Vis / Skjul password
document.querySelector(".save-quit").addEventListener("click", function () {
  document.getElementById("pw-dialog").style.display = "none";
  document.getElementById("test-completed").style.display = "block";
});

document.querySelector(".show-password").addEventListener("click", function () {
  // Vælg input-elementet med klassen '.pw-input'
  const passwordInput = document.querySelector(".pw-input");
  // Vælg ikonet med klassen '.eye-icon'
  const eyeIcon = document.querySelector(".eye-icon");

  // Tjek den aktuelle type af input
  if (passwordInput.type === "password") {
    // Hvis inputtypen er 'password', skift den til 'text'
    passwordInput.type = "text";
    // Skift ikonet til 'bi-eye-fill'
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-fill");
  } else {
    // Hvis inputtypen ikke er 'password' (dvs. 'text'), skift den til 'password'
    passwordInput.type = "password";
    // Skift ikonet tilbage til 'bi-eye'
    eyeIcon.classList.remove("bi-eye-fill");
    eyeIcon.classList.add("bi-eye");
  }
});
