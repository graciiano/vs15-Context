'use client'
import { useFavorites } from "@/context/favoritesContext"


interface CharacterCardProps {
  character: {
    id: number
    name: string
    image: string
    species: string
  }
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(character.id)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow mb-10">
      <img 
        src={character.image} 
        alt={character.name}
        className="w-full h-48 object-cover border-b-4 border-primary"
      />
      <div className="p-4">
        <h3 className=" text-gray-600 text-xl font-bold text-dark mb-2">{character.name}</h3>
        <p className="text-gray-600 text-sm mb-4">Espécie: {character.species}</p>
        <button 
          onClick={() => toggleFavorite(character.id)}
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            isFavorite 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isFavorite ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  )
}

export default CharacterCard