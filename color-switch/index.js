const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  butStart: document.querySelector('[data-action="start"]'),
  butStop: document.querySelector('[data-action="stop"]'),
};

const colorSwitcher = {
  isActiveBut: false,
  startChange() {
    if (this.isActiveBut) {
      return;
    }
    this.isActiveBut = true;
    const min = 0;
    const max = colors.length - 1;
    this.interval = setInterval(() => {
      document.body.style.background =
        colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },
  stopChange() {
    clearInterval(this.interval);
    this.isActiveBut = false;
  },
};

refs.butStart.addEventListener(
  "click",
  colorSwitcher.startChange.bind(colorSwitcher)
);
refs.butStop.addEventListener(
  "click",
  colorSwitcher.stopChange.bind(colorSwitcher)
);
