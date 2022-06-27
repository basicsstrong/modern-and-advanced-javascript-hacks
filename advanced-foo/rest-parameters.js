 const foo = function(...numbers){
     console.log(numbers);

     console.log(numbers instanceof Array);

    //  for(let i = 0; i < numbers.length; i++){
    //      console.log(numbers[i]);
    //  }

     numbers.forEach(e => console.log(e));

    console.log(numbers.pop())
     numbers.find(e => e==1);
 }

 foo(1)