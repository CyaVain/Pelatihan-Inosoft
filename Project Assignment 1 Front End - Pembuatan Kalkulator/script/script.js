let inputPertama = '';
let history='';

    document.getElementById('inputArea').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            jumlah();
            
            let inputElement = document.getElementById('inputArea');
            inputElement.value = result;
        }
    });

    function load() {
        displayClear();
        var checkbox = document.getElementById('flexSwitchCheckDefault');
        if (checkbox) {
            checkbox.checked = false;
        }
    }


    function toggleMode() {
        let checkbox = document.getElementById("flexSwitchCheckDefault");
        let label = document.querySelector('.form-check-label');

        if (checkbox.checked) {
            label.textContent = 'Light Mode';
            label.style.color = 'black';
            updateClasses('bg-black', 'bg-white');
            updateClasses('bg-dark', 'bg-light');
            updateClasses('text-white','text-black');
            toggleButtons();
        } else {
            label.textContent = 'Dark Mode';
            label.style.color = 'white';
            updateClasses('bg-white', 'bg-black');
            updateClasses('bg-light', 'bg-dark');
            updateClasses('text-black','text-white');
            toggleButtons();
        }
    }

    function toggleButtons() {
        let buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            let currentColor = button.style.color;

            if (currentColor === 'orangered') {
                button.style.color = 'maroon';
            } else if (currentColor === 'maroon') {
                button.style.color = 'orangered';
            }
            if (currentColor === 'white' || currentColor === '') {
                button.style.color = 'black';
            } else if (currentColor === 'black') {
                button.style.color = 'white';
            }
            if (currentColor === 'aqua') {
                button.style.color = 'purple';
            } else if (currentColor === 'purple') {
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
            inputPertama='';
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
        if (a.trim() === '') {
            a = '0';
        }
        let historyElement = document.getElementById('historyArea');
        inputPertama += a + "+";
        historyElement.value = inputPertama;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }

    function kurang() {
        let a = document.getElementById('inputArea').value;
        if (a.trim() === '') {
            a = '0';
        }
            let historyElement = document.getElementById('historyArea');
            inputPertama += a + "-";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = 0;
        displayClear();
    }

    function bagi() {
        let a = document.getElementById('inputArea').value;
        if (a.trim() === '') {
            a = '0';
        }
        let historyElement = document.getElementById('historyArea');
        inputPertama += a + "÷";
        historyElement.value = inputPertama;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }
    
    function kali() {
        let a = document.getElementById('inputArea').value;
        if (a.trim() === '') {
            a = '0';
        }
        let historyElement = document.getElementById('historyArea');
        inputPertama += a + "x";
        historyElement.value = inputPertama;
        document.getElementById('inputArea').value = 0;
        
        displayClear();
    }

    function konversi(){
        let a = document.getElementById('inputArea').value;
        if(a !== 0){
            let b = a;
            let c = b;
            let output = (a - b) - c ; 
            document.getElementById('inputArea').value = output;
        }else{
            a=0;
        }

        displayClear();
    }

    function desimal(){
        let inputArea = document.getElementById('inputArea');
        let inputValue = inputArea.value;
        if(inputValue === '' ){
            inputValue = 0;
        }
        if(inputValue === 0 ){
                inputArea.value = 0 + '.';

        }
            if (!inputValue.includes('.')) {
                inputArea.value = inputValue + '.';
            }
        displayClear();
    }

    function persentase(){
        let a = document.getElementById('inputArea').value;
        if (a.trim() === '') {
            a = '0';
        }
        let output = parseFloat(a /100);
        document.getElementById('inputArea').value = output;

        displayClear();
    }

    function jumlah() {
        let inputElement = document.getElementById('inputArea');
        let historyElement = document.getElementById('historyArea');
        let input = parseFloat(inputElement.value);
        
        if (isNaN(input)) {
            alert('Mohon Masukkan Angka Yang Valid');
            return;
        }

        let result;
        let operator = inputPertama.slice(-1);

        switch (operator) {
            case '+':
                result = parseFloat(inputPertama) + input;
                break;
            case '-':
                result = parseFloat(inputPertama) - input;
                break;
            case 'x':
                result = parseFloat(inputPertama) * input;
                break;
            case '/':
                result = parseFloat(inputPertama) / input;
                break;
            case '÷':
                result = parseFloat(inputPertama) / input;
            break;
            default:
                alert('Mohon Tambahkan Operasi Matematika Yang Valid');
                return;
        }

        history += inputPertama + input + '=' + result + '\n';
        historyElement.value = history;

        inputPertama ='';

        inputElement.value = result;
        displayClear();
    }

    function restrictInput(event) {
        let allowedCharacters = /^[0-9+%\.\-x\/\*]*$/;

        let inputValue = event.target.value;
    
        if (!allowedCharacters.test(inputValue)) {
            event.target.value = inputValue.slice(0, -1);
        }
    }
    
    function handleOperation(operator) {
        let inputArea = document.getElementById('inputArea');
        let inputValue = inputArea.value;
    
        if (inputValue.trim() !== '') {
            let a = parseFloat(inputValue);
    
            inputPertama += a + operator;
            document.getElementById('historyArea').value = history;
    
            inputArea.value = '0';
        }
    }
    
    document.getElementById('inputArea').addEventListener('input', restrictInput);

    document.getElementById('inputArea').addEventListener('input', function(event) {
        let inputArea = event.target;
        let inputValue = inputArea.value;
        let historyElement = document.getElementById('historyArea');
    
        if (inputValue.endsWith('+')) {
            let a = inputValue.slice(0, -1);
            if(a === ''){
                a = 0;
            }
            inputPertama += a + "+";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = '';
        }
        if (inputValue.endsWith('-')) {
            let a = inputValue.slice(0, -1);
            if(a === ''){
                a = 0;
            }
            inputPertama += a + "-";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = '';
        }
        if (inputValue.endsWith('x')) {
            let a = inputValue.slice(0, -1);
            if(a === ''){
                a = 0;
            }
            inputPertama += a + "x";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = '';
        }
        if (inputValue.endsWith('*')) {
            let a = inputValue.slice(0, -1);
            if(a === ''){
                a = 0;
            }
            inputPertama += a + "x";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = '';
        }
        if (inputValue.endsWith('/')) {
            let a = inputValue.slice(0, -1);
            if(a === ''){
                a = 0;
            }
            inputPertama += a + "/";
            historyElement.value = inputPertama;
            document.getElementById('inputArea').value = '';
        }
        if (inputValue.endsWith('%')) {
            let a = inputValue.slice(0, -1);
            if (a.trim() === '') {
                a = '0';
            }
            let output = parseFloat(a /100);
            document.getElementById('inputArea').value = output;
        }
        displayClear();
    });