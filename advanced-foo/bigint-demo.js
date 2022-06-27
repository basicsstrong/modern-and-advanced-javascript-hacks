let a = 76665453467687879n;
let b = BigInt(87867865656566666);

let num = BigInt(Number.MAX_SAFE_INTEGER);
num = num + 2n;
console.log(num);

//ES2020
//>>>

let result = num/7n;
console.log(Number.MAX_SAFE_INTEGER/7);
console.log(result);