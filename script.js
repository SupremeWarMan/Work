document.addEventListener('DOMContentLoaded', function () {
    const conversionInput = document.getElementById('conversionInput');
    const conversionOutput = document.getElementById('conversionOutput');
    const convertBtn = document.getElementById('convert');
    const binaryToDecimalRadio = document.getElementById('binaryToDecimal');
    const decimalToBinaryRadio = document.getElementById('decimalToBinary');

    // Function to convert binary to decimal
    function binaryToDecimal(binary) {
        return parseInt(binary, 2);
    }

    // Function to convert decimal to binary
    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2);
    }

    // Convert on button click
    convertBtn.addEventListener('click', function () {
        const input = conversionInput.value.trim();
        if (binaryToDecimalRadio.checked && /^[01]+$/.test(input)) {
            // Convert binary to decimal
            conversionOutput.value = binaryToDecimal(input);
        } else if (decimalToBinaryRadio.checked && /^\d+$/.test(input)) {
            // Convert decimal to binary
            conversionOutput.value = decimalToBinary(parseInt(input));
        } else {
            alert('Please enter a valid number and select the conversion type.');
        }
    });
});

