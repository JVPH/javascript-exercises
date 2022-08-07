const removeFromArray = function (array, ...toBeRemoved) {
    if (!(array.includes(arguments[1]))) {
        console.log('hi');
        return array;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === arguments[1]) {
            console.log('phio');
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
