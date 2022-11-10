//Mejoras a las promesas
const promise1 = new Promise((resolve, reject) => reject("Reject")); //Fallamos la primera
const promise2 = new Promise((resolve, reject) => resolve("Resolve")); //Recuerda que Promise, mayus al inicio
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));


Promise.any([promise1, promise2, promise3]) //Va a capturar la respuesta de la primera que sea
//de forma satisfactoria
    .then(response => console.log(response)); //Como fallamos la primera, nos muestra la primera que se resuelva