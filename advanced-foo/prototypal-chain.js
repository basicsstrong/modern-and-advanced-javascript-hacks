const anObject = {name: "Travis"}
console.log(anObject.hasOwnProperty("name"))
//__proto
//Object.getPrototypeOf
console.log(anObject.__proto__ === Object.prototype)
console.log(anObject.__proto__ === Object.getPrototypeOf(anObject))

anObject.__proto__.newMethod = function(){
    console.log("Added a new Method to the prototype")

}

//anObject.newMethod()

const employee = {id: 1, age: 22}
employee.newMethod()

const listOfEmps = [employee];
listOfEmps.newMethod();
console.log(listOfEmps.__proto__ === Object.prototype)
//listOfEmps ->Array-> Object 
//[]
console.log(listOfEmps.__proto__ === Array.prototype)
console.log(Array.prototype.__proto__ === Object.prototype)
console.log(listOfEmps.__proto__.__proto__ === Object.prototype)

//listOfEmps ->Array.prototype-> Object.prototype -> null

//Prototypal Chain, Prototypal Inheritance
//Object based Inheritance