import { display } from './display.js';
import { getNumberChoice, getFractionalNumber, getCalculation, getDisplayResult, getDisplayCorrection, getDisplayClean } from './operations.js';

let numberChoice;
let operationChoice;

class Button {
    constructor(value) {
        this.value = value;
        this.type = typeof this.value;
        this.initialElement();
        this.choiceButton();
        this.clear();
        this.soundButton();
    };

    initialElement() {
        this.element = document.createElement('button');
        this.element.classList.add('box');
        this.element.value = this.value;
        this.element.innerHTML = this.value;
    };

    choiceButton() {
        this.element.addEventListener('click', () => {
            if (display.value === 'ERROR') {
                return;
            }
            if (this.type == 'number') {
                numberChoice = this.value;
                getNumberChoice(numberChoice);
            }
            if (this.element.value == '.') {
                getFractionalNumber();
            }
            if (this.element.value == 'DEL') {
                getDisplayCorrection();
            }
            if ((this.element.value == '+') ||
                (this.element.value == '-') ||
                (this.element.value == '*') ||
                (this.element.value == '/')) {
                operationChoice = this.element.value;
                getCalculation(operationChoice);
            }
            if (this.element.value == '=') {
                getCalculation(operationChoice);
                getDisplayResult();
            }
        });
    };

    clear() {
        this.element.addEventListener('click', () => {
            if (this.element.value == 'АС') {
                getDisplayClean();
            }
        });
    };

    soundButton() {
        this.element.addEventListener('click', () => {
            const sound = new Audio('./sound/joystick-button-press.mp3');
            sound.play();
        });
    };
};

const buttonArray = [];

(function getButtonArrayElement() {
    const buttonValueCatalog = ['АС', 'DEL', '/', 1, 2, 3, '*', 4, 5, 6, '+', 7, 8, 9, '-', '.', 0, '='];
    for (let i = 0; i < buttonValueCatalog.length; i++) {
        buttonArray[i] = new Button(buttonValueCatalog[i]);
    }
    return buttonArray;
})();

function getButtonElements() {
    const buttonsContainer = document.querySelector('.buttons-container');
    for (let i = 0; i < buttonArray.length; i++) {
        buttonsContainer.append(buttonArray[i].element);
    }
};

export { buttonArray, numberChoice, operationChoice, getButtonElements };