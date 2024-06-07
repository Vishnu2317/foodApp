import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SampleNav from './Nav/SampleNav'
import Propsclass from './pages/Propsclass'
import Funcprops from './pages/Funprops'
import Lifecycle from './pages/Lifecycle'
import State from './pages/State'



const App3 = () => {
  return (
     <>
    
     
     <BrowserRouter>
      {/* <SampleNav /> */}
     <Routes>
        <Route path='/' element={<SampleNav/>} />
        <Route path='/Propsclass' element={<Propsclass/>} />
        <Route path='/funcprops' element={<Funcprops/>} />
        <Route path='/lifecycle' element={<Lifecycle/>} />
        <Route path='/State' element={<State/>} />
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App3