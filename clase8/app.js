// //Objetos
// console.warn("Objetos");

// let mascota = {
//     nombre: "Cerbero",
//     ocupacion: "Guardian de las Puertas del Infierno",
//     edad: 666,
//     raza: "Aria",
//     color: "negro infernal",
//     hambiento: true,
//     ladrando:function(nombre, color){
//         this.nombre=nombre
//         this.color=color
//         return `${this.nombre} esta ladrando`
//     }
// }
// console.log(`${mascota.nombre}, ${mascota.ocupacion}`)
// console.log(mascota.ladrando("FiCerbero, Rojo Infernal"))


// console.warn("Objetos de Arreglo");

// let mascotaT = [
//     {nombre:"Bataclas", color:"Negro"},
//     {nombre:"-K-Boom--", color:"Rojo"}
// ]
// console.log(mascotaT)


// let numeros = [2,4,5,6,7,8];
// numeros.push(15) //añade un valor al arreglo
// console.log(numeros);

// numeros.pop() //retira el ultimo valor del arreglo
// console.log(numeros)




//PROTOTIPOS
// function Person (name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;

//     this.getInfo = function () {
//         return `${this.name}, ${this.age}, ${this.color}`;
//     }
// }


const empiezaYTerminaCon=(palabra,letra)=>{
    palabra.startsWith(letra)&&palabra.endsWith(letra)
  }
