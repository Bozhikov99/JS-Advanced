class Textbox {

    constructor(selector, regEx) {
        this._invalidSymbols = regEx;

        this._elements = Array.from(document.querySelectorAll(selector));
    }

    get value() {
        return this.elements[0].value;
    }

    set value(value) {
        this._elements.forEach(e => e.value = value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        let isValid = true;
        
        this.elements.forEach(e => {

            if (e.value.match(this._invalidSymbols)) {
                isValid = false;
            }
        });

        return isValid;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
