import { useState } from 'react'
import './App.css'
import Profile from '../src/components/Profile'
import Products from '../src/components/Products'
import Button from '../src/components/Button'

function App() {
  const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
  
  return (
    <>
      <h1>React To Do</h1>
      <Profile/>
      <Products/>
      <Button count={count} onclick={handleClick} />
      <Button count={count} onclick={handleClick}/>
    </>
  )
}


export default App
