//Promesas
//Funcion con arrow fuctions

const anotherFunction = () =>{
    //Funcion anonima, tambien puede ser representada
    //como una arrow function
    return new Promise((resolve, reject) =>{
        //Logica para saber si usaremos resolve o reject
        if(true){
            //Funciona como se espera
            resolve('Siu');
        }else{
            //No funciona como se espera
            reject('Nel');
        }
    });
}

anotherFunction()
    //Nos retorna una respuesta
    .then(response => console.log(response))//No se cierra con (;) para concatenedar al catch
    //Si no se resuelve de forma exitosa
    .catch(error => console.log(error))
    .finally(()=>console.log('Se termino')); //hace algo cuando ya se ha terminado la promesa