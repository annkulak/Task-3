import { display } from './display.js';
import { numberChoice, operationChoice } from './buttons.js';

let memoryNumber = 0;
let newNumber = false;
let memoryOperand = '';

function getNumberChoice() {
    if (memoryOperand != '') {
        newNumber = String(newNumber + numberChoice);
    } else {
        if (display.value === '0') {
            newNumber = String(numberChoice);
        } else {
            newNumber = String(newNumber + numberChoice);
        }
    }
    display.value = newNumber;
    display.showValue();
};

function getFractionalNumber() {
    if ((newNumber == false) || (newNumber == 0)) {
        newNumber = String('0' + '.');
    } else {
        if (newNumber.indexOf('.') === -1) {
            newNumber += '.';
        }
    }
    display.value = String(newNumber);
    display.showValue();
};

function getCalculation() {
    if (newNumber === false) {
        memoryOperand = operationChoice;
        display.operator = String(memoryNumber + memoryOperand);
    } else {
        if ((memoryNumber == 0) && (memoryOperand == '')) {
            memoryNumber = +newNumber;
            display.operator = String(newNumber + operationChoice);
        } else {
            if (memoryOperand === '+') {
                memoryNumber += +newNumber;
            } else if (memoryOperand === '-') {
                memoryNumber -= +newNumber;
            } else if (memoryOperand === '*') {
                memoryNumber *= +newNumber;
            } else if (memoryOperand === '/') {
                if ((+newNumber == 0) || (memoryNumber == 'ERROR')) {
                    memoryNumber = 'ERROR';
                    display.value = memoryNumber;
                    display.showValue();
                }
                else {
                    memoryNumber /= +newNumber;
                }
            }
            if (memoryNumber !== 'ERROR') {
                display.operator = String(display.operator + newNumber + operationChoice);
            } else {
                display.operator = String(display.operator + newNumber);
                display.showOperator();
            }
        }
    }

    if (memoryNumber !== 'ERROR') {
        memoryNumber = +memoryNumber.toFixed(16);
        display.value = memoryNumber;
        display.showValue();
        display.showOperator();
        newNumber = false;
        memoryOperand = operationChoice;
    };
}

function getDisplayResult() {
    memoryOperand = '';
    display.operator = '';
    display.value = memoryNumber;
    display.showOperator();
    display.showValue();
}

function getDisplayCorrection() {
    if (display.value != 0) {
        display.correctionValue();
        newNumber = display.value;
    }
};

function getDisplayClean() {
    memoryNumber = 0;
    newNumber = false;
    memoryOperand = '';
    display.allClear();
};

export { getNumberChoice, getFractionalNumber, getCalculation, getDisplayResult, getDisplayCorrection, getDisplayClean };


