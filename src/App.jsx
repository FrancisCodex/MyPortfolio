import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Aboutme from './components/about/aboutme'

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
        <div className='lg:ml-80 ml-6 font-bold text-3xl lg:text-6xl pb-5'>
            <h1>projects.</h1>
          </div>
        <div className='hero '>
          <Projects />
          </div>
        </section>

        <section className='flex flex-col' id='contact'>
        <div className='lg:ml-80 ml-6 font-bold text-3xl lg:text-6xl pb-5'>
            <h1>contact.</h1>
          </div>
        <div className='hero '>
          <Contact />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App