const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function chunkString(input, size) {
    const iter = (acc, str) => {
        if (str.length === 0) return acc;
        const newAcc = [...acc, str.substr(0, size)];
        return iter(newAcc, str.substr(size, str.length));
    }
    return iter([], input);
}

function getSymbol(str) {
    if (str === '**********') return ' ';
    const strArr = chunkString(str, 2);
    const result = strArr.reduce((acc, pair) => {
        if (pair === '10') return [...acc, '.'];
        if (pair === '11') return [...acc, '-'];
        return acc;
    }, []);
    return MORSE_TABLE[result.join('')];
}

function decode(expr) {
    const strArr = chunkString(expr, 10);
    return strArr.map((item) => getSymbol(item)).join('');
}

module.exports = {
    decode
}