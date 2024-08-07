document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#parent .class:not(#display)');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else {
                appendValue(value);
            }
        });
    });

    function clear() {
        expression = '';
        display.textContent = '';
    }

    function calculate() {
        try {
            const result = eval(expression);
            display.textContent = result;
            expression = result.toString();
        } catch {
            display.textContent = 'Error';
            expression = '';
        }
    }

    function appendValue(value) {
        expression += value;
        display.textContent = expression;
    }
});