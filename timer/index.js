class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }

  timer = setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.playTime(time);
    this.stopTimer(time);
  }, 1000);

  playTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),);
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.timerRef.querySelector('[data-value="days"]').textContent = `${days}`;
    this.timerRef.querySelector('[data-value="hours"]',).textContent = `${hours}`;
    this.timerRef.querySelector('[data-value="mins"]').textContent = `${mins}`;
    this.timerRef.querySelector('[data-value="secs"]').textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  stopTimer(time) {
    if (time < 0) {
    
      clearInterval(this.timer);
      this.playTime(0);
    }
  }
}



const firstTime = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});

const secondTime = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Oct 2, 2021'),
});
//===============


// const refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     minutes: document.querySelector('span[data-value="mins"]'),
//     seconds: document.querySelector('span[data-value="secs"]'),
// }

// const promoution = setInterval(() => {

//     const targetDate = new Date().getTime();
//     let time = CountdownTimer - targetDate;
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
//         const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((time % (1000 * 60)) / 1000);

//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.minutes.textContent = minutes;
//     refs.seconds.textContent = seconds;

//     if (distance < 0) {
//         document.body.innerHTML = 'Time out'
//         clearInterval(promoution)
//     }
// }, 1000)

// const CountdownTimer = new Date('Dec 20, 2020 00:00:00').getTime();


