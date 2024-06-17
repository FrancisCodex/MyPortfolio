import React from 'react'
import Project_cards from '../cards/project_cards'

export default function Projects() {
  return (
    <div className='hero-content max-w-4xl'>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2022</time>
            <div className="text-lg font-black">Student Attendance System</div>
            <div className='text-sm font-bold'>( Language: Java | Database: MySQL)</div>
            
            <p className='text-justify indent-8'>
              Using Java and MySQL, I developed a student attendance system that allows teachers to take attendance and store the data in a database. The system also allows students to view their attendance records.
            </p>
          </div>
          <hr/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">IWatchFilms</div>
            <div className='text-sm font-bold'>( Frontend: ReactJS | CMS: Strapi)</div>
            
            <p className='text-justify indent-8'>
              IWatchFilms is a web application that allows users to rate and review films and TV shows. The application is built using ReactJS and Strapi CMS. Users can create an account, log in, and rate and review films and TV shows. The application also allows users to search for films and TV shows by title, genre, and rating.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">CosmosCafe: Online Coffee Shop</div>
            <div className='text-sm font-bold'>( Frontend: NextJS | Backend: NodeJS | Database: PostgreSQL)</div>
            
            <p className='text-justify indent-8'>
              CosmosCafe is an online coffee shop that allows users to order coffee and have it delivered to their door. The application is built using NextJS, NodeJS, and PostgreSQL. Users can create an account, log in, and order coffee. The application also allows users to search for coffee by type, flavor, and price.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">BudgetFlow: Expense Tracker</div>
            <div className='text-sm font-bold'>( Frontend: ReactJS | Backend: Laravel | Database: PostgreSQL)</div>
            
            <p className='text-justify indent-8'>
              BudgetFlow is an expense tracker that allows users to track their expenses and create budgets. The application is built using ReactJS, Laravel, and PostgreSQL. Users can create an account, log in, and track their expenses. The application also allows users to create budgets and set spending limits.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-black">NestSeeker: An Apartment Finder</div>
            <div className='text-sm font-bold'>( Frontend: ReactJS | Backend: NodeJS | Database: PostgreSQL)</div>
            
            <p className='text-justify indent-8'>
              NestSeeker is an apartment finder that allows users to search for apartments and houses for rent. The application is built using ReactJS, NodeJS, and PostgreSQL. Users can create an account, log in, and search for apartments and houses for rent. The application also allows users to filter search results by price, location, and amenities. The Project is currently in development as my Thesis Project.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}