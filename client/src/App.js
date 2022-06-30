import React from "react";
import { Route,  Routes } from "react-router-dom";
import Home from '../src/controller/Home'
import NoPage from '../src/controller/NoPage'
import Nav from '../src/controller/Nav'
import Landing from '../src/controller/Landing'
import Create from '../src/controller/Create'
function App() {
  return (
    <>
    <Nav/>
    <Routes>
    
     <Route path="/" element={<Landing />}></Route>
     <Route path="/home" element={<Home />}></Route>
     <Route path="/create" element={<Create />}></Route>
     <Route path="*" element={<NoPage />} ></Route>
       
    </Routes>
    </> 
  )
}

export default App;
