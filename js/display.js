class Display {

    constructor() {
        this.operator = '';
        this.value = 0;
        this.initialElement();
    }

    initialElement() {
        this.element = document.createElement('div');
        this.element.classList.add('result-container');
        this.initialOperatorElement();
        this.initialValueElement();
    }

    initialOperatorElement() {
        this.operatorElement = document.createElement('div');
        this.operatorElement.classList.add('result-operator-block');
        this.element.append(this.operatorElement);        
        this.showOperator();
    }

    initialValueElement() {
        this.valueElement = document.createElement('div');
        this.valueElement.classList.add('result-value-block');
        this.element.append(this.valueElement);
       
        this.showValue();
    }

    showOperator() {
        this.operatorElement.textContent = this.operator;
    }

    clearOperator() {
        this.operator = '';
    }

    showValue() {
        this.valueElement.textContent = this.value;
    }

    clearValue() {
        this.value = 0;
    }

    correctionValue() {
        if (this.value.length != 1) {
            this.value = this.value.slice(0, -1);
        } else {
            this.clearValue();
        }
        this.showValue();
    }

    allClear() {
        this.clearOperator();
        this.clearValue();
        this.showOperator();
        this.showValue();
    }
};

const display = new Display();

function getDisplayElenents() {
    const container = document.querySelector('.container');
    container.insertAdjacentElement('afterBegin', display.element);
}

export { display, getDisplayElenents };

