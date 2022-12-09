let clicks = 0;

const TIMEOUT = 100;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');


button.onclick = start ;

function start(){

const startTime = Date.now();

display.textContent = TIMEOUT;

    button.onclick = () => counter.textContent =  clicks++;

    const interval  = setInterval(() => {
  const delta = Date.now - startTime
  display.textContent = TIMEOUT - delta;
    }, 100);

 
    clearInterval(interval);
    clearTimeout(timeout);

    const timeout = setTimeout(() => {
button.onclick = null;
display.textContent = 'Stop'

clearTimeout(timeout);
    }, TIMEOUT);
}



