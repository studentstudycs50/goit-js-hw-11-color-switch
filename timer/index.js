

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    minutes: document.querySelector('span[data-value="mins"]'),
    seconds: document.querySelector('span[data-value="secs"]'),
}

const promoution = setInterval(() => {

    const targetDate = new Date().getTime();
    let time = CountdownTimer - targetDate;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;

    if (distance < 0) {
        document.body.innerHTML = 'Time out'
        clearInterval(promoution)
    }
}, 1000)

const CountdownTimer = new Date('Dec 20, 2020 00:00:00').getTime();




// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.selector = selector;
//         this.date = targetDate;

//         this.render();
//         this.run();
//     }

//     countDate() {
//         const time = new Date(this.date) - Date.now();
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);

//         return { days, hours, mins, secs };
//     }

//     render() {
//         const days = document.querySelector('span[data-value="days"]');
//         const hours = document.querySelector('span[data-value="hours"]');
//         const mins = document.querySelector('span[data-value="mins"]');
//         const secs = document.querySelector('span[data-value="secs"]');

//         const time = this.countDate();
//         days.textContent = String(time.days).padStart(2, '0');
//         hours.textContent = String(time.hours).padStart(2, '0');
//         mins.textContent = String(time.mins).padStart(2, '0');
//         secs.textContent = String(time.secs).padStart(2, '0');
//     }

//     run() {
//         const deadline = Date.parse(this.date) <= Date.parse(new Date());

//         this.timerId = setInterval(() => {
//             if (deadline) {
//                 this.stop();
//                 return;
//             }

//             this.render();
//         }, 1000);
//     }

//     stop() {
//         clearInterval(this.timerId);
//     }
// }

// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Dec 20, 2020'),
// });

// const currentDate = document.querySelector('.js-target-date');
// const endingDate = timer.date.toDateString();

