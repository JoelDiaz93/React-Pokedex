import React from "react";
import { PokemonCard } from "../components/PokemonCard";
import { VscEmptyWindow } from "react-icons/vsc";
import { usePokemon } from "../context/pokemonContext";

export function HomePage() {
  const { pokemons } = usePokemon();

  const renderPokemon = () => {
    if (pokemons.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />
          <h1 className="text-white text-2xl">There are no pokemons</h1>
        </div>
      );

    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    );
  };

  return (
    <main>
      <header>
        <h1>Pokemons {pokemons.length}</h1>
      </header>
      {renderPokemon()}
    </main>
  );
}
