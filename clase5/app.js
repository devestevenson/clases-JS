// console.log('conectada con boolean')

// console.warn('not a la negacion')
// console.log(true)
// console.log(!true)

// console.warn('and (y)') //ambas tienen que cumplirse
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.warn('Or (o)') //una de las dos debe de
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// let verdad=true;
// let falso=false;
// console.log(verdad);
// console.log(falso);



//APRENDIENDO COERCION
// let numero1=3,numero2='4'
// let resultado=numero1+numero2

// console.log(resultado);
// console.log(typeof resultado);

// let resultadoEntero = numero1+Number(numero2);
// console.log(resultadoEntero);




//APRENDIENDO CONDICIONALES

//condicionales con if solamente
let edad = 18;
if (edad>=18) {
    console.log("Eres mayor de edad");
}

//condicionales con if else
let age = 18;
if (age>=18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres menor de edad");
}

//condicionales con Switch
let personName="estevenson";
switch (personName) {
    case "yinier":
        console.log("le gusta el futbol");
        break;
    case "estevenson":
        console.log(`el señor ${personName} es el monitor`)
        break
    default:
        console.log("es una persona")
        break;
}

//operador ternario
let personGenre = 'm';
personGenre === 'f'? console.log("Es mujer"): console.log("Es hombre");

let personAge = '18';
personGenre>= 18 ? console.log("Eres mayor de edad"): 
console.log("Eres menor de edad");










// let num1=5, num2='5';
// console.log(num1==num2);
// console.log(num1===num2);



