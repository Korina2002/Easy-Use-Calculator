const inputs = document.getElementsByTagName('input');
const operator = document.querySelector('select');
const result = document.querySelector('span');

document.getElementById('calculate').addEventListener('click', function(ev) { let message = 'invalid numbers...';
    const num1= Number(inputs[0].value);
    const num2= Number(inputs[1].value);

    switch (operator.value) {
        case '+' :
            message = num1 + num2 ;
            break;
        case '-' :
            message = num1 - num2 + '';
            break;
        case '*' :
            message = num1 * num2 + '';
            break;
        case '/' :
            message = num1 /num2 + '';
            break;   
    }
    result.innerHTML = message;
    });