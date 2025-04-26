class StopWatch {
  static BUTTON_TEXT = {
    START: "Start",
    STOP: "Stop",
  };

  constructor() {
    this.time = 0;
    this.isRunning = false;
    this.intervalId = null;
    this.timeDisplay = document.getElementById("timeDisplay");
    this.startStopButton = document.getElementById("startStopButton");
    this.resetButton = document.getElementById("resetButton");

    this.startStopButton.addEventListener(
      "click",
      this.toggleStartStop.bind(this)
    );
    this.resetButton.addEventListener("click", this.reset.bind(this));
  }

  updateDisplay() {
    this.timeDisplay.textContent = this.time.toFixed(2);
  }

  toggleStartStop() {
    if (this.running) {
      clearInterval(this.intervalId);
      this.startStopButton.textContent = StopWatch.BUTTON_TEXT.START;
    } else {
      this.intervalId = setInterval(() => {
        this.time += 0.01;
        this.updateDisplay();
      }, 10);
      this.startStopButton.textContent = StopWatch.BUTTON_TEXT.STOP;
    }
    this.running = !this.running;
  }

  reset() {
    clearInterval(this.intervalId);
    this.time = 0;
    this.updateDisplay();
    this.startStopButton.textContent = StopWatch.BUTTON_TEXT.START;
    this.running = false;
  }
}

window.onload = function () {
  new StopWatch();
};