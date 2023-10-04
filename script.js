document.getElementById("convertButton").addEventListener("click", function () {
    const inputMessage = document.getElementById("inputMessage").value;
    const sourceEncoding = document.getElementById("sourceEncoding").value;
    const targetEncoding = document.getElementById("targetEncoding").value;
    let resultMessage = "";
            
        case "plainText":
            switch (targetEncoding) {
                case "plainText":
                    resultMessage = inputMessage;
                    break;
                case "binary":
                    resultMessage = textToBinary(inputMessage);
                    break;
                case "hexadecimal":
                    resultMessage = textToHex(inputMessage);
                    break;
                case "morse":
                    resultMessage = textToMorse(inputMessage);
                    break;
                case "decimal":
                    resultMessage = textToDecimal(inputMessage);
                    break;
                default:
                    resultMessage = "Invalid target encoding type";
            }
            break;
        case "binary":
            switch (targetEncoding) {
                case "plainText":
                    resultMessage = binaryToText(inputMessage);
                    break;
                case "binary":
                    resultMessage = inputMessage;
                    break;
                case "hexadecimal":
                    resultMessage = binaryToHex(inputMessage);
                    break;
                case "morse":
                    resultMessage = binaryToMorse(inputMessage);
                    break;
                case "decimal":
                    resultMessage = binaryToDecimal(inputMessage);
                    break;
                default:
                    resultMessage = "Invalid target encoding type";
            }
            break;
        case "hexadecimal":
            switch (targetEncoding) {
                case "plainText":
                    resultMessage = hexToText(inputMessage);
                    break;
                case "binary":
                    resultMessage = hexToBinary(inputMessage);
                    break;
                case "hexadecimal":
                    resultMessage = inputMessage;
                    break;
                case "morse":
                    resultMessage = hexToMorse(inputMessage);
                    break;
                case "decimal":
                    resultMessage = hexToDecimal(inputMessage);
                    break;
                default:
                    resultMessage = "Invalid target encoding type";
            }
            break;
        case "morse":
            switch (targetEncoding) {
                case "plainText":
                    resultMessage = morseToText(inputMessage);
                    break;
                case "binary":
                    resultMessage = morseToBinary(inputMessage);
                    break;
                case "hexadecimal":
                    resultMessage = morseToHex(inputMessage);
                    break;
                case "morse":
                    resultMessage = inputMessage;
                    break;
                case "decimal":
                    resultMessage = morseToDecimal(inputMessage);
                    break;
                default:
                    resultMessage = "Invalid target encoding type";
            }
            break;
        case "decimal":
            switch (targetEncoding) {
                case "plainText":
                    resultMessage = decimalToText(inputMessage);
                    break;
                case "binary":
                    resultMessage = decimalToBinary(inputMessage);
                    break;
                case "hexadecimal":
                    resultMessage = decimalToHex(inputMessage);
                    break;
                case "morse":
                    resultMessage = decimalToMorse(inputMessage);
                    break;
                case "decimal":
                    resultMessage = inputMessage;
                    break;
                default:
                    resultMessage = "Invalid target encoding type";
            }
            break;
        default:
            resultMessage = "Invalid source encoding type";
    }

    document.getElementById("resultMessage").value = resultMessage;
});

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function textToHex(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
}

function textToDecimal(text) {
    return text.split('').map(char => char.charCodeAt(0)).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function binaryToHex(binary) {
    const hex = parseInt(binary, 2).toString(16);
    return hex.length % 2 === 0 ? hex : '0' + hex; // Ensure even number of hex digits
}

function binaryToMorse(binary) {
    const text = binaryToText(binary);
    return textToMorse(text);
}

function binaryToDecimal(binary) {
    const text = binaryToText(binary);
    return textToDecimal(text);
}

function hexToText(hex) {
    const bytes = hex.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16)));
    return bytes.join('');
}

function hexToBinary(hex) {
    const text = hexToText(hex);
    return textToBinary(text);
}

function hexToMorse(hex) {
    const text = hexToText(hex);
    return textToMorse(text);
}

function hexToDecimal(hex) {
    const text = hexToText(hex);
    return textToDecimal(text);
}

function morseToText(morse) {
    const morseCodeMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
        '----.': '9', '/': ' '
    };

    return morse.split(' ').map(morseChar => morseCodeMap[morseChar] || morseChar).join('');
}

function morseToBinary(morse) {
    const text = morseToText(morse);
    return textToBinary(text);
}

function morseToDecimal(morse) {
    const text = morseToText(morse);
    return textToDecimal(text);
}

function decimalToText(decimal) {
    return String.fromCharCode(parseInt(decimal, 10));
}

function decimalToBinary(decimal) {
    const text = decimalToText(decimal);
    return textToBinary(text);
}

function decimalToHex(decimal) {
    const text = decimalToText(decimal);
    return textToHex(text);
}

function decimalToMorse(decimal) {
    const text = decimalToText(decimal);
    return textToMorse(text);
}
    const resultTextArea = document.getElementById("resultMessage");
    resultTextArea.value = resultMessage;
});

