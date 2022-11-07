const user = {username: 'hhh', age: 21, country: 'CO'};
const{username, ...values} = user; //Propagar Elementos
console.log(username);
console.log(values); //=> Se guardan los demas valores del elemento user