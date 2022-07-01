import { useState, createContext, useContext, useEffect } from "react";
import { getPokemonRequest } from "../api/pokemon";

const pokemonContext = createContext();

export const usePokemon = () => {
  const context = useContext(pokemonContext);
  return context;
};

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async (id) => {
    const res = await getPokemonRequest(id);
    console.log(res);
  };

  return (
    <pokemonContext.Provider value={{ getPokemon }}>
      {children}
    </pokemonContext.Provider>
  );
};
