import { useState } from 'react'
import { Provider } from 'react-redux'
import Router from './router'
import './App.css'

function App(props:any) {
  // console.log(props);
  // console.log(import.meta.env.VITE_API_URL);
  return (
    <Router></Router>
  )
}

export default App
