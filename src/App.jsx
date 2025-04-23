import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import ParallaxSlider from './components/ParallaxSlider.jsx' 
import slideData from './data/slides.json' // Assuming you have a slides.json file in the same directory


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />  
    <ParallaxSlider slides={slideData} />
    </>
  )
}

export default App
