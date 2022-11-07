//Los generados son un tipo especial de funcion
//que nos va a retornar una serie de valores
//Segun el algoritmo definido
//Ponemos un (*) para saber que es un generator
function* iterate(array){
    for(let value of array){
        //yield => palabra reservada
        yield value;
    }
}

const it = iterate(['Oscar','David', 'Ana', 'Ulises', 'Jen']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//Se va ejecutando el siguiente valor en nuestro iterate