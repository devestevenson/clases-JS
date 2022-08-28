//PARA GUARDAR INFORMACION EN EL NAVEGADOR.

// SESSIONSTORAGE 
//sessionStorage.setItem('id',123); //ALMACENA UN DATO
//console.log(sessionStorage.getItem('id')); //OBTIENE LOS DATOS


//LOCALSTORAGE
let usuario = {
    nombre: 'Camilo',
    edad: 25,
    correo: 'camilo@yopmail.com'
};
// let jsonUsuario = JSON.stringify(usuario);
let jsonUsuario = JSON.stringify(usuario,undefined,4); //organiza la informacion
localStorage.setItem(usuario.correo,jsonUsuario);
console.log(localStorage.getItem(usuario.correo));
