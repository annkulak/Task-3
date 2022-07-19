import { getInterface } from './interface.js';
import { display, getDisplayElenents } from './display.js';
import { buttonArray, getButtonElements } from './buttons.js';

function getCalculator() {
    getInterface();
    getDisplayElenents();
    getButtonElements();
}

getCalculator();

console.log(display);
console.log(buttonArray);

