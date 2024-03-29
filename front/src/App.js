/* eslint-disable */
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// Pages
import Main from './page/main'
import List from './page/list'
import Upload from './page/upload'
import Edit from './page/edit'
// custom hooks
import useGetUserData from '../src/hooks/common/useGetUserData'


function App() {  

  const {  } = useGetUserData()
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main/> } />
        <Route path='/list' element={ <List/> } />
        <Route path='/upload' element={ <Upload/> } />
        <Route path='/edit/:id' element={ <Edit/> } />
      </Routes>
    </div>
  );
}

export default App;
