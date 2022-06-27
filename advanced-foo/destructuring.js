let rainbow = ['Red', 'Orange', 'Green', 'Blue'];
// let arc1 = rainbow[0];
// let arc2 = rainbow[1];
// let arc3 = rainbow[2];
// let arc4 = rainbow[4];

//destructuring
[arc1, ...others] = rainbow;
console.log(arc1);
console.log(others);
// console.log(arc3);
// console.log(arc4)

rainbow = {
    arc1: 'Red',
    arc2: 'Orange',
    arc3: 'Green',
    arc4: 'Blue',
    colors: 'ROGB'
}

const { arc1: color1, arc2: color2, arc3: color3, arc4: color4} = rainbow
console.log(color1)
console.log(color2)
console.log(color3)
console.log(color4)

const {colors} = rainbow
console.log(colors)

const empName = 'John';
const empAge = 27;
const employee = {
    empName,
    empAge
}

console.log(employee.empName)
console.log(employee.empAge)

for(let i = 0; i< 5; i++){

}

const items = [2, 2, 3]
for(const item of items){
    console.log(item)
}

for(const [index, value] of items.entries()){
    console.log(`value is ${value} at index ${index}`)
}
