var display = document.getElementById('display');
var currentInput = '';
var operator = '';
var previousValue = '';
var expression = '';  // To show the full expression

function appendNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        if (expression !== '') {
            expression += ' ' + operator + ' ' + currentInput;
        } else {
            expression = currentInput;
        }
        previousValue = currentInput;
        operator = op;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (previousValue !== '' && currentInput !== '' && operator !== '') {
        var result;
        var prev = parseFloat(previousValue);
        var curr = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                if (curr === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = prev / curr;
                break;
            case '%':
                result = prev % curr;
                break;
            case 'percentage':
                result = prev * (curr / 100);
                break;
        }
        display.value = result;
        currentInput = result.toString();
        operator = '';
        previousValue = '';
        expression = '';  // Reset expression after calculation
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousValue = '';
    expression = '';
    display.value = '';
}

function updateDisplay() {
    if (expression !== '' && operator !== '') {
        display.value = expression + ' ' + operator + ' ' + currentInput;
    } else {
        display.value = currentInput;
    }
}
