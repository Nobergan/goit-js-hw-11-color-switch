import colors from '../default/colors';
import randomIntegerFromInterval from '../default/randomIntegerFromInterval';

const ref = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
};

ref.buttonStart.addEventListener('click', handleStartButton);
ref.buttonStop.addEventListener('click', handleStopButton);

let isActiveButton = false;
let intervalId = null;

function handleStartButton() {
  if (isActiveButton) {
    return;
  }

  intervalId = setInterval(changeBodyColor, 1000);
  isActiveButton = true;
}

function handleStopButton() {
  clearInterval(intervalId);
  isActiveButton = false;
}

const changeBodyColor = () => {
  ref.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};
