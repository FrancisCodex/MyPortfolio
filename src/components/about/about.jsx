import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl rounded p-6 m-3">
        <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/343396905_230284759653053_5545448212887847878_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPeKFoz3iS94in9rw1Zv31GC48u2MvzRUYLjy7Yy_NFXYxX1bg_BwD-kRu8POZOTWTqwvFlenk7eSRA1rJkhDi&_nc_ohc=UXLXHrrXJlgQ7kNvgHuftGR&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYC6y0i-zUaeXZLWSmJ-tQDuSR9tkUrFqTxftt8AdBCgkw&oe=6675A263" class="rounded-full w-[220px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"/>
        <div>
        <p className="py-6">
        Hello! my name is Francis, I am a full stack developer with a passion for creating beautiful and functional websites.
        </p>
        <ul className="list-disc pl-5">
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          {/* Add more skills as needed */}
        </ul>
        <div className='space-x-5'>
          <button className="btn btn-primary">Info</button>
          <button className="btn btn-primary">Download CV</button>
        </div>
        
        </div>
    </div>
  )
}