// Function to convert binary to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Function to convert decimal to binary
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

document.addEventListener('DOMContentLoaded', function () {
    const binaryInput = document.getElementById('binaryInput');
    const decimalInput = document.getElementById('decimalInput');
    const convertToDecimalBtn = document.getElementById('convertToDecimal');
    const convertToBinaryBtn = document.getElementById('convertToBinary');

    // Convert binary to decimal
    convertToDecimalBtn.addEventListener('click', function () {
        const binaryValue = binaryInput.value;
        if (/^[01]+$/.test(binaryValue)) {
            decimalInput.value = binaryToDecimal(binaryValue);
        } else {
            alert('Please enter a valid binary number (0s and 1s only).');
        }
    });

    // Convert decimal to binary
    convertToBinaryBtn.addEventListener('click', function () {
        const decimalValue = parseInt(decimalInput.value);
        if (!isNaN(decimalValue)) {
            binaryInput.value = decimalToBinary(decimalValue);
        } else {
            alert('Please enter a valid decimal number.');
        }
    });
});
