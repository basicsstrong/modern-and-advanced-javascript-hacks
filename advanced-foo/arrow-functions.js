let demo = function(a, b){
    return a+b;
}

demo = (a, b) => a + b;

console.log(demo(1, 2))

//reduce

let reduced = function(...args){
    args.forEach(e => console.log(e));
    return args.reduce((a,b) => a+b)
}


console.log(reduced(1, 3))

const location = {
    start: 5,
    getCurrentLocation: (start, distance) => start + distance
}

console.log(location.getCurrentLocation(location.start, 10))

