// const p = new Promise((resolve, reject) => {
//     try{
//     const name = "Harry Potter"
//     const part = 8
//     let movie = `${name} ${part}`
//     throw Error('Not Found')
//     resolve(movie);
//     }catch(er){
//         reject(er);
//     }
// })

// p.then(movie => movie + ' : Under creation')
// .then(movie => console.log(movie))
// .catch(er => console.log(er.message));

const p1 = new Promise((resolve, reject)=>{
    const part = 8;
    setTimeout(() => reject("There is no such"), 7000)
})

const p2 = new Promise((resolve, reject)=>{
    const movie = 'Harry Potter';
    setTimeout(() => resolve(movie), 200)
})

const p3 = new Promise((resolve, reject)=>{
    const progress = 'Under Creation';
    setTimeout(() => resolve(progress), 1000)
})

Promise.allSettled([p2, p1, p3]).then(list => list.forEach(p => console.log(p.value)));
//Promise.all([p2, p1, p3]).then(list => list.forEach(p => console.log(p)));