// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Prices from "./pages/Prices"
import Signup from "./pages/Signup"
import SignupForm2 from "./pages/SignupForm2"
import SF3 from "./pages/SF3"
import YourResults from "./pages/YourResults"


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/prices"} element={<Prices/>}></Route>
        <Route path={"/signup"} element={<Signup/>}></Route>
        <Route path={"/signup2"} element={<SignupForm2/>}></Route>
        <Route path={"/sf3"} element={<SF3/>}></Route>
        <Route path={"/yourresults"} element={<YourResults/>}></Route>
      </Routes>

    </>
  )
}

export default App
