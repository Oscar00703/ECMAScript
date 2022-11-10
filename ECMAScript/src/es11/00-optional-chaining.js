//Podemos validar y no romper el flujo de la aplicacion
const users ={
    gndx: {
        country: 'MX' //Si ponemos mas datos ponemos (,) y no se cierra con (;)
    },
    ana: {
        country: 'CO'
    }
}
//Puedo acceder a los hijos de user e ir accediendo a mas profundidad
console.log(users.gndx.country);
//Entrando a un objeto que no existe pero que existio 
//console.log(users.bebeloper.country);
//Se repara de la siguiente manera
console.log(users?.bebeloper?.country);