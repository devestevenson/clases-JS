//FUNCION CALLBACK SINCRONICA
let saludar = (nombrePersona) => {
    console.log(`Holoooh, ${nombrePersona}`);
}

let pedirNombre = (callback) => {
    let nombre = prompt("Ingrese su nombre");
    callback(nombre);
}
pedirNombre(saludar);





//FUNCION CALLBACK ASINCRONICA
let saludar2 = (nombrePersona2) => {
    setTimeout(() => {
        console.log(`Holoooh, ${nombrePersona2}`);
        
    }, 3000); //el tiempo que demorará en mostrar la información ingresada
}

let pedirNombre2 = (callback) => {
    let nombre2 = prompt("Ingrese su nombre");
    callback(nombre2);
}
pedirNombre2(saludar);