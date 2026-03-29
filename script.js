let time = 25 * 60;
let interval = null;
let running = false;

const progressArc = document.getElementById("progressArc");
const totalTime = 25 * 60;

const arcLength = progressArc.getTotalLength();

progressArc.style.strokeDasharray = arcLength;
progressArc.style.strokeDashoffset = 0;

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

  // progress animation
  let progress = time / totalTime;
  progressArc.style.strokeDashoffset = arcLength * (1 - progress);
}

function restartTimer() {

  const startButton = document.getElementById("startButton");

  clearInterval(interval)
  interval = null;

  time = 25 * 60;
  running = false;

  startButton.textContent = "Start";

  updateDisplay();
  progressArc.style.strokeDashoffset = 0;
}