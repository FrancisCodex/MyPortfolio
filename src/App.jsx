import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div>
        <div className="nav">
          <Navbar />
        </div>

        <div className='hero min-h-screen'>
          <Hero />
        </div>

        <div className='hero min-h-screen'>
          <h1>Resume</h1>
        </div>

        <div className='hero min-h-screen'>
          <h1>About Me</h1>
        </div>

        <div className='hero min-h-screen'>
          <h1>Projects</h1>
        </div>

        
        <Footer />
      </div>
    </>
  )
}

export default App
