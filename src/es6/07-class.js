//Declaracion de una clase
class User {

};

//Instancia de la clase
//const newUser = new User();

class Usuarios{
    //Metodos
    //Saludos
    greeting(){
        return 'Hello';
    }
    //Se pueden tener multiples metodos
};

const gndc = new Usuarios();
//Tengo Acceso al metodo para saludar
console.log(gndc.greeting());

//Herencia

const bebeLoper = new Usuarios();
console.log(bebeLoper.greeting());

//Constructor
class Usuarios {
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}
//Nueva instacia de la clase
const david = new Usuarios();

//this -  hace referencia al elemento padre que lo contiene
class Usuario {
    constructor(name){
        this.name = name;
    }
    //Metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
//Haciendo una instancia

const ana = new Usuario('Ana');
console.log(ana.greeting());

//Getters y Setters

class Usuario2 {
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Meotodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    //Get
    get uAge(){
        return this.age;
    }
    //Set
    set uAge(n){
        this.age = n;
    }
}

//Generando instancia y asignando valores
const bebeLoper2 = new Usuario2('Daivid',15);
console.log(bebeLoper2.uAge); // Valor asiganado por el constructor
console.log(bebeLoper2.uAge = 20); //Asignando un valor manualmente