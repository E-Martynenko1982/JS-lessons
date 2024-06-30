const timer = {
  secondPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    if (this.intervalId !== null) {
      return
    }
    this.intervalId = setInterval(() => {
      this.secondPassed = this.secondPassed + 1;
      if (this.secondPassed === 60) {
        this.minsPassed = this.minsPassed + 1;
        this.secondPassed = 0;
      }
      console.log(`${this.minsPassed}:${this.secondPassed}`)


    }, 1000)
  },

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null
  },

  getTime() {
    const secondsFormatted = this.secondPassed.toString().padStart(2, '0');
    return console.log(`${this.minsPassed}:${secondsFormatted}`)
  },

  resetTimer() {
    this.stopTimer();
    this.secondPassed = 0;
    this.minsPassed = 0;
  },
}


