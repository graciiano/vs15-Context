import CharacterCard from './components/CharacterCard';
import Navbar from './components/NavBar';

interface Character {
  id: number
  name: string
  image: string
  species: string
}

const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  return data.results.slice(0, 8)
}

export default async function Home() {
  const characters = await getCharacters()

  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      <h1 className="text-black text-4xl font-bold text-center my-8 text-dark">
        Personagens de Rick and Morty
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </main>
  )
}