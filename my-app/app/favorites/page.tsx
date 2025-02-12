"use client";

import { useEffect, useState } from "react";
import { useFavorites } from "@/context/favoritesContext";
import Navbar from "../components/NavBar";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      try {
        const characters = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(
              `https://rickandmortyapi.com/api/character/${id}`
            );
            return response.json();
          })
        );
        setFavoriteCharacters(characters);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (favorites.length > 0) {
      fetchFavoriteCharacters();
    } else {
      setFavoriteCharacters([]);
    }
  }, [favorites]);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Personagens favoritos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteCharacters.length === 0 ? (
            <p className="text-gray-600 text-center col-span-full">
              {favorites.length === 0
                ? "Nenhum personagem favorito adicionado"
                : "Carregando favoritos..."}
            </p>
          ) : (
            favoriteCharacters.map((character) => (
              <div
                key={character.id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {character.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {character.species}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default FavoritesPage;
