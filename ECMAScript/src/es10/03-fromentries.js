//Object.entries ademas de convertir un objecto en un array de arrays
//Podemos hacer un cambio inverso
const entries = new Map([["name","Oscar"], ["age", 34]]) //Se usa map para pasar dentro la estructura del array
console.log(entries);//ver entries antes de la transformacion
console.log(Object.fromEntries(entries));