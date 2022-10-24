/* eslint-disable */
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// Pages
import Main from './page/main'
import List from './page/list'
import Detail from './page/detail'
import Upload from './page/upload'
import Login from './page/login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/list' element={ <List/> } />
        <Route path='/upload' element={ <Upload/> } />
        <Route path='/login' element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
