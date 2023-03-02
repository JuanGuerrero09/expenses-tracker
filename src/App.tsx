import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Buttons from './components/Buttons'
import BudgetCard from './components/BudgetCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Balance/>
      <Buttons/>
      <BudgetCard/>
    </div>
  )
}

export default App
