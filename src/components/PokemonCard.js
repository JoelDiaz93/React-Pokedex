import React from "react";
import { useEffect, useState } from "react";
import { usePokemon } from "../context/pokemonContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function PokemonCard({ pokemon }) {
  const { getPokemon } = usePokemon();
  const navigate = useNavigate();
  const [sprites, setSprites] = useState([]);
  const [type, setType] = useState([]);
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPokemon(pokemon.name);
      setSprites(data.sprites.front_default);
      setType(data.types[0].type.name);
      setTypes(data.types);
      if (type === "fire") {
        setColor("bg-red-600 hover:bg-red-900");
      } else if (type === "grass") {
        setColor("bg-green-500 hover:bg-green-900");
      } else if (type === "water") {
        setColor("bg-blue-600 hover:bg-blue-900");
      } else if (type === "bug") {
        setColor("bg-lime-500 hover:bg-lime-900");
      } else {
        setColor("bg-zinc-700 hover:bg-zinc-900");
      }
    })();
  }, [color]);

  const renderCard = () => {
    if (type) {
      return (
        <div
          className={
            color +
            " text-white rounded-xl shadow-md shadow-black hover:cursor-pointer"
          }
          onClick={() => navigate(`/pokemon/${pokemon.name}`)}
        >
          <div className="px-4 py-4">
            <div className="flex justify-between">
              <div className="flex-col">
                <h3 className="font-mono antialiased font-bold text-xl px-2 py-2 text-slate-50 hover:font-light hover:text-blue-600/50">
                  {pokemon.name.toUpperCase()}
                </h3>
                <div className="h-20 flex flex-col">
                {types ? (
                  types.map((t) => (
                    <h5
                      className="px-2 py-1 my-1 text-sm font-semibold text-center bg-stone-300/50 rounded-3xl"
                      key={t.type.name}
                    >
                      {t.type.name.charAt(0).toUpperCase()+t.type.name.slice(1)}
                    </h5>
                  ))
                ) : (
                  <h5>Loading</h5>
                )}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="rounded-full scale-125 hover:scale-100"
                  src={sprites}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />;
  };

  return <div>{renderCard()}</div>;
}
