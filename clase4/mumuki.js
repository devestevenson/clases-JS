// const operacionMate=(num1, num2)=>{
//     return(num1+num2);
// }
// operacionMate(20, 50);
// console.log(operacionMate);



// const saludar=()=> {
//     let nombre=concatenarNombre ("Jhon" + "Doe");
//     alert(`hola, ${nombre}`);
// }
// const concatenarNombre=(nombre,apellido)=>{
//     let nombreCompleto=`${nombre} ${apellido}`

//     return nombreCompleto
// }
// saludar(concatenarNombre);



// const saludar=()=> {
//     console.log("hola")
// }
// saludar()

const saludar=(nombre)=> {
    console.log(`hola, bienvenido ${nombre}`);
}
let nombreCompleto=prompt("ingrese su nombre");
saludar(nombreCompleto);