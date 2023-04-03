import { useState } from 'react'

import './App.css'
import Navber from './components/Navber/Navber';
import PriceList from './components/PriceList/PriceList';
import Deshboard from './components/Deshboard/Deshboard';
import PhoneBar from './components/PhoneBar/PhoneBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navber></Navber>
      
      <h1 className='text-7xl text-purple-600'>hello from tailwind </h1>
     <PriceList></PriceList>
     <Deshboard></Deshboard>
     <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
