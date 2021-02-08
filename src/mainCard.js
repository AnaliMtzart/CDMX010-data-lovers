import {setSingleCards, filterCard,evolutions,setEvolutions,setPreEvolutions} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemons = data.pokemon;

let numero = null;
let accordingNum=null;


const singlePokemonCard = (pokemon) => {
    const component = `
    <div id="cardsolo">
        <div id="idBox">
            <p class="IdP">N.º${pokemon.num}<br>${pokemon.name}<br>Rarity: ${pokemon['pokemon-rarity']}</p>
        </div>     
        <div class="idBoxAbout">
            <p>${pokemon.about}</p>  
        </div>
        <div class="idBoxImg">
            <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
        <div class="idBoxdescription">
            <p class="descP">
                height: ${pokemon.size['height']} <br>
                weight: ${pokemon.size['weight']} <br>
                pokemon-rarity: ${pokemon['pokemon-rarity']} <br>
                type: ${pokemon.type}
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