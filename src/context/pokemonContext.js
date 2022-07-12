import { useState, createContext, useContext, useEffect } from "react";
import { getPokemonRequest, getPokemonsRequest } from "../api/pokemon";

const pokemonContext = createContext();

export const usePokemon = () => {
  const context = useContext(pokemonContext);
  return context;
};

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const res = await getPokemonsRequest();
    setPokemons(res.data.results);
  };

  const getPokemon = async (id) => {
    const res = await getPokemonRequest(id);
    return res.data;
  };

  return (
    <pokemonContext.Provider value={{ pokemons, getPokemon }}>
      {children}
    </pokemonContext.Provider>
  );
};
