//Dos tipos de destructuracion
//arrays destructuring

let fruit = ['Appel','Ban'];
//Asigando los valores de fruit a [a,b]
let [a,b] = fruit;
console.log(a,b);
//Tambien podemos acceder a los valores de esta manera
console.log(fruit[0], fruit[1]);

//Object destructuring
//Destructuracion de objetos
let user = {username: 'Oscar', age:34};
let {username, age} = user;
console.log(username, age);
//Podemos utilizar
//user.username y user.age


// Spread operator

let person = {name:'Oscar', age: 28};
let country = 'MX';
//Usando ... se hace la destructuracion con el operador de propagacion
//Lo que se encuentra en person lo asigna a ...person y poder agregar nueva
let data = { id: 1, ...person , country};
console.log(data);

//Parametros Rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
//...values tomara los datos, exceto el primero numero porque es parte de num
sum(1, 1, 2, 3);