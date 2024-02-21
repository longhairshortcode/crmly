// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Prices from "./pages/Prices"
import Signup from "./pages/Signup"
import SignupForm2 from "./pages/SignupForm2"
import SF3 from "./pages/SF3"
import SignUpForm3 from "./Components/Signup/SignUpForm3"
import YourResults from "./pages/YourResults"
import YourResults2 from "./pages/YourResults2"
import Grid from "./pages/Grid"


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
        <Route  path={"/yourresults2"} element={<YourResults2/>}></Route> 
        <Route path={"/grid"} element={<Grid/>}></Route>
        <Route path={"/signupform3"} element={<SignUpForm3/>}></Route>
      </Routes>

    </>
  )
}

export default App
