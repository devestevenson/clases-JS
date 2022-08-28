//ASIENDO USO DEL && (Y)
// console.warn("Operador &&")
// console.log(true && true) //verdadero
// console.log(true && false) //falso
// console.log(false && true) //falso
// console.log(false && false) //falso

//EJEMPLO
// const entrarAlBar = (edad, pago) => {
//     if (edad >= 18 && pago == true) {
//         console.log("puede entrar")
//     }else {
//         console.log("no puede entrar")
//     }
// }
// let edadPersona =Number(prompt("Ingrese su edad"))
// let pagoEntrada =Boolean(prompt("¿¿Usted pagó??"))
// entrarAlBar(edadPersona, pagoEntrada)




//Operador || (o)
// console.warn("Operador || (O)")
// console.log(true || true) //verdadero
// console.log(true || false) //verdadero
// console.log(false || true) //verdadero
// console.log(false || false) //falso

// //EJEMPLO
// const entrarAlBar = (edad, pago) => {
//     if (edad>=18 || pago===true) {
//         console.log("Puede entrar al bar")
//     }else {
//         console.log("No puede entrar al bar")
//     }
// }
// let edadPersona =Number(prompt("Ingrese su edad"))
// let pagoEntrada =Boolean(prompt("¿¿Usted pagó??"))
// entrarAlBar(edadPersona, pagoEntrada)



//Operador ! (negacion)

// console.warn("Operador ! (negacion)")
// console.log(!true) //falso
// console.log(!false) // verdadero

// console.warn("Ejemplo del operador !")
// console.log(4 < 3)
// console.log(!(4 < 3))


// console.warn("Otro Ejemplo del operador !")
// const validarEdad = (edad) => {
//     if (edad >= 18) {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(validarEdad(19)) //devuelve verdadero
// console.log(!validarEdad(19)) // devuelve falso



//OPERADOR DE AGRUPACION "()" parentesis
// console.warn ("Operador de agrupacion () parentesis")
// let num1 = 2, num2 = 5, num3 = 5;

// let resultado = num1+(num2*num3); //primero realiza lo que esta entre parentesis
// console.log(resultado);


//Orden de evaluacion 
console.warn ("Orden de evaluacion")
let num1 = 7, num2 = 69, num3 = 2;

let resultado = num1 ** num3 + num2 / num3 + num1 - num2 * num3; //primero POTENCIA, MULTIPLICACION, DIVISION, SUMA, RESTA (^*/+-)
console.log(resultado)
console.log(Math.floor(resultado)); //elimina los decimales

