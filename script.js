import pokemon from "./pokemon.js";



const listaPokemones = pokemon.pokemon;

const tabla = document.createElement('table');
    const encabezados = ['Pokedex', 'Icon', 'Name', 'Type', 'About'];
    const encabezadoRow = tabla.insertRow();
    
    encabezados.forEach((encabezado) => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        encabezadoRow.appendChild(th);
    });

   
    listaPokemones.forEach((pokemon) => {
        const fila = tabla.insertRow();
        
      
        const celdaPokedex = fila.insertCell();
        celdaPokedex.textContent = pokemon.num;

        
        const celdaIcon = fila.insertCell();
        const imagen = document.createElement('img');
        imagen.src = pokemon.img;
        celdaIcon.appendChild(imagen);

        
        const celdaName = fila.insertCell();
        celdaName.textContent = pokemon.name;

        const celdaType = fila.insertCell();
        celdaType.textContent = pokemon.type.join(', ');

        const celdaAbout = fila.insertCell();
        celdaAbout.textContent = pokemon.about;
    });
  
    document.body.appendChild(tabla);

// const input = document.querySelector('input');
// const button = document.querySelector('button');

// input.addEventListener("keydown",
//     function (tecla) {
//         pokemon.forEach
//             (function (carta) {
//                 if (carta.children[1].textContent.toLowerCase().includes(input.value.toLowerCase())) {
//                     carta.classList.remove('hidden')
//                     // carta.classList.add('flex')

//                 } else {
//                     carta.classList.add('hidden')
//                 }

//             }

//             )
//     }
// )



    const audio = document.createElement('audio');
    audio.src = './pokemon_intro.mp3'; 
    audio.autoplay = true;
    document.body.appendChild(audio);
