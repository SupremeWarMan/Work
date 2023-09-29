document.addEventListener('DOMContentLoaded', function () {
    const decimalInput = document.getElementById('decimalInput');
    const binaryOutput = document.getElementById('binaryOutput');
    const convertButton = document.getElementById('convertButton');

    convertButton.addEventListener('click', function () {
        const decimalValue = parseInt(decimalInput.value);

        if (!isNaN(decimalValue)) {
            const binaryValue = decimalValue.toString(2);
            binaryOutput.value = binaryValue;
        } else {
            binaryOutput.value = 'Invalid Input';
        }
    });
});
