// class Title{

// }

// const title = class Title{

// }

// const title2 = class {

// }

//create classes dynamically

const classFactory = function(...params){
    return class {
        constructor(...values){
            for(const [index, param] of params.entries()){
                this[param] = values[index];
            }

        }
    }
}

const Alarm = classFactory('time', 'reference');
const tenAMAlarm = new Alarm(10, 'AM');
console.log(`I have to wake up at ${tenAMAlarm.time}${tenAMAlarm.reference}`) 

const CreditCard = classFactory('type', 'cardLimit', 'validThru');
const myCredCard = new CreditCard('Premium', 3_00_00_00, 2025);
console.log(`I have a ${myCredCard.type} card
, having balance of ${myCredCard.cardLimit} and is valid till ${myCredCard.validThru}`)

//so this is how class epressions can be quite a powerful tool to work with, 
//specially it brings more flexibility in the code.