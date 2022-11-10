//usando fake API 
import fetch from "node-fetch";
//es una peticion get de obtener datos de los productos
const response = await fetch('https://api.escuelajs.co/api/v1/products'); //Await espera a recibir los datos del servidor
//Constante para lo que recibimos lo transformemos en objeto Json
const products = await response.json();
//exportamos los productos para poderlos utilizar
export {products};