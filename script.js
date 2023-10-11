function decimalToBinary() {
    const decimalInput = document.getElementById("decimalInput");
    const binaryInput = document.getElementById("binaryInput");
    const decimalValue = parseInt(decimalInput.value, 10);

    if (!isNaN(decimalValue)) {
        binaryInput.value = decimalValue.toString(2);
    } else {
        alert("Please enter a valid decimal number.");
    }
}

function binaryToDecimal() {
    const decimalInput = document.getElementById("decimalInput");
    const binaryInput = document.getElementById("binaryInput");
    const binaryValue = binaryInput.value;

    const decimalValue = parseInt(binaryValue, 2);

    if (!isNaN(decimalValue)) {
        decimalInput.value = decimalValue;
    } else {
        alert("Please enter a valid binary number.");
    }
}
