import React from 'react'
import arrow from '../../assets/curlyarrow.svg'
import './hero.css'
import Resume from '../../assets/files/Altesing_Resume.pdf'
export default function Hero() {
  return (
      <div>
        <div className="">
        <div className="hero-content text-center">
            <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Hello, I'm Francis;</h1>
            <p className="py-6 text-md font-semibold">I'm a Full Stack Developer from the Philippines</p>
                <div className="py-6 flex justify-center">
                    <a href="https://github.com/FrancisCodex" className='btn btn-ghost flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                            <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/Fr4nz2k" className='btn btn-ghost flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                            {/* Twitter SVG icon */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>

                    </a>
                    <a href="https://linkedin.com/in/francisaltesing" className='btn btn-ghost flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 16 16" fill="none">
                            <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                        </svg>
                          </a>
                        <a href="https://www.facebook.com/francisaltesing72/" className='btn btn-ghost flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>

                        </a>
                </div>
            <div className="py-6">
            <img src={arrow} alt="Arrow" className='curly-arrow ml-20' width="50" height="50"/>
            <a href={Resume} className="btn btn-primary" download="Resume_Altesing.pdf">My Resume</a>
            </div>  
            </div>
        </div>
        </div>
    </div>
  )
}
