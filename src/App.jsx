import { useState } from 'react'
import './App.css'
import Card from './ccomponents/card';
import States from './ccomponents/States';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card/> */}
      <States />
    </>
  )
}

export default App
