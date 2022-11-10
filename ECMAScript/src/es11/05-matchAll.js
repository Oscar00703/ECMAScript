//Diferentes filtros para buscar
const regex = /\b(Apple)+\b/g; //Nos permite buscar la palabra dentro de un string

const fruit = 'Apple, Ban, Apple, Orange, etc.';
//Resultado        //String        //Regla
for (const match of fruit.matchAll(regex)){
    console.log(match);
}