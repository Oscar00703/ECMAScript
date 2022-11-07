//enahce objet literals
//Una mejora

function newUser(user, age, country, uId){
    return {
        //Estos valores se pueden pasar directamente
        user,
        age,
        country,
        //Podemos pasar otros parametros asi:
        id: uId,
    };
}

console.log(newUser("gndx", 34, "MX", 1));