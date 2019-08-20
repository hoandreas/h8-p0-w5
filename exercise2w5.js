function changeVocals (str) {
    var newWord = '';
    for(var i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a': {newWord += 'b'}; break;
            case 'A': {newWord += 'B'}; break;
            case 'i': {newWord += 'j'}; break;
            case 'I': {newWord += 'J'}; break;
            case 'u': {newWord += 'v'}; break;
            case 'U': {newWord += 'V'}; break;
            case 'e': {newWord += 'f'}; break;
            case 'E': {newWord += 'F'}; break;
            case 'o': {newWord += 'p'}; break;
            case 'O': {newWord += 'P'}; break;
            default: {newWord += str[i]};
        }
    }
    return newWord;
}
  
function reverseWord (str) {
    var reversed = '';
    for(var i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
  
function setLowerUpperCase (str) {
    var lowerUpper = ''
    for(var i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            lowerUpper += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            lowerUpper += str[i].toLowerCase();
        }
    }
    return lowerUpper;
}
  
function removeSpaces (str) {
    var noSpace = '';
    for(var i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            noSpace += str[i];
        }
    }
    return noSpace;
}
  
function passwordGenerator (name) {
    if(name.length < 5) {
      return'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var alterVocals = changeVocals(name);
    var reversed = reverseWord(alterVocals);
    var toLowerUpper = setLowerUpperCase(reversed);
    var destroySpaces = removeSpaces(toLowerUpper);

    return destroySpaces;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'