import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../context/pokemonContext";
import { TypeColor } from "../components/TypeColor";

export function Pokemon() {
  const { getPokemon } = usePokemon();
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  console.log("pokemon ", pokemon);

  const color = (type) => {
    return TypeColor(type);
  };

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getPokemon(params.id);
        setPokemon(data);
      }
    })();
  }, [params.id]);

  const render = () => {
    if (pokemon.length === 0) {
      return <h1>loading</h1>;
    } else {
      return (
        <div className="bg-white">
          <div
            className={
              "w-full relative bottom-5 rounded-t-lg " +
              color(pokemon.types[0].type.name)
            }
          >
            <img
              className="relative m-auto top-10"
              src={pokemon.sprites.other.home.front_default}
            />
          </div>
          <div className="w-full my-5 bg-slate-50">
            <h1 className="px-2 py-2 text-3xl font-semibold">
              {pokemon.name.toUpperCase()}
            </h1>
            <div className="flex flex-row justify-start">
              {pokemon.types.map((t) => (
                <h5
                  key={t.type.name}
                  className={
                    color(t.type.name) +
                    " text-slate-100 font-semibold px-4 py-1 mx-1 rounded-xl shadow-sm"
                  }
                >
                  {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                </h5>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-slate-500">
            {pokemon.stats.map((s) => (
              <div key={s.stat.name} className="flex flex-row">
                <h5>{s.stat.name}</h5>
                <h5> {s.base_stat}</h5>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full h-full rounded-xl bg-slate-500/20">
      {render()}
    </div>
  );
}
