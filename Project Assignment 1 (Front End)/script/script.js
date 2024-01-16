let history = '';

    function toggleMode() {
        let checkbox = document.getElementById("flexSwitchCheckDefault");
        let label = document.querySelector('.form-check-label');

        if (checkbox.checked) {
            label.textContent = 'Light Mode';
            label.style.color = 'black';
            updateClasses('bg-black', 'bg-light');
            updateClasses('bg-dark', 'bg-secondary');
            updateClasses('text-white','text-black');
            toggleButtons();
        } else {
            label.textContent = 'Dark Mode';
            label.style.color = 'white';
            updateClasses('bg-light', 'bg-black');
            updateClasses('bg-secondary', 'bg-dark');
            updateClasses('text-black','text-white');
            toggleButtons();
        }
    }

    function toggleButtons() {
        let buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            let currentColor = button.style.color;

            if (currentColor === 'orangered') {
                button.style.color = 'darkred';
            } else if (currentColor === 'darkred') {
                button.style.color = 'orangered';
            }
            if (currentColor === 'white' || currentColor === '') {
                button.style.color = 'black';
            } else if (currentColor === 'black') {
                button.style.color = 'white';
            }
            if (currentColor === 'aqua') {
                button.style.color = 'darkblue';
            } else if (currentColor === 'darkblue') {
                button.style.color = 'aqua';
            }
        });
    }

    function updateClasses(fromClass, toClass) {
        let elements = document.querySelectorAll('.' + fromClass);

        elements.forEach(element => {
            element.classList.remove(fromClass);
            element.classList.add(toClass);
        });
    }
    function displayClear() {
        let inputValue = document.getElementById('inputArea').value;
        if (inputValue.length > 0) {
            document.getElementById('clear').innerHTML = 'C';
        } else {
            document.getElementById('clear').innerHTML = 'AC';
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
    displayClear();
    });

    function clearInput() {
        let inputElement = document.getElementById('inputArea');
        let historyElement = document.getElementById('historyArea');

        if (inputElement.value.length > 0) {
            inputElement.value = '';
        } else {
            inputElement.value = '';
            history='';
            historyElement.value = '';
        }

        displayClear();
    }

    function clearDigit(){
        let input = document.getElementById('inputArea');
        let currentValue = input.value;
        if (currentValue.length > 0) {
            let newValue = currentValue.slice(0, -1);
            input.value = newValue;
        }

        displayClear();
    }
    function appendInput(value){
        let input = document.getElementById('inputArea');
        if (input.value === '0') {
            input.value = value;
        }else if(input.value.length < 15){
            input.value += value;
        }

        displayClear();
    }

    function tambah() {
        let a = document.getElementById('inputArea').value;
        let historyElement = document.getElementById('historyArea');
        history += a + "+";
        historyElement.value = history;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }

    function kurang() {
        let a = document.getElementById('inputArea').value;
        let historyElement = document.getElementById('historyArea');
        history += a + "-";
        historyElement.value = history;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }

    function bagi() {
        let a = document.getElementById('inputArea').value;
        let historyElement = document.getElementById('historyArea');
        history += a + "÷";
        historyElement.value = history;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }
    
    function kali() {
        let a = document.getElementById('inputArea').value;
        let historyElement = document.getElementById('historyArea');
        history += a + "x";
        historyElement.value = history;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }

    function jumlah() {
        let inputElement = document.getElementById('inputArea');
        let historyElement = document.getElementById('historyArea');
        let input = parseFloat(inputElement.value);

        let result;
        let operator = history.slice(-1);

        switch (operator) {
            case '+':
                result = parseFloat(history) + input;
                break;
            case '-':
                result = parseFloat(history) - input;
                break;
            case 'x':
                result = parseFloat(history) * input;
                break;
            case '÷':
                result = parseFloat(history) / input;
            break;
            default:
                alert('Operator tidak valid');
                return;
        }

        history += input + '=' + result + '\n';
        historyElement.value = history;

        inputElement.value = 0;

        displayClear();
    }

    
    
    
    