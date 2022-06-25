import './App.css'
import Navbar from './components/Navbar/Navbar'
import AddCharacters from './components/AddCharacters/AddCharacters'
import CharacterList from './components/CharactersList/Characterslist'
import { CharacterProvider } from './components/CharacterContext/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <div className="App">
        <Navbar />
        <AddCharacters />
        <CharacterList />
      </div>
    </CharacterProvider>
  )
}

export default App;
