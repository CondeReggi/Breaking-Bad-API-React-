import react, { useState , useEffect } from "react";
import './index.css';
import Personaje from './components/character/personaje'
import Spinner from './components/spinner/spinner'

const personajeInicial = {
  name: '',
  img: '',
  apodo: '',
  ocupaciones: '',
  cumpleaños: ''
}

function App() {

  const [character, setPersonaje] = useState(personajeInicial);
  const [loading, setloading] = useState(false);

  const cambiarCharacter = async () => {
    setloading(true);
    
    const url = 'https://www.breakingbadapi.com/api/character/random';
    const res = await fetch(url);
    const [data] = await res.json();

    setPersonaje({
      name: data.name,
      img: data.img,
      apodo: data.nickname,
      ocupaciones: data.occupation,
      cumpleaños: data.birthday
    })

    setloading(false);
  }

  useEffect( () => {
    cambiarCharacter();
  }, [])

 

  return (
    <div className="App">
      <img className="imagen_inicio" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo" />
      <button onClick={() => {cambiarCharacter()}}>Obtener otro</button>

      <div className="contenedor">
        { (loading) ? <Spinner/> : <Personaje personaje={character}/> }
      </div>
    </div>
  );
}

export default App;
