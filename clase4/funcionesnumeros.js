//Objeto Math = proporciona una serie de constante

console.log(Math.E);//devuelve la constante de Euler
console.log(Math.PI);//Devuelve la constante de PI
console.log(Math.pow(2, 3)); //potencia
console.log(2**3)//potencia

let num1 = 30;
let num2 = 70;
console.log(Math.min(num1,num2))
console.log(Math.max(num1,num2))

const PI = 3.1416001
console.log(Math.round(PI))//deuelve el numero entero mas cercano
console.log(Math.ceil(PI))//
console.log(Math.floor(PI))//
console.log(Math.random()*(num2-num1)+num1)//devuelve numero al azar en decimales
console.log(Math.trunc(Math.random()*(num2-num1)+num1))//devuelve un numero al azar en entero

//Taller. sacar numero mayor y menor
const numeros = [0, 20, 10, 5, 30];
console.log(typeof numeros)
console.log(`El número menor es: ${Math.min(...numeros)}`);
console.log(`El número mayor es: ${Math.max(...numeros)}`);
