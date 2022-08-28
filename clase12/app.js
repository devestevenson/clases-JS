let titulo = document.createElement('h1'); //creando etiqueta h1
titulo.innerHTML = 'Creando Elementos en JavaScript'; //texto que aparecerá en pantalla.
document.body.appendChild(titulo); //imprime en pantalla.

titulo.style.color = 'Orange'; //Aplicando estilos a la etiqueta H1.

console.log(titulo); //Imprime por consola.




let subtitulo = document.querySelector('#subtitulo');
document.body.removeChild(subtitulo); //remueve la etiqueta con el id #subtitulo