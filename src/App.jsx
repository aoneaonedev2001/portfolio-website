import React from 'react'
import Home from './components/home';
import About from './components/about';
import Project from './components/projects';
import Skills from './components/skill';
import Experience from './components/experience'
import Contact from './components/contact'
import Navbar from './components/navbar';

const App = () => {
 
  return (
      <div className='flex flex-col  max-w-[1080px] px-[50px] sm:px-[0px] mx-auto relative '>
         {/* bg color */}
    <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem]  rounded-full blur-[10rem] sm:w-[100%] dark:bg-[#946263]"></div>
    <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[100%] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Skills/>
        <Experience/>
        <Contact/>
      </div>
  )
}

export default App