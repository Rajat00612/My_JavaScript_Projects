console.log("Welcome to Alarm Clock");

class Alarm {
  constructor() {
    this.countdownInterval = null;
    this.audio = null;

    this.alarmSounds = [
      { name: "Fire Alarm", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { name: "Classic iPhone Alarm", url: "https://www.fesliyanstudios.com/play-mp3/387" },
      { name: "Extreme Alarm", url: "https://www.fesliyanstudios.com/play-mp3/4388" },
      { name: "Morning Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { name: "Loudest Alarm Ever", url: "https://www.fesliyanstudios.com/play-mp3/6929" },
      { name: "Digital Beep Alarm", url: "https://www.fesliyanstudios.com/play-mp3/6933" },
      { name: "J.A.R.V.I.S Wakeup", url: "https://www.fesliyanstudios.com/play-mp3/4349" },
      { name: "Soft Bell Alarm", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { name: "Classic Rooster", url: "https://www.fesliyanstudios.com/play-mp3/397" },
      { name: "Military Siren", url: "https://www.fesliyanstudios.com/play-mp3/6962" }
    ];

    const soundDropdown = document.getElementById("SoundBook");
    if (soundDropdown) {
      this.alarmSounds.forEach(sound => {
        const option = document.createElement("option");
        option.value = sound.url;
        option.textContent = sound.name;
        soundDropdown.appendChild(option);
      });
    }

    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 1000);
  }

  updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("current-time").textContent = `${hours}:${minutes}:${seconds}`;
  }

  TimeBook = () => {
    const timeInput = document.getElementById("TimeBox11");
    const soundInput = document.getElementById("SoundBook");
    const countdownDisplay = document.getElementById("countdown");

    let timeLeft = parseInt(timeInput.value);
    const selectedSound = soundInput.value;

    if (isNaN(timeLeft) || timeLeft <= 0 || !selectedSound) {
      alert("⛔ Please enter a time greater than 0 seconds and select a sound!");
      return;
    }

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.countdownInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(this.countdownInterval);
        countdownDisplay.innerHTML = `<span class="shake">🕒</span>`;

        alert("⏰ Time's up! Alarm is ringing!");

        this.audio = new Audio(selectedSound);
        this.audio.play()
          .then(() => console.log("Alarm sound is playing"))
          .catch(error => console.error("Error playing sound:", error));
      } else {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        countdownDisplay.textContent = `${minutes}:${seconds}`;
        timeLeft--;
      }
    }, 1000);
  };

  ClearAlarm = () => {
    clearInterval(this.countdownInterval);
    this.countdownInterval = null;

    const countdownDisplay = document.getElementById("countdown");
    countdownDisplay.textContent = "00:00";

    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }

    alert("🚫 Alarm cleared!");
  };
}

const guest = new Alarm();
const TimeBook = () => guest.TimeBook();
const ClearAlarm = () => guest.ClearAlarm();