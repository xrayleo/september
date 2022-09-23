import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './index.scss'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const nav = useNavigate();
  const go = (url : string) => {
    nav(url);
  }
  
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl mb-5">Home Page</h1>
      <div>
        <Button variant="contained" onClick={()=>go('about')}>跳转到About页面</Button><br/><br/>
        <Button variant="contained" onClick={()=>go('winners')}>跳转到Winners页面</Button><br/><br/>
        <Button variant="contained" onClick={()=>go('help')}>跳转到Help页面</Button>
      </div>
    </div>
  )
}

export default App
