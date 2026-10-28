const display = document.getElementById('display');

function appendValue(val) {
    if (display.innerText === '0' && val !== '.') {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteChar() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
