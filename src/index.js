const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    function dotDash(v) {
        let cipher = '',
            letter = '';
        for (let i = 0; i < v.length + 2; i += 2) {
            if (v.substring(i, i + 2) == '10') {
                cipher += '.';
            }
            else if (v.substring(i, i + 2) == '11') {
                cipher += '-';
            }
        }
        letter = MORSE_TABLE[cipher];
        return letter;
    }

    let v = expr;
    let result = '';
    for (let i = 0; i < v.length; i += 10) {


        if (v.substring(i, i + 10) == '**********') {
            result += " ";
        }
        else { result += dotDash(v.substring(i, i + 10)) }
    }
    return result;


}

module.exports = {
    decode
}