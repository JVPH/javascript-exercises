const findTheOldest = function(people) {
    const currentYear = 2022;
    
    people.forEach(person => {
        if(person.yearOfDeath === undefined){      
            person.age = currentYear - person.yearOfBirth;
        }else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    let oldest = {name: 'placeholder', yearOfBirth: 0, yearOfDeath: 0, age: 0};  

    people.forEach((person) => {
        if (person.age > oldest.age) {            
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
