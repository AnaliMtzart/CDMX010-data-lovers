import {setSingleCards, filterCard,evolutions,setEvolutions,setPreEvolutions} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemons = data.pokemon;

let numero = null;
let accordingNum=null;


const singlePokemonCard = (pokemon) => {
    const component = `
    <div id="cardsolo">
        <div id="idBox">
            <p>N.º${pokemon.num}<br>${pokemon.name}<br>Rarity: ${pokemon['pokemon-rarity']}</p>
        </div>     
        <div class="idBoxAbout">
            <p>${pokemon.about}</p>  
        </div>
        <div class="idBoxImg">
            <img src="${pokemon.img}" alt="${pokemon.name}" class="imgOne">
        </div>
        <div class="idBoxdescription">
            <p>
                height: ${pokemon.size['height']} <br>
                weight: ${pokemon.size['weight']} <br>
                Spawn-chance: ${pokemon['spawn-chance']} <br>
                type: ${pokemon.type}<br>
                egg: ${pokemon['egg']}
            </p>
        </div>
        <div class="titlebtn">
            STATS
            <a style='cursor: pointer;' id="window"
            title="" class="showbtn">Mostrar / Ocultar</a>
        </div>
        <div id="info" style="display: none;">
            <p>
                "base-attack": ${pokemon.stats['base-attack']}<br>
                "base-defense": ${pokemon.stats['base-defense']}<br>
                "base-stamina": ${pokemon.stats['base-stamina']}<br>
                "max-cp": ${pokemon.stats['max-cp']}<br>
                "max-hp": ${pokemon.stats['max-hp']}<br>
            </p>
        </div>

        <div class="titlebtn2">
            ENCOUNTER
            <a style='cursor: pointer;' id="window2"
            title="" class="showbtn2">Mostrar / Ocultar</a>
        </div>
        <div id="info2" style="display: none;">
            <p>
            "base-flee-rate": ${pokemon.encounter['base-flee-rate']}<br>
            "base-capture-rate": ${pokemon.encounter['base-capture-rate']}
            </p>
        </div> 

        <div id="divEvolutions">
            eeeee
        </div>

    </div>    `;
    return component
}

window.addEventListener('DOMContentLoaded', () => {

    numero = localStorage.getItem("idPokemon");
    accordingNum=filterCard(pokemons,numero);

    const html = setSingleCards(accordingNum, singlePokemonCard);
    singleCardPokemon.innerHTML = html;
    preEvolutions();
    nextEvolutionts();
});

let infoButton = null;
let infoButton2 = null;

window.addEventListener('DOMContentLoaded', () => {
    infoButton = () => {

        if (document.getElementById) { //se obtiene el id
            let box = document.getElementById('info'); //se define la variable "el" igual a nuestro div
            box.style.display = (box.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    infoButton2 = () => {

        if (document.getElementById) { //se obtiene el id
            let box = document.getElementById('info2'); //se define la variable "el" igual a nuestro div
            box.style.display = (box.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
    }
});

window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    //muestraOculta(contenido);/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    document.querySelector('#window').addEventListener('click', infoButton)
    document.querySelector('#window2').addEventListener('click', infoButton2)
}


const nextEvolutionts=()=>{
    let evolutionsPokemon=evolutions(accordingNum,numero);
    //console.log(evolutionsPokemon);
    if(evolutionsPokemon===0){
        console.log("no hay evoluciones");
    }else{
        const htmlEvolutions= setEvolutions(evolutionsPokemon, buildEvolution);
        idEvolution.innerHTML = htmlEvolutions;
        
        //buildEvolution(evolutionsPokemon);
    }
}

const buildEvolution = (evolution) => {
    let component = `
    <div class="evolutions">
        <p>Next Evolution:<br>
        N.º${evolution.num}<br>
        Name:${evolution.name}<br>
        candy-cost: ${evolution['candy-cost']}<br>
        </p>
    </div>     
        `;
     if(evolution["next-evolution"]){
        let others=evolution["next-evolution"];
        others.forEach(other=>{
            component += `
            <div class="evolutions">
                <p>Next Evolution:<br>
                N.º${other.num}<br>
                Name:${other.name}<br>
                candy-cost: ${other['candy-cost']}<br>
                </p>
            </div>     
        `;
        }); 
    } 
    return component
}

const preEvolutions=()=>{
    let evolutions=null;
    pokemons.forEach(pokemon=>{
        if(pokemon['num']===numero){
        if(pokemon.evolution["prev-evolution"]){
            evolutions = pokemon.evolution["prev-evolution"];
            const htmlEvolutions= setPreEvolutions(evolutions, buildPreEvolution);
            idEvolution.innerHTML = htmlEvolutions;
        }else{
            evolutions = 0;
        }
        }
    });  
}

const buildPreEvolution = (evolution) => {
    let component = `
    <div class="evolutions">
        <p>Previous Evolution:<br>
        N.º${evolution.num}<br>
        Name:${evolution.name}<br>
        candy-cost: ${evolution['candy-cost']}<br>
        </p>
    </div>     
        `;
     if(evolution["prev-evolution"]){
        let others=evolution["prev-evolution"];
        others.forEach(other=>{
            console.log(other.num);
            component += `
            <div class="evolutions">
                <p>Previous Evolution:<br>
                N.º${other.num}<br>
                Name:${other.name}<br>
                candy-cost: ${other['candy-cost']}<br>
                </p>
            </div>     
        `;
        }); 
    } 
    return component
}
