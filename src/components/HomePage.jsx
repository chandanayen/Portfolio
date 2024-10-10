import React from "react";
import FooterPage from "./FooterPage";


function HomePage() {
  return (
    
    <div >
      <div className="flex flex-col items-center">
      
        <div className="my-10 w-full px-5 ">
          <h1 className="font-bold text-4xl text-center text-blue-800 ">
            CHANDANA
          </h1>
          <h3 className="font-bold text-xl m-2 text-center text-blue-800">
            Frontend Developer
          </h3>
          <p className="text-center text-base text-blue-800">
            I build responsive web application with React and Tailwind CSS
          </p>
        </div>
        <div className="flex flex-col ">
          <p className=" w-full text-blue-800 mx-5">
            I completed web development internship at Internshala, where I
            gained hands-on experience in designing and implementing
            user-friendly websites, optimize performance, and utilizing various
            technologies such as HTML, CSS, and JavaScript,React.js."
          </p>
        </div>
      </div>
      <footer className=" my-10">
        <FooterPage />
      </footer>
    </div>
  );
}

export default HomePage;
