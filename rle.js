let fs = require('fs');

function escapeCode(inputStr) {
    let codedStr = '':
    while (i < inputStr.length) {
        while (inputStr.charAt(i) == inputStr.charAt(i + n))
        n++
        nJump = n
        while (n >= 255) {
            codedStr += '#' + String.fromCharCode(255) + inputStr.charAt(i)
            n -= 255
        }
        if ((n > 3) || (inputStr.charAt(i) == '#'))
        codedStr += '#' + String.fromCharCode(n) + inputStr.charAt(i);
        else
        for (k = 0; k < n; k++)
        codedStr += inputStr.charAt(i);
        i += nJump;
        n = 1;
    }
    return codedStr;
}

function escapeDecode(inputStr) {
    let decodedStr = '';
    while (i < inputStr.length) {
        if (inputStr.charAt(i) == '#') {
            i++;
            for (k = 0; k < inputStr.charCodeAt(i); k++) {
                decodedStr += inputStr.charAt(i + 1);
            }
            i++;
        }else 
        decodeStr += inputStr.charAt(i);
        i += 1;
    }
    return decodeStr;
}


let arg = process.argv;
let codeOrDecode = arg[2];
let inputFile = arg[3];
let outFile = arg[4];

let i = 0;
let n = 1;
let resultStr = '';

let inputText = fs.readFileSync(inputFile, 'utf8').toString();


if (codeOrDecode != 'code' && codeOrDecode != 'decode')
console.log('Incorrect codeOrDecode parameter!');

if (codeOrDecode == 'code')
resultStr = escapeCode(inputText);
else
resultStr = escapeDecode(inputText);

fs.writeFileSync(outFile, resultStr);
