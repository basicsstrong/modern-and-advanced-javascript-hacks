let i = 1;

{
    const myConstant = Object.freeze(['You', 'Always']);
    myConstant.pop('Always');
    myConstant.push('Never');
    console.log(myConstant);
}

//console.log(myConstant);

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log("i is "+ i);
    }, i*1000);
}

// i = 2;
// console.log(i);

//closure

// function outerFunction(){
// var foovar = "Hey There";

// function logFooVar(){
//     console.log(foovar);
// }

// foovar = "Closure";

// return logFooVar;
// }

// function(){
//     outerFunction()();
// }();


