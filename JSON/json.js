const ciudad = {
    nombre: 'Json City',
    habitantes: 5001,
    economia: ['campo', 'tecnologia', 'turismo'],
    ubicacion: '234433, 5677 N'
}
console.log(ciudad);

const ciudadJSON = JSON.stringify(ciudad);
console.log(ciudadJSON);