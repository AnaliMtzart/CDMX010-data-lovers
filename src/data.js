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
  //console.log(accordinCategory)
  return accordinCategory;
}

export const sortData = (pokemons, sortBy, sortOrder) => {
  //pokemons.sort((a, b) => a.sortBy - b.sortBy);
  if (sortBy === 'name' && sortOrder === 'nameAsc') {
    const orderAsc = pokemons.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    //console.log(orderAsc);
    return orderAsc;
  } else if (sortBy === 'name' && sortOrder === 'nameDesc') {
    const orderDesc = pokemons.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    //console.log(orderDesc);
    return orderDesc;
    } else if(sortBy === 'num' && sortOrder === 'numDesc'){
      const numDesc=pokemons.sort((a, b) => b.num - a.num);
      //console.log(numDesc);
      return numDesc;
    }else{
      const numAsc=pokemons.sort((a, b) => a.num - b.num);
      //console.log(numAsc);
      return numAsc;
    }

}

/* export const pokemonsType=(pokemons)=>{
  let filtro='type';
  let types=[];
  pokemons.filter(pokemon => {
    for (const i in pokemon.type) {
      types.push(pokemon.type[i]);
    }
  });
  const dataArr = new Set(types);
  //return dataArr;
  console.log(dataArr);
} */
export const pokemonsRadio=(pokemons,radio)=>{
  //console.log('hola');
  //let radio='type';
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
/* export const types = (pokemons) =>{
  let result = pokemons.map (pokemon => `${pokemon.type}`);
  console.log(result);
} */

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
