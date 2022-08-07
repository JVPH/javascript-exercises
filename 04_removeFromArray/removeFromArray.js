const removeFromArray = function (array, ...toBeRemoved) {
    toBeRemoved = Array.from(toBeRemoved);
    let count = 0;
    for(let j = 0; j<toBeRemoved.length; j++){
        if (!(array.includes(toBeRemoved[j]))) {
            count++;
        }
    }
    if(count=0){
        return array;
    }
    
    if(arguments.length>2){
        for (let i = array.length - 1; i >= 0; i--) {
            for(let j = 0; j<toBeRemoved.length; j++){
                if (array[i] === toBeRemoved[j]) {           
                    array.splice(i, 1);
                }
            }
        }

    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === toBeRemoved[0]) {           
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
