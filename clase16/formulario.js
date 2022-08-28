//llamando elementos del documento html por id
let correo = document.querySelector('#correo');
let clave = document.querySelector('#clave');
let enviar = document.querySelector('#enviar');

enviar.addEventListener('click', ()=> {  //se crea evento click
    enviarDatos ()
})
let enviarDatos = () => {  //se llama el evento atravez de una funcion
    let usuario = {
        correo: "",
        clave: ""
    };
    usuario.correo=correo.value
    usuario.clave=clave.value

    let jsonUsuario = JSON.stringify(usuario);
    localStorage.setItem(correo.value, jsonUsuario);

    alert('Se envió el Info');

    obtenerUsuario()
}
let obtenerUsuario = () => {
    let usuario = document.querySelector('#usuario')
    let objUsuario = JSON.parse(localStorage.getItem('jhon@email.com'))

    console.log(objUsuario)

    usuario.innerHTML=objUsuario.correo
}


