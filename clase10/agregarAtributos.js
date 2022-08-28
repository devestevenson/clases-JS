let titulos = document.querySelectorAll('h1');
// console.log(titulos);

//asignacion de clases a documentos html.
for (i = 0; i < titulos.length; i++ ) {
    titulos[i].className="titulo"
}
titulos[1].id="titulo1";
titulos[2].id="titulo2";

console.log(titulos)

let imagen=document.getElementById("imagen")

imagen.setAttribute("src", "https://i.blogs.es/8cd46d/midjourney-selfie-fin-del-mundo-1---copia/1366_2000.jpeg");

//agregando enlace a una etiqueta de html desde js
let enlace=document.querySelector("a") 
enlace.setAttribute("href", "https://www.google.com/")