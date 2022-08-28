//crear objecto vacío
// let objecto = {}
// console.log(objecto)

//creando un objecto persona
const persona = {
    nombre:'Jhon',
    apellido:'Doe',
    cedula: 1234567890,
    raza:'aria',
    edad:25,
    estatura:'172 cm',
    padres: {
        madre:'Juana',
        padre:'Juan',
    }
}
console.log(persona)
console.log(`El número de la cedula: ${persona.cedula}`)
//creando un objecto agencia
const agencyPorn = {
    actricez: {
        1: 'Mia Khalifa',
        2: 'Kendal Wooz',
        3: 'Aba Hardy'
    },
    actores: {
        1: 'Jordy',
        2: 'Nacho',
        3: 'Mandinga',
    }
}
console.log(agencyPorn.actricez)