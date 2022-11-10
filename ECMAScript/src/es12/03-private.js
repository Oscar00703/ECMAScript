
//Getters y Setters

class Usuario2 {
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Meotodos
    //Lo que tenemos qu ehacer es poner (#) para hacer que un metodo
    //Se vuelva privado
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    //Get
    get #uAge(){
        return this.age;
    }
    //Set
    set #uAge(n){
        this.age = n;
    }
}

//Generando instancia y asignando valores
const bebeLoper2 = new Usuario2('Daivid',15);
console.log(bebeLoper2.uAge); // Valor asiganado por el constructor
console.log(bebeLoper2.uAge = 20); //Asignando un valor manualmente
