import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Buttons from './components/Buttons'
import BudgetList from './components/BudgetList'
import TransactionList from './components/TransactionList'


function App() {

  return (
    <div className="App flex flex-col ml-auto mr-auto max-w-screen-md">
      <Header/>
      <Balance/>
      <Buttons/>
      <TransactionList />
      <BudgetList />
    </div>
  )
}

export default App
