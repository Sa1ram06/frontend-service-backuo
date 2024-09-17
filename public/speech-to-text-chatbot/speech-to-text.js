if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const startButton = document.getElementById("start-recording");
  const stopButton = document.getElementById("stop-button");
  const speechText = document.getElementById("speech-text");

  function toggleButtons() {
    if (startButton.style.display === "none") {
      startButton.style.display = "inline";
      stopButton.style.display = "none";
    } else {
      startButton.style.display = "none";
      stopButton.style.display = "inline";
    }
  }

  startButton.addEventListener("click", () => {
    recognition.start();
    speechText.textContent = "Listening...";
    toggleButtons();
  });

  stopButton.addEventListener("click", () => {
    recognition.stop();
    toggleButtons();
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    speechText.textContent = `Transcribed text: ${transcript}`;
  };

  recognition.onerror = (event) => {
    speechText.textContent = `Error occurred: ${event.error}`;
    toggleButtons();
  };
} else {
  document.getElementById("speech-text").textContent =
    "Speech recognition is not supported in this browser.";
}
