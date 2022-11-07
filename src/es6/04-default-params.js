function newUser(name, age, country){
    //Valores por defecto
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'EEUU';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

//Otra forma de hacerlo que es mejor

function newAdmin(name = 'Oscar', age = 25, country = 'cl'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28,'P');
