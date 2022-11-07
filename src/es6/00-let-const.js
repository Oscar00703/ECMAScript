//Var
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);
//Let
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
//Const 
const animal = 'cat';
//Const no se puede reaccionar
//animal = 'dog';
console.log(animal);

//function

const fruits = () =>{
    if(true){
        var fruit1 = 'Appel'; //Existe de forma global => function scope
        let fruit2 = 'kiwi'; // No puede ser accedida => bloc scope
        const fruit3 = 'Ban'; //block scope
    }
    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
}
//Corriendo la function
fruit();