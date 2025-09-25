
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            expression = '';
            display.textContent = '0';
        } else if (value === '=') {
            try {
                const result = eval(expression);
                display.textContent = result;
                expression = result.toString();
            } catch (error) {
                display.textContent = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            display.textContent = expression;
        }
    });
});
