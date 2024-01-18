import React from 'react'
import Topbar from './components/Topbar'
import { Route,BrowserRouter,Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
export const API_URL = "https://65a62c9d74cf4207b4ef648d.mockapi.io/user"
function App() {
  return <>
  <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/edit/:id' element={<Edit/>}></Route>
    <Route path='*' element={<Navigate to='/home'/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App