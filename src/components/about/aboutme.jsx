import React from 'react'
import { skills } from './skills'
import './about.css'

export default function Aboutme() {

      
  return (
      <>
        <div className="about-container flex-col lg:flex-row">
        <div>
            <div className='font-bold text-3xl lg:text-6xl pb-5 lg:pb-14'>
            <h1>about.</h1>
                  </div>
            <div className='w-full lg:hidden'>
                <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/343396905_230284759653053_5545448212887847878_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPeKFoz3iS94in9rw1Zv31GC48u2MvzRUYLjy7Yy_NFXYxX1bg_BwD-kRu8POZOTWTqwvFlenk7eSRA1rJkhDi&_nc_ohc=UXLXHrrXJlgQ7kNvgHuftGR&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYC6y0i-zUaeXZLWSmJ-tQDuSR9tkUrFqTxftt8AdBCgkw&oe=6675A263" className="w-[250px] lg:w-[300px] mx-auto my-10 p-0 rounded-md"/>
            </div>
            <p className='text-md text-justify'>
            I am a dynamic and a motivated junior developer driven by a fervent
            passion for programming. My journey into the realm of technology
            commenced with an insatiable curiosity and a profound desire to make a
            meaningful impact. The world of coding captivates me, and I am dedicated
            to continually refining my skills. I find inspiration in tackling complex
            problems, crafting elegant code, and collaborating with fellow tech
            enthusiasts. With an unwavering commitment to innovation, I am
            enthusiastic about pushing the boundaries of what's possible in
            the digital landscape.
            </p>

            <h2 className='font-bold text-2xl mt-4'>My Skills: </h2>
            {/* Skills Here */}
            <div className="skills-grid grid grid-cols-2 md:grid-cols-7 md:max-w-5xl gap-4 mt-4 max-w-sm">
            {skills.map(skill => (
                <div key={skill.id} className="transition ease-in-out delay-150 duration-300 hover:scale-125 flex flex-row justify-center items-center text-center p-2 m-1"> {/* Changed flex-row to flex-col for vertical alignment */}
                <img src={skill.image} alt={skill.name} className="w-7 object-cover mr-2" /> {/* Image added here */}
                {skill.name}
                </div>
            ))}
            </div>
        </div>
        <div className='w-full hidden lg:block'>
            <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/343396905_230284759653053_5545448212887847878_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPeKFoz3iS94in9rw1Zv31GC48u2MvzRUYLjy7Yy_NFXYxX1bg_BwD-kRu8POZOTWTqwvFlenk7eSRA1rJkhDi&_nc_ohc=UXLXHrrXJlgQ7kNvgHuftGR&_nc_ht=scontent.fdvo2-2.fna&oh=00_AYC6y0i-zUaeXZLWSmJ-tQDuSR9tkUrFqTxftt8AdBCgkw&oe=6675A263" className="w-[250px] lg:w-[300px] mx-auto my-10 p-0 rounded-md"/>
        </div>
        </div>
      </>
  );
}
