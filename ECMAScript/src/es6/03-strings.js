let hello = 'Hello';
let world = 'world';
//No es recomendable hacer esto
let epicPhrase = hello + ' ' + world + '!';


//Usando Templates Literals
//Se usan comillas frances ``
//Se llaman a las variables con ${}
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);


//Multi-line string
//Forma de trabajar con muchas lineas dentro de un string
//Esto no es amigable ni recomendable
let lorem = 'Esto es un string \n ' + 'esto es otra linea';
//Se usa con comillas francesas
let lorem2 = `Esta es una france
    la otra parte de la frace
`;
console.log(lorem);
console.log(lorem2);