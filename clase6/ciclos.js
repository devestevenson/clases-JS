// //Repaso funciones flechas

// const suma =(num1,num2) => {
//     return num1+num2;
// }
// console.log(suma(3, 8));


// //Repaso de condicionales SiNo
// let edad = 18;
// if (edad>17) {
//     console.log("Eres mayor")
// } else {
//     console.log("eres feo")
// }

// //--------------------------



//CICLOS normal
for (let i = 0; i <=100; i++) {
     console.log(i);    
}

//ciclo usando operador, donde pedimos que vaya de 2 en 2
for (let i = 0; i <=100; i+=2) {
    console.log(i);    
}

//Ciclo con acumulador y contador
let cont=0,acum=0;
for (let i = 0; i <=100; i++) {
    acum+=i
    console.log(i);    
}
console.log(`El acumulador está en: ${acum}`)


//ciclo con MODO %
// let cont=0,acum=0;
for (let i = 0; i <=100; i++) {
    acum+=i
    if (i%2==0) {
        console.log(`El número ${i} es par`)
    }else {
        console.log(`El número ${i} es impar`)
    }
}
console.log(`El acumulador está en: ${acum}`)

//ciclo con funcion flecha
const isPair=(num)=>{
    if (num%2==0){
        console.log(`El número es par`)
    }else {
        console.log(`El número es impar`)
    }
}
isPair(121)











//CICLO PARA con VECTOR
//ciclo con vector (arrays)

let numeros = [5,2,3,4,1,3];
console.log(numeros) //impime el vector
console.log(numeros.length) //imprime el tamaño del vector



//clico con advertencia
console.warn("Ciclo para con Vector (Arrays)")
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]*2)
 }

 //Tarea de VECTOR
 let numeros1 = [5,2,3,4,1,3];
 for (let i = 0; i <= numeros1.length; i++){
     if (numeros1[i]%2==0){
         console.log(`el número ${i} es impar`)
     }else{
        console.log(`el número ${i} es par`)
     }
     console.log(i)
 }




 //Ciclo FOR OF
 console.warn("Ciclo for of") //imprime datos dentro del vector
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]*2)
 }
 for (const numero of numeros) {
     console.log(numero)
 }

 //ciclo for in
 console.warn("for in") //imprime el indice
 for (const key in numeros) {
     console.log([key])
     if (key==2) {
         console.log(numeros[key])
     }
 }

 //ciclo for each (para recorrer los elementos que estan dentro del vector)
 console.warn("foreach")
numeros.forEach(element => {
    console.log(element)
})




//ciclo MIENTRAS (while)
console.warn("while") //primero pregunta
let n=0;
while (n<5){
    console.log(n)
    n++
}

//ciclo mientras (do while)
console.warn("do while")
n=0; //ejecuta y luego pregunta
do {
    console.log(n)
    n++
} while (n<10)



//Break-Continue
console.warn("Break")
for (let index = 0;  index<5; index++) {
    if (index==2) {
        break
        console.log(index)
    }
    console.log(index)
}

//Break-Continue (si esta lo que se busca que salga del ciclo)
console.warn("Continue") //imprime todo los numeros menos el 1
for (let indexx = 0;  indexx < 5; indexx++) {
    if (indexx==1) {
        continue
        console.log(indexx)
    }
    console.log(indexx)
}










