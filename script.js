document.getElementById("encodeButton").addEventListener("click", function () {
    const inputMessage = document.getElementById("inputMessage").value;
    const encodingType = document.getElementById("encodingType").value;
    let encodedMessage = "";

    switch (encodingType) {
        case "plainText":
            encodedMessage = inputMessage;
            break;
        case "binary":
            encodedMessage = textToBinary(inputMessage);
            break;
        case "hexadecimal":
            encodedMessage = textToHex(inputMessage);
            break;
        case "morse":
            encodedMessage = textToMorse(inputMessage);
            break;
        case "decimal":
            encodedMessage = textToDecimal(inputMessage);
            break;
        default:
            encodedMessage = "Invalid encoding type";
    }

    document.getElementById("encodedMessage").value = encodedMessage;
});

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function textToHex(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
}

function textToMorse(text) {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
    };

    text = text.toUpperCase();
    const morseArray = text.split('').map(char => morseCodeMap[char] || char).join(' ');

    return morseArray;
}

function textToDecimal(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}
