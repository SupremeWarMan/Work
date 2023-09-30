function encodeDecodeText() {
    const inputText = document.getElementById("inputText").value;
    const encodingType = document.getElementById("encodingType").value;
    const decodingType = document.getElementById("decodingType").value;
    const alphabet = document.getElementById("alphabet").value;
    let result = "";

    if (encodingType === decodingType) {
        document.getElementById("outputText").value = inputText;
        return;
    }

    switch (encodingType) {
        case "binary":
            result = textToBinary(inputText);
            break;
        case "decimal":
            result = textToDecimal(inputText);
            break;
        case "hexadecimal":
            result = textToHex(inputText);
            break;
        case "morse":
            result = textToMorse(inputText);
            break;
        case "base64":
            result = btoa(inputText); // Using built-in Base64 encoder
            break;
        case "alphabet":
            result = textToAlphabet(inputText, alphabet);
            break;
        default:
            result = "Invalid encoding type.";
    }

    if (result !== "Invalid encoding type.") {
        switch (decodingType) {
            case "binary":
                result = binaryToText(result);
                break;
            case "decimal":
                result = decimalToText(result);
                break;
            case "hexadecimal":
                result = hexToText(result);
                break;
            case "morse":
                result = morseToText(result);
                break;
            case "base64":
                try {
                    result = atob(result); // Using built-in Base64 decoder
                } catch (e) {
                    result = "Invalid Base64 input.";
                }
                break;
            case "alphabet":
                result = alphabetToText(result, alphabet);
                break;
            default:
                result = "Invalid decoding type.";
        }
    }

    document.getElementById("outputText").value = result;
}

// Implement your encoding and decoding functions here

// Example functions for text to binary and binary to text
function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Function to encode text to binary
function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

// Function to decode binary to text
function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Function to encode text to decimal
function textToDecimal(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}

// Function to decode decimal to text
function decimalToText(decimal) {
    const charCodes = decimal.split(' ').map(Number);
    return String.fromCharCode(...charCodes);
}

// Function to encode text to hexadecimal
function textToHex(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
}

// Function to decode hexadecimal to text
function hexToText(hex) {
    return hex.split(' ').map(hexChar => String.fromCharCode(parseInt(hexChar, 16))).join('');
}

// Morse code encoding/decoding functions
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', ' ': '/'
};

function textToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
}

function morseToText(morse) {
    return morse.split(' ').map(code => {
        for (let char in morseCodeMap) {
            if (morseCodeMap[char] === code) return char;
        }
        return code;
    }).join('');
}

// Function to encode text to Base64 (using built-in btoa)
function textToBase64(text) {
    return btoa(text);
}

// Function to decode Base64 to text (using built-in atob)
function base64ToText(base64) {
    return atob(base64);
}

// Function to encode text using a custom alphabet
function textToAlphabet(text, alphabet) {
    const encoded = text.split('').map(char => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? index.toString() : char;
    }).join(' ');
    return encoded;
}

// Function to decode text using a custom alphabet
function alphabetToText(encoded, alphabet) {
    const decoded = encoded.split(' ').map(token => {
        const index = parseInt(token);
        return index >= 0 && index < alphabet.length ? alphabet[index] : token;
    }).join('');
    return decoded;
}


// Function to reset the input and output fields
function resetFields() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}

// Add event listeners for the encode and decode buttons
document.getElementById("encodeButton").addEventListener("click", function () {
    const encodeType = document.getElementById("encodeType").value;
    const encodeInput = document.getElementById("encodeInput").value;
    let encodeOutput = "";

    // Perform encoding based on the selected type
    switch (encodeType) {
        case "binary":
            encodeOutput = textToBinary(encodeInput);
            break;
        case "decimal":
            encodeOutput = textToDecimal(encodeInput);
            break;
        case "hexadecimal":
            encodeOutput = textToHex(encodeInput);
            break;
        case "morse":
            encodeOutput = textToMorse(encodeInput);
            break;
        case "base64":
            encodeOutput = textToBase64(encodeInput);
            break;
        case "alphabet":
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            encodeOutput = textToAlphabet(encodeInput.toUpperCase(), alphabet);
            break;
        default:
            encodeOutput = "Invalid encoding type.";
            break;
    }

    document.getElementById("encodeOutput").textContent = encodeOutput;
});

document.getElementById("decodeButton").addEventListener("click", function () {
    const decodeType = document.getElementById("decodeType").value;
    const decodeInput = document.getElementById("decodeInput").value;
    let decodeOutput = "";

    // Perform decoding based on the selected type
    switch (decodeType) {
        case "binary":
            decodeOutput = binaryToText(decodeInput);
            break;
        case "decimal":
            decodeOutput = decimalToText(decodeInput);
            break;
        case "hexadecimal":
            decodeOutput = hexToText(decodeInput);
            break;
        case "morse":
            decodeOutput = morseToText(decodeInput);
            break;
        case "base64":
            decodeOutput = base64ToText(decodeInput);
            break;
        case "alphabet":
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            decodeOutput = alphabetToText(decodeInput, alphabet);
            break;
        default:
            decodeOutput = "Invalid decoding type.";
            break;
    }

    document.getElementById("decodeOutput").textContent = decodeOutput;
});
