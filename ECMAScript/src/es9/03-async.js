async function* anotherGenerator(){
    yield await Promise.resolve(1); 
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    //Si quitamos el await .then no funciona
}

//Instancia
const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('A ver cuando sucede');

//Uso de for

async function arraysOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arraysOfNames(['OScar','David']);
console.log('After');