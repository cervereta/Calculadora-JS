function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    display.focus(); // Mantener el foco en el input después de añadir un valor
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.focus(); // Mantener el foco después de limpiar
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    display.focus(); // Mantener el foco después de borrar
}

function calculate() {
    try {
        const display = document.getElementById('display');
        const expression = display.value;
        if (expression === '') return;
        const result = eval(expression);
        display.value = result;
        display.focus(); // Mantener el foco después de calcular
    } catch (error) {
        document.getElementById('display').value = 'Error';
        setTimeout(clearDisplay, 1000); // Limpia la pantalla después de 1 segundo
    }
}

// Añadir soporte para teclado
document.getElementById('display').addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = '0123456789.+-*/()';
    
    if (validKeys.includes(key)) {
        event.preventDefault(); // Evitar que el input procese la tecla directamente
        appendToDisplay(key);
    } else if (key === 'Enter' || key === 'NumpadEnter') { // Soporte para Enter y Enter del teclado numérico
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastCharacter();
    }
});

// Forzar el foco en el input al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('display').focus();
});