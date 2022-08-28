let contenedorPokemon = document.querySelector('#contenedorPokemon');

let min = 1,
    max = 8;

const fetchPokemons = (min,max) => {
    //Ciclos para traer los Pokemones
    for (let i = min; i <= min + max; i++) {
        fetchPokemon(i);
    }
};

const fetchPokemon = async(id) => { //funcion asincronica usando el metodo fetch
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`); //comsumiendo el api
    const data = await response.json() //se convierte a objeto

   const pokeContenedor = document.createElement('div')
   pokeContenedor.appendChild(nombrePokemon)

   contenedorPokemon.appendChild(pokeContenedor)

    const nombrePokemon = document.createElement('h1')
    nombrePokemon.innerHTML=data.name;
    contenedorPokemon.appendChild(nombrePokemon);
}
fetchPokemons(min,max) //llamos la funcion y que nos imprima el minimo hasta el maximo