// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Prices from "./pages/Prices"
import Signup from "./pages/Signup"
import SignupForm2 from "./pages/SignupForm2"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/prices"} element={<Prices/>}></Route>
        <Route path={"/signup"} element={<Signup/>}></Route>
        <Route path={"/signup2"} element={<SignupForm2/>}></Route>
      </Routes>

    </>
  )
}

export default App
