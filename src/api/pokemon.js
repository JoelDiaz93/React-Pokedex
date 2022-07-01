import axios from "axios";

export const getPokemonRequest = async (id) =>
  await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
