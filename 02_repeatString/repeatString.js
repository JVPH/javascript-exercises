const repeatString = function(wordToRepeat, numberOfTimesToRepeat) {
    if(numberOfTimesToRepeat  < 0){
        return 'ERROR';
    }
    if(numberOfTimesToRepeat === 0){
        return '';
    }
    let repeatString = wordToRepeat;
    for(let i = 0; i<numberOfTimesToRepeat-1; i++){
        repeatString += wordToRepeat;
    }
    return repeatString;


};

// Do not edit below this line
module.exports = repeatString;
