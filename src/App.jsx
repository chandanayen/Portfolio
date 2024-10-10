import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import PortfolioPage from './components/PortfolioPage'
import ContactPage from './components/ContactPage'
import { BrowserRouter, BrowserRouter as Link, Route, Router, Routes } from 'react-router-dom'
import NavbarPage from './components/NavbarPage'
import FooterPage from './components/FooterPage'


function App() {
 

  return (
    <div className='p-10   '  >
      
<header className='pb-2'>
  <NavbarPage/>
</header>


<BrowserRouter>
<Routes>
  <Route path='/' Component={HomePage}/>
  <Route path='/AboutPage' Component={AboutPage}/>
  <Route path='/PortfolioPage' Component={PortfolioPage} />
  <Route path='/ContactPage' Component={ContactPage}/>
</Routes>
</BrowserRouter>

    
    </div>
  )
}

export default App
