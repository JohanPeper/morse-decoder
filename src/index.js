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
    let ans = '';
    let letter = '';

    for (let i = 10; i <= expr.length; i += 10) {
        if (expr.slice(i - 10, i) == '**********') {
            ans += " ";
            continue;
        }
        for (let j = 2; j <= expr.slice(i - 10, i).length; j += 2) {
            if (expr.slice(i - 10, i).slice(j - 2, j) === '10') {
                letter += '.';
            } else if (expr.slice(i - 10, i).slice(j - 2, j) === '11') {
                letter += '-';
            }
        }
        ans += MORSE_TABLE[letter];
        letter = '';

    }
    return ans;

}

module.exports = {
    decode
}