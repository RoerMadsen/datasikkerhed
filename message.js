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
