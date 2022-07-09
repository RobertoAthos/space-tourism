import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Destination from './Pages/Destination/Destination'
import Home from './Pages/Home/Home'
import Crew from './Pages/Crew/Crew'
import Tech from './Pages/Technology/Tech'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Destination" element={<Destination/>}/>
        <Route path="/Crew" element={<Crew/>}/>
        <Route path="/Technology" element={<Tech/>}/>
    </Routes>
  )
}

export default Router