const promise1 = new Promise((resolve, reject) => reject("Reject")); //Fallamos la primera
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); //Recuerda que Promise, mayus al inicio
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));