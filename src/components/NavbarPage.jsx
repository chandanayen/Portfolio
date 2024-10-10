import React, { useState } from 'react'

function NavbarPage() {

    
  return (
    <>
   <div className='flex justify-between items-center '>
    <img src='https://img.icons8.com/?size=60&id=bAsyoJF9h4zr&format=png' alt='portfolioicon' />
    <div className=' flex flex-col md:flex-row gap-5  font-bold text-xl cursor-pointer  '>
        
        <a href='/'>Home</a>
        <a href='/AboutPage'>About</a>
        <a href='/PortfolioPage'>Portfolio</a>
        <a href='/ContactPage'>Contact</a>
    </div>
    </div>
    </>
  )
}

export default NavbarPage