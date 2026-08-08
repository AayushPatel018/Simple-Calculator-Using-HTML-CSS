const display = document.getElementById("display");

// Add value to calculator display
function addValue(value) {
    display.value += value;
}

// Clear the complete display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the expression
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}