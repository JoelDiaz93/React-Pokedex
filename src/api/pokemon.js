import axios from "axios";

export const getPokemonsRequest = async () =>
  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=12");
export const getPokemonRequest = async (id) =>
  await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
