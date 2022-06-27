const p1 = new Promise((resolve, reject)=>{
    const part = 8;
    setTimeout(() => reject("There is no such"), 7000)
})

const p2 = new Promise((resolve, reject)=>{
    const movie = 'Harry Potter';
    setTimeout(() => resolve(movie), 500)
})

const p3 = new Promise((resolve, reject)=>{
    const progress = 'Under Creation';
    setTimeout(() => reject(progress), 1000)
})

//Promise.any([p2, p1, p3]).then(p => console.log(p));
Promise.race([p2, p1, p3]).then(p => console.log(p));
