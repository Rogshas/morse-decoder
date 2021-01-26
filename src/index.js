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

function decode(expr) {
    let arr = [];
    let res = [];
  
    for (let i = 0; i < expr.length; i+=10){
        arr.push(expr.slice(i,i+10));
    }
  
    for (let i =0; i < arr.length; i++) {
        res.push(arr[i].slice (arr[i].indexOf(1),arr[i].length));
        res[i] = res[i].replace(/10/g, '.').replace(/11/g, '-');
        res[i] = MORSE_TABLE[res[i]];
        if (!res[i]) res[i] = ' ';
        console.log(res[i]);
    } 

    return res.join('');
}


module.exports = {
    decode
}