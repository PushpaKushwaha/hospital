import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './component/common/Header'
import Home from './component/Home'
import About from './component/About'
import Department from './component/Department'
import Team from './component/Team'
import News from './component/News'
import Contact from './component/Contact'
import Footer from './component/common/Footer'
import Services from './component/Services'


function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/department' element={<Department/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes> 
     <Footer/>
    </>
  )
}

export default App
