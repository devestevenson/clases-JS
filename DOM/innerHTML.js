const ciudades = ["Medellin", "Bucaramanga", "Cartagena", "Pereira", "Barranquilla"];

let ul = document.querySelector("ul");

// ul.innerHTML= `<li>Colombia</li> <li>Colombia</li><li>Colombia</li>`

let ciudadesConcatenar = "";

for (let i = 0; i < ciudades.length; i++) {
    ciudadesConcatenar = ciudadesConcatenar + `<li>${ciudades[i].toUpperCase()}</li>`;
}
ul.innerHTML=ciudadesConcatenar