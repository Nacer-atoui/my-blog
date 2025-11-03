import { useState } from 'react'
import reactLogo from './assets/logo_na.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenue sur mon blog</h1>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://www.coup-de-vieux.fr/wp-content/uploads/2010/09/41369276_tarabas012.jpg" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
