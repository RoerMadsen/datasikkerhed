"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Åbn dialogboksen, når siden er indlæst
  openDialog();

  // Lyt efter klik på lukknappen
  const submitButton = document.getElementById("close-dialogue");
  submitButton.addEventListener("click", function () {
    // Skjul dialogen efter brugeren har klikket på "Luk"
    const dialog = document.getElementById("custom-dialog");
    dialog.style.display = "none";

    // Start funktionen med forsinkede beskeder efter dialogboksen er lukket
    startDelayedMessages();
  });

  // Funktion til at åbne dialogboksen
  function openDialog() {
    const dialog = document.getElementById("custom-dialog");
    dialog.style.display = "block";
  }

  // Funktion til at starte forsinkede beskeder
  function startDelayedMessages() {
    // Find det element, hvor du vil vise beskederne
    var messagesContainer = document.querySelector(".messages");

    // Array med beskedtekster
    var messageTexts = [
      "Hej! Jeg er model og vil gerne give dig adgang til mit private album og høre hvad du synes.",
      "Du skal bare trykke på linket og så skrive til mig når du har set billederne",
      '<button id="unsafe-link" class="text-link">Se album</button>',
    ];

    // Definer en funktion til at tilføje en besked til DOM'en med en lille forsinkelse
    function addMessageWithDelay(messageText, delay) {
      // Opret et nyt besked-element
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerText = messageText;

      // Tilføj det nye besked-element til beskedcontaineren med en lille forsinkelse
      setTimeout(function () {
        messagesContainer.appendChild(messageElement);
        // Scroll ned til bunden af beskedcontaineren
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, delay);
    }

    // Iterer gennem arrayet med beskedtekster og tilføj hver besked med forsinkelse
    messageTexts.forEach(function (text, index) {
      addMessageWithDelay(text, (index + 1) * 1000); // Juster forsinkelsen efter behov
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Funktion til at tilføje beskedtekster til .messages-container
//   function addMessages() {
//     var messagesContainer = document.querySelector(".messages");

//     // Array med beskedtekster
//     var messageTexts = [
//       "Hej! Jeg er model og vil gerne give dig adgang til mit private album og høre hvad du synes.",
//       "Du skal bare trykke på linket og så skrive til mig når du har set billederne",
//       "http//:www.synligtFalskLink.org",
//     ];

//     // Definer en funktion til at tilføje en besked til DOM'en med en lille forsinkelse
//     function addMessageWithDelay(messageText, delay) {
//       // Opret et nyt besked-element
//       var messageElement = document.createElement("div");
//       messageElement.classList.add("message");
//       messageElement.innerText = messageText;

//       // Tilføj det nye besked-element til beskedcontaineren med en lille forsinkelse
//       setTimeout(function () {
//         messagesContainer.appendChild(messageElement);
//         // Scroll ned til bunden af beskedcontaineren
//         messagesContainer.scrollTop = messagesContainer.scrollHeight;
//       }, delay);
//     }

//     // Iterer gennem arrayet med beskedtekster og tilføj hver besked med forsinkelse
//     messageTexts.forEach(function (text, index) {
//       addMessageWithDelay(text, (index + 1) * 1000); // Juster forsinkelsen efter behov
//     });
//   }

//   // Åbn dialogboksen, når beskederne er indlæst
//   addMessages();

//   // Lyt efter klik på lukknappen
//   const submitButton = document.getElementById("close-dialogue");
//   submitButton.addEventListener("click", function () {
//     const dialog = document.getElementById("custom-dialog");
//     dialog.style.display = "none"; // Skjul dialogen efter brugeren har klikket på "Luk"
//   });
// });
