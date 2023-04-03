import { useState } from 'react'

import './App.css'
import Navber from './components/Navber/Navber';
import PriceList from './components/PriceList/PriceList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navber></Navber>
      
      <h1 className='text-7xl text-purple-600'>hello from tailwind </h1>
     <PriceList></PriceList>
    </div>
  )
}

export default App
