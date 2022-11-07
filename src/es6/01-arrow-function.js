//Funciones flechas /arrow flecha
//Es una alternativa compacta a una expresion de funcion tradicional
//Pero es limitada y no se puede usar en todas las funciones

//funcion normal

function square(num){
    return num * num;
}

//Al ser una funcion se recomiendo usar Const para las variables

const square = (num) =>{
    return num * num;
}

//Return implicito
const square = (num) => num * num;
