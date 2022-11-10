//Cargar en la web piezas de codigo segun nuestras necesidades
const button = document.getElementById('btn');
//Funcion anonima es cuando no lleva nombre
button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});