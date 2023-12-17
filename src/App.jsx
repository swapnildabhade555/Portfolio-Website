import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Contactform from './components/Contactform'
function App() {
  

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Expertise/>
      <Contactform/>
      <Footer/>
      
    </>
  )
}

export default App
