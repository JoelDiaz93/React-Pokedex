import React from "react";
import { PokemonProvider } from "./context/pokemonContext";
import { Routes, Route } from "react-router-dom";
import { HomePage, NotFound, Pokemon } from "./pages";

function App() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-900">
      <div className="px-11 container m-auto">
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PokemonProvider>
      </div>
    </div>
  );
}

export default App;
