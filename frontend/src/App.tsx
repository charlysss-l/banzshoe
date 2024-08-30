import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  useEffect( () =>{
    axios.get('http://localhost:5555/shoes').then(
      response =>console.log(response)
    )
  }, [])

  return (
    <div className="app">

      <h1>simple CORS policy to node</h1>
    </div>
  )
}

export default App
