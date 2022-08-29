const palindromes = function (str) {
    const onlyLetters = Array.from(str.toLowerCase().replace(/[^a-z]/gi, ""));
    const reversed = [...onlyLetters].reverse();
    for (let i = 0; i < onlyLetters.length; i++) {
        if(onlyLetters[i] !== reversed[i]){
            return false;
        }        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
