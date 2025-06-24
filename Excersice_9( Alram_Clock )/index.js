// script.js for Advanced Alarm Clock

class AlarmClock {
  constructor() {
    this.alarmTime = null;
    this.audio = new Audio();
    this.isAlarmPlaying = false;
    this.clockElement = document.getElementById("current-time");
    this.soundSelector = document.getElementById("sound-selector");

    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    if (this.alarmTime && `${hours}:${minutes}` === this.alarmTime && !this.isAlarmPlaying) {
      this.triggerAlarm();
    }
  }

  setAlarm() {
    const alarmInput = document.getElementById("alarm-time").value;

    if (!alarmInput) {
      alert("⛔ Please set a valid alarm time.");
      return;
    }

    this.alarmTime = alarmInput;
    this.audio.src = this.soundSelector.value;
    alert(`✅ Alarm set for ${this.alarmTime}`);
  }

  triggerAlarm() {
    this.isAlarmPlaying = true;
    this.audio.loop = true;

    this.clockElement.classList.add('ringing');
    this.audio.play()
      .then(() => console.log("🔊 Alarm ringing!"))
      .catch(error => console.error("Error playing alarm:", error));

    if (navigator.vibrate) {
      navigator.vibrate([500, 500, 500, 500]);
    }

    alert("⏰ Wake up! Alarm is ringing!");
  }

  clearAlarm() {
    this.alarmTime = null;

    if (this.audio && this.isAlarmPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isAlarmPlaying = false;
    }

    this.clockElement.classList.remove('ringing');

    if (navigator.vibrate) {
      navigator.vibrate(0);
    }

    alert("🚫 Alarm cleared.");
  }

  snoozeAlarm() {
    if (this.isAlarmPlaying) {
      this.clearAlarm();

      const currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 5);

      const snoozeHours = String(currentTime.getHours()).padStart(2, '0');
      const snoozeMinutes = String(currentTime.getMinutes()).padStart(2, '0');

      this.alarmTime = `${snoozeHours}:${snoozeMinutes}`;
      alert(`💤 Snoozed! Alarm will ring again at ${this.alarmTime}`);
    }
  }

  previewSound() {
    const selectedSound = this.soundSelector.value;
    const previewAudio = new Audio(selectedSound);

    previewAudio.play()
      .then(() => console.log("🔊 Preview playing"))
      .catch(error => console.error("Error playing preview:", error));
  }
}

const alarmClock = new AlarmClock();

function setAlarm() {
  alarmClock.setAlarm();
}

function clearAlarm() {
  alarmClock.clearAlarm();
}

function snoozeAlarm() {
  alarmClock.snoozeAlarm();
}

function previewSound() {
  alarmClock.previewSound();
}
