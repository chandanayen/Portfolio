import React from 'react'
import FooterPage from './FooterPage'

function ContactPage() {
  return (
    <div>
     
    <div className=' text-center my-28 '>
    <p className='text-blue-800 m-3'>Email:chandanay574@gmail.com</p>
    <a className='text-blue-800 m-3' href='https://github.com/chandanayen'>GitHub:'https://github.com/chandanayen'</a>
    <p className='text-blue-800 m-3'><a href='https://www.linkedin.com/in/chandanayen/'>LinkedIn:'https://www.linkedin.com/in/chandanayen/'</a></p>
    <a  className='text-blue-800 m-3' href='https://vercel.com/new/chandana-yens-projects'>Vercel:'https://vercel.com/new/chandana-yens-projects'</a> 
    </div>

    <footer className=''>
  <FooterPage/>
</footer>
    </div>
  )
}

export default ContactPage