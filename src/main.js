import { setCards, filterName, sortData, pokemonsRadio, setSelect,filterCategory} from './data.js';
//import {filterData} from './data.js';
import data from './data/pokemon/pokemon.js';
//console.log(example, data);

const pokemons = data.pokemon;
let selectFilter = null;
let radio=null;
let accordinCategory=null;

const pokemonCard = (pokemon) => {
    const component = `
    <div class="card" id="card">
    <input class="idPokemon" id="${pokemon.num}" type="hidden" value="${pokemon.num}">
      <h3 class="styleh3" id=${pokemon.num}>N.°: ${pokemon.num}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong class="strongStyle">${pokemon.name}</strong></h3>
      <img class="imgpokemon" src="${pokemon.img}" alt="${pokemon.name}">
      <h3 class="styleh3">Tipo: ${pokemon.type}</h3>
    </div>`
    return component;
}

window.addEventListener('DOMContentLoaded', () => {
    const html = setCards(pokemons, pokemonCard);
    //const cardPokemon =document.querySelector("#cardPokemon");
    cardPokemon.innerHTML = html;
});

document.querySelector('#searchIcon').addEventListener('click', () => {
    let search = document.querySelector('#search').value;
    let accordingName = filterName(pokemons, search);
    const html = setCards(accordingName, pokemonCard);
    //let cardPokemon=document.querySelector("#cardPokemon");
    cardPokemon.innerHTML = html;
});

const functCategory = ()=>{
    let option = document.querySelector('#category').value;
    console.log('seleccionaste ' + option)
    accordinCategory=filterCategory(pokemons,option,radio);
    console.log(accordinCategory) 
    const html=setCards(accordinCategory,pokemonCard);
    //let cardPokemon=document.querySelector("#cardPokemon");
    cardPokemon.innerHTML = html;
} 

document.querySelector('#category').addEventListener('change',functCategory);

const functOrder = () => {
    let option = document.querySelector('#order').value;
    let data=null;
    if(accordinCategory!=null){
        data=accordinCategory;
        console.log(data)
    }else{
        data=pokemons;
    }
    
    switch (option) {
        case 'nameAsc':
            let nameAsc = sortData(data, 'name', 'nameAsc');
            const htmlAsc = setCards(nameAsc, pokemonCard);
            //let cardPokemon=document.querySelector("#cardPokemon");
            cardPokemon.innerHTML = htmlAsc;
            break;
        case 'nameDesc':
            let nameDesc = sortData(data, 'name', 'nameDesc');
            const htmlDesc = setCards(nameDesc, pokemonCard);
            //let cardPokemon=document.querySelector("#cardPokemon");
            cardPokemon.innerHTML = htmlDesc;
            break;
        case 'numAsc':
            let numAsc = sortData(data, 'num', 'numAsc');
            const htmlnumAsc = setCards(numAsc, pokemonCard);
            //let cardPokemon=document.querySelector("#cardPokemon");
            cardPokemon.innerHTML = htmlnumAsc;
            break;
        case 'numDesc':
            let numDesc = sortData(data, 'num', 'numDesc');
            const htmlnumDesc = setCards(numDesc, pokemonCard);
            //let cardPokemon=document.querySelector("#cardPokemon");
            cardPokemon.innerHTML = htmlnumDesc;
            break;
    }
}

document.querySelector('#order').addEventListener('change', functOrder);

let selectCategory = (filter) => {
    const component =`
    <option value="${filter}">${filter}</option>`
    return component;
};

const buildSelect=(radio)=>{
    selectFilter = pokemonsRadio(pokemons,radio);
    console.log(selectFilter);
    const html = setSelect(selectFilter, selectCategory);
    const select = document.getElementById('category');
    select.innerHTML = html;
}

document.querySelector('#type').addEventListener('click', () => {
    radio=document.querySelector('#type').value;
    buildSelect(radio);
});

document.querySelector('#weaknesses').addEventListener('click', () => {
    radio=document.querySelector('#weaknesses').value;
    buildSelect(radio);
});

document.querySelector('#resistant').addEventListener('click', () => {
    radio=document.querySelector('#resistant').value;
    buildSelect(radio);
});

window.addEventListener("load", function(event) {
    const cards = document.getElementsByClassName('card');
    let pokemonsInputs = [];
    pokemons.forEach(pokemon => {
        pokemonsInputs.push(document.getElementById(pokemon.num));  
    });
    for ( let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            let idPokemon= pokemonsInputs[i].value;
            localStorage.setItem("idPokemon", idPokemon);
            location.href ="card.html";
        });
    }
});