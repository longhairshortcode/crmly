// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Prices from "./pages/Prices"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/prices"} element={<Prices/>}></Route>
      </Routes>

    </>
  )
}

export default App
