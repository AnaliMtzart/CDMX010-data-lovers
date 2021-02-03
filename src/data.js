export const setCards = (pokemons, pokemonCard) => {
  let html = '';
  pokemons.forEach(pokemon => {
    html += pokemonCard(pokemon);
  });
  return html;
}

export const filterName = (pokemons, name) => {
  const accordingName = pokemons.filter(pokemon => {
    if (pokemon.name === name) {
      return pokemon
    }
  });
  console.log(accordingName);
  return accordingName;
}
export const filterCategory = (pokemons, option,radio) => {
  const accordinCategory = pokemons.filter(pokemon => {
    for (const i in pokemon[radio]) {
      
      if (pokemon[radio][i] === option) {
        return pokemon;
      }
    }
  });
  return accordinCategory;
}

export const sortData = (pokemons, sortBy, sortOrder) => {
  if (sortBy === 'name' && sortOrder === 'nameAsc') {
    const orderAsc = pokemons.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return orderAsc;
  } else if (sortBy === 'name' && sortOrder === 'nameDesc') {
    const orderDesc = pokemons.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    return orderDesc;
    } else if(sortBy === 'num' && sortOrder === 'numDesc'){
      const numDesc=pokemons.sort((a, b) => b.num - a.num);
      return numDesc;
    }else{
      const numAsc=pokemons.sort((a, b) => a.num - b.num);
      return numAsc;
    }

}

export const pokemonsRadio=(pokemons,radio)=>{
  let filterRadio = pokemons.map (pokemon => pokemon[radio]); 
  let filterReduce=filterRadio.reduce((actual,siguiente)=>{ 
    return actual.concat(siguiente);
  });
  const filter = new Set(filterReduce);  
  return filter;
}

export const setSelect = (selectFilter, selectCategory) => {
  let html = '<option>Selecciona uno:</option>';
  selectFilter.forEach(filter => {
    html += selectCategory(filter);
  });
  return html;
}

export const filterCard = (pokemons, num) => {
  const accordingNum = pokemons.filter(pokemon => {
    if (pokemon.num === num) {
      return pokemon
    }
  });
  console.log(accordingNum);
  return accordingNum;
}

export const setSingleCards = (pokemons, singlePokemonCard) => {
  let html = '';
  pokemons.forEach(pokemon => {
    html += singlePokemonCard(pokemon);
  });
  return html;
}
