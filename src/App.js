import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar'


import { getPokemonData, getPokemons } from './apis/api';
import { FavoriteProvider } from './contexts/favoritesContext';


const { useState, useEffect } = React;


export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        const data = await getPokemons(27, 27 * page);

        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });

        const results = await Promise.all(promises);

        setPokemons(results);
        setLoading(false);
        setTotal(Math.ceil(data.count / 27))
      } catch (err) {

      }
    }
    
    fetchPokemons();
  }, [page, setPokemons, setLoading, setTotal]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div>
        <Navbar />
        <div className='App'>
          <Searchbar />

          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        </div>
      </div>
    </FavoriteProvider>
  );
}