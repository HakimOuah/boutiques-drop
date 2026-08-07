class Timer extends HTMLElement {
  constructor() {
    super();
    this.loop = this.dataset.loop === 'true';
    this.endDate = this.loop ? this.getNextLoopTime() : this.dataset.endDate;
  }

  connectedCallback() {
    this.startTimer(this.endDate);
  }

  getNextLoopTime() {
    let t = new Date();
    const [hours, minutes] = (this.dataset.loopHour || '00:00').split(':').map(Number);

    if (t.getHours() > hours || (t.getHours() === hours && t.getMinutes() >= minutes)) {
      t.setDate(t.getDate() + 1); // set to tomorrow if past the desired loop hour
    }

    t.setHours(hours, minutes, 0, 0); // set to the desired loop hour
    return t;
  }

  startTimer(endTimeStr) {
    let endTime = new Date(endTimeStr).getTime();

    const updateUI = (selector, value) => {
      const element = this.querySelector(selector);
      if (value > 0) {
        element.style.display = 'inline-flex';
        element.querySelector('.unit').textContent = value;
      } else {
        element.style.display = 'none';
      }
    };

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = endTime - now;

      if (distance < 0) {
        if (this.loop) {
          endTime = this.getNextLoopTime().getTime();
          distance = endTime - now;
        } else {
          clearInterval(interval);
          ['days', 'hours', 'minutes', 'seconds'].forEach((unit) => updateUI(`.${unit} .unit`, 0));
          return;
        }
      }

      const times = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };

      for (let unit in times) {
        updateUI(`.${unit}`, times[unit]);
      }
    }, 1000);
  }
}

customElements.define('timer-component', Timer);
