//función normal
function saludad (){
    console.log("Holo, holo, holoooooo")
}
saludad();

function suma(){
    let suma = 2 + 3;
    console.log(suma)
}
suma();

function tareaHumana(nombre) {
    console.log(`Holo, holo, holoooo ${nombre}`)
}
tareaHumana('Juana');
tareaHumana('Juan');

//funcion tipo flecha
const matar=(nombre)=> {
    console.log(`matar a: ${nombre}`)
}
matar('Pedro Paramo');

const resta=(num1,num2)=>{
    let resultado=num1-num2;
    // console.log(resultado)
    return resultado
}
resta (50,30)

let resultadoSuma=resta(50,40)