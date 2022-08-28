//CON SET SOLO SE TRABAJAN CON DATOS QUE NO SE VAN A REPETIR
//Set no iterable
const numeros = [1, '2', 3, '3', 8, '6', '7', 8, '9', 10];
// for (let i = 0; i < numeros.length; i++) {
//     console.log(Number(numeros[i])*2)
// }

let numerosSet = new Set (numeros);
console.log(numerosSet);



//Set iterable
const lenguajes = [
    'Ingles',
    'Español',
    'Quechua',
    'Maya',
    'Ingles'
];

const setLenguajes = new Set (lenguajes);
console.log(setLenguajes.size);

setLenguajes.forEach (element => {
    console.log(element);
});
setLenguajes.add('Vikingo');
console.log(setLenguajes);
lenguajes.push('hola')


//