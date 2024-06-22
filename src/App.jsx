import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Aboutme from './components/about/aboutme'
import { Projects2 } from './components/projects/projects2'
import Projects3 from './components/projects/projects3'

function App() {

  return (
    <>
      <div>
        <div className="nav">
          <Navbar />
        </div>

        <div className='hero min-h-screen max-h-screen' id='hero'>
          <Hero />
        </div>

        <section className='flex flex-col justify-center items-center w-full'  id='about'>
          <div className=''>
            {/* <About /> */}
            <Aboutme />
          </div>
        </section>
        
        <section className='flex flex-col' id='projects'>
        <div className=''>
          {/* <Projects /> */}
          {/* <Projects2 /> */}
          <Projects3 />
          </div>
        </section>
        
        <section className='flex flex-col' id='contact'>
        <div className=''>
          <Contact />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App