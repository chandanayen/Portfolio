import React from 'react'
import FooterPage from './FooterPage'

function AboutPage() {
  return (
<>

    <div>
<h1 className='font-bold text-3xl m-10 text-left'>ABOUT ME</h1>
<div className='flex'>
    <div className=' w-2/3 text-left p-4 text-blue-800'>
   <p className='p-4'>I am a B.Tech graduate with expertise in web development, skilled in HTML, CSS, JavaScript, and Tailwind CSS.</p>
   <p className='p-4'>I enjoy creating responsive websites and have experience using GitHub for version control.</p>
    <p className='p-4'>In my free time, I love reading stories and solving puzzles, which helps enhance my problem-solving skills and creativity.</p>
    </div>
    <div className='relative top-10 '>
        <h1 className='font-bold text-xl'>Skills</h1>
       <div className='text-blue-800 m-5 '>
       <ul><li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React.js</li>
        <li>Bootstrap</li>
        <li>TailwindCSS</li></ul>
       </div>
    </div>
    </div>
    </div>
    <footer className='relative top-10'>
  <FooterPage/>
</footer>
   </>
  )
}

export default AboutPage