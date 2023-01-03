import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Articles from './components/Articles'
import Navbar from './components/Navbar'
import Help from "./components/Help"
import Home from "./components/Home"
import Error from "./components/Error"
import Singlearticle from "./components/Singlearticle"
import React, { Component } from 'react'
import Dashboard from "./components/Dashboard"
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Dashboard></Dashboard>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/article' element={<Articles/>}></Route>
        <Route path='/article/:id' element={<Singlearticle/>}></Route>
        <Route path='/help' element={<Help/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}


export default App
