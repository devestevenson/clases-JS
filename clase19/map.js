//coleccion de datos con clave o valor, el Map() permite claves de cualquier tipo: booleano, string, numero.

//Creando un constructor
class Personas {
    constructor (nombre,edad) {

    }
}

const persona = new Personas
('Jose', 21);
const persona1 = new Personas
('Maria', 18);
const persona2 = new Personas
('Mark', 16);

console.log(Personas);


//Creando un Map()
const elementoMap = new Map()

elementoMap.set(1, 'Pedro')
elementoMap.set('2', 'Sof')
elementoMap.set(true, 'Bom')

console.log(elementoMap)


//Creando un map a partir de un arreglo array
const paises = [
    ['Colombia', 'Bogota'],
    ['Venezuela', 'Caracas'],
    ['Argentina', 'Buenos Aires']
];
console.log(paises)

//Creando con Map 
const paisesMap = new Map(paises)
console.log(paisesMap)

paisesMap.forEach(element => {
    console.log(element)
})