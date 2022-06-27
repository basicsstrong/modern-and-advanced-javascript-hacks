let loop = function(...numbers){
     numbers.forEach(e => console.log('value of e is :' +e));
}

let numbers = [1, 2, 6];
loop(...numbers);

let threeParams = function(number1, number2, number3){
   console.log(number1 + ", "+ number2 + ", " + number3 );
}

threeParams(...numbers);

let question = ['how', 'is', 'the'];
let sentence = ['Hey', 'there', ...question, 'weather?' ];
console.log(sentence)
console.log(...'there');

const basic = {firstName: 'James', lastName:'Bond', age: 30}
const personalDetails = {...basic, mobile:777777, email: 'james@something.com'}
console.log(personalDetails)