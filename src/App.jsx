import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Region from './components/Region'
import './App.css'

const variableRegion = "Region Metropolitana";
const variableMunicipio = "Municipio de Mecapaca";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Region titulo_Region={variableRegion} titulo_Municipio={variableMunicipio}></Region>
  )
}

export default App
