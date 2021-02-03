import {setSingleCards, filterCard} from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemons = data.pokemon;

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
    </div>    `;
    return component
}

window.addEventListener('DOMContentLoaded', () => {
    let numero = localStorage.getItem("idPokemon");
    let accordingNum=filterCard(pokemons,numero);
    const html = setSingleCards(accordingNum, singlePokemonCard);
    singleCardPokemon.innerHTML = html;
});