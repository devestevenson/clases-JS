const pedirNombre = new Promise ((realizar, rechazar) => {
    setTimeout(() => {
        let nombre = prompt('Ingrese su nombre');
        if (nombre.length > 0){
            realizar(nombre)
        }else {
            rechazar('Algo salió mal')
        }
    }, 2000);
})
pedirNombre.then((resultado) => {
    console.log(resultado)
}).catch(err=>console.log(err))