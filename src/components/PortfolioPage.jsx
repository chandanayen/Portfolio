import React from "react";
import FooterPage from "./FooterPage";

function PortfolioPage() {
  return (
    <div>
       
      <h1 className="m-10 text-left font-bold text-3xl">PROJECTS</h1>
      <div className="flex  flex-col md:flex-row m-2 items-center">
        <img
          className="w-40 h-20 rounded-xl"
          src="src/assets/Task1.png"
          alt="Todoapp"
        />
        <div className=" mx-4 border border-indigo-200  md:w-2/3 relative left-10">
          <div className="flex items-center"><h2 className="text-left m-2 font-bold">Bulid a Todo Application</h2>
          <a href="https://todo-app-beta-sage.vercel.app/"><img className='w-5 h-4' src="https://img.icons8.com/?size=50&id=43689&format=png"/></a>
          </div>
          <p className="text-left text-blue-800 m-2">
            
            Todo application helps users manage tasks efficiently.With a
            responsive design , it allows users to easily add, edit, and delete
            tasks.
            <button className="bg-slate-100 p-1 ml-2 rounded-xl">
              React.js
            </button>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center m-2">
        <img
          className="w-40 h-20 rounded-xl"
          src="src/assets/randomQuotes.png"
          alt="randomquote"
        />
        <div className="mx-4 border border-indigo-200  md:w-2/3 relative left-10">
         <div className="flex items-center">
            <h2 className="text-left m-2 font-bold">
            Bulid Movie pp using API keys
          </h2>
          <a href="https://movie-app-lemon-ten.vercel.app/"><img className='w-5 h-4' src="https://img.icons8.com/?size=50&id=43689&format=png"/></a>
          </div> 
          <p className="text-left text-blue-800 m-2">
            {" "}To create a movie app using API keys, start by selecting a reliable movie database API, such as TMDb or OMDb
            fetching data using HTTP requests, like Axios, to access movie information through the API{" "}
            <button className="bg-slate-100 p-1 rounded-xl">React.js</button>
            <button className="bg-slate-100 p-1 rounded-xl">Tailwindcss</button>
          </p>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row items-center m-2 ">
        <img
          className="w-40 h-20 rounded-xl"
          src="src/assets/DND_Kit.png"
          alt="dndkit"
        />
        <div className="mx-4 border border-indigo-200 md:w-2/3 relative left-10">
          <div className="flex items-center"><h2 className="text-left m-2 font-bold">Bulid a DND-KIt</h2>
          <a href="https://dnd-kit-two.vercel.app/"><img className='w-5 h-4' src="https://img.icons8.com/?size=50&id=43689&format=png"/></a></div>
          <p className="text-left text-blue-800 m-2">
            Developed a dynamic and interactive drag-and-drop interface using
            the dnd-kit library, to manage and organize items,ability to
            implement complex UI features and ensure smooth, responsive
            interactions.
            <button className="bg-slate-100 p-1 rounded-xl">Next.js</button>{' '}
            <button className="bg-slate-100 p-1 rounded-xl">
              Tailwindcss.js
            </button>
          </p>
        </div>
      </div>
       <footer>
        <FooterPage/>
       </footer>
    </div>
  );
}

export default PortfolioPage;
