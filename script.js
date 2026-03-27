let time = 25 * 60;
let interval = null;
let running = false;

function toggleTimer() {
  const button = document.getElementById("startButton");

  if (!running) {
    // ▶️ Start
    running = true;
    button.textContent = "Pause";

    interval = setInterval(() => {
      time--;

      let minutes = Math.floor(time / 60);
      let seconds = time % 60;

      updateDisplay();

      if (time <= 0) {
        clearInterval(interval);
        button.textContent = "Start";
        running = false;
      }
    }, 1000);

  } else {
    // ⏸ Pause
    running = false;
    button.textContent = "Start";
    clearInterval(interval);
  }
}

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function restartTimer() {

  const startButton = document.getElementById("startButton");

  clearInterval(interval)
  interval = null;

  time = 25 * 60;
  running = false;

  startButton.textContent = "Start";

  updateDisplay();
    
}