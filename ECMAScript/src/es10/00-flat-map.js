//flat-map nos devuelve una matriz de cualquier sub matriz
const array =[1, 2, 3, 4, 6, [1, 3, 7, 90, [1, 3, 4]]];
//=> se pasa la profundidad, el numero de [] dentro de otro []
console.log(array.flat(3)); 
//=> flat map, mapea los resultados y los aplana

const array2 =[1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2])); //Estamos transfomando los datos con una funcion