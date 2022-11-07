async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

//Instancia
const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));