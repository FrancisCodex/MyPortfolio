import React from 'react'
import Boardroom from '../../assets/Boardroom.png'
import Boardroom2 from '../../assets/Boardroom2.png'
import Boardroom3 from '../../assets/Boardroom3.png'
import Boardroom4 from '../../assets/Boardroom4.png'
import CosmosCafe from '../../assets/CosmosCafe.png'
import CosmosCafe2 from '../../assets/CosmosCafe2.png'
import CosmosCafe3 from '../../assets/CosmosCafe3.png'
import CosmosCafe4 from '../../assets/CosmosCafe4.png'
import IWatchFilms from '../../assets/IWatchFilms.png'
import StudentManager from '../../assets/StudentManager.png'
import BudgetFlow from '../../assets/BudgetFlow.png'
import BudgetFlow2 from '../../assets/BudgetFlow2.png'
import BudgetFlow3 from '../../assets/BudgetFlow3.png'




export default function Projects3() {
  return (
    <div>
        <section>
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-4">
            <div className='font-bold text-3xl lg:text-6xl pb-5 lg:pb-14'>
            <h1>projects.</h1>
                  </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col cursor-pointer" onClick={()=>document.getElementById('my_modal_1').showModal()} >
                    <a href className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img src={Boardroom} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:opacity-25 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-b bg-[#171212] opacity-50" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Boardroom: Apartment Finder App</h3>
                    <p className="text-md text-white z-10 opacity-0 group-hover:opacity-100 text-justify text-sm">BoardRoom is an apartment finder that allows users to search for apartments and houses for rent.</p>
                    </a>
                    {/* Modal 1*/}
                    <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-2xl">BoardRoom: Apartment Finder</h3>
                        <p className='text-sm font-medium'>Responsibility: Full Stack Development</p>
                        <p className='pb-5 text-sm font-light'>( Frontend: NextJS | Backend: NodeJS | Database: PostgreSQL )</p>
                        {/* Source Codes */}
                        <div className='py-2'>
                            <h2>Source Code: </h2>
                            <a href='https://github.com/FrancisCodex/BR_Client' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Frontend</p>
                            </a>
                            <a href='https://github.com/FrancisCodex/BR_Server' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Backend</p>
                            </a>
                            <div className='tooltip tooltip-error' data-tip='Not Available'>
                                <a href='/' className='btn btn-disabled btn-ghost'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10v0a15.3 15.3 0 0 1-4 10v0a15.3 15.3 0 0 1-4-10v0a15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <p className='hidden md:block'>Live</p>
                                </a>
                            </div>
                            

                        </div>
                        {/* Carousel */}

                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={Boardroom} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={Boardroom2} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={Boardroom3} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src={Boardroom4} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                        {/* End of Carousel */}
                        <p className="py-4">BoardRoom is an apartment finder that allows users to search for apartments and houses for rent. The application is built using ReactJS, NodeJS, and PostgreSQL. Users can create an account, log in, and search for apartments and houses for rent. The application also allows users to filter search results by price, location, and amenities. The Project is currently in development as my Thesis Project and Renamed as NestSeeker</p>
                    </div>
                    </dialog>
                    {/* end of modal */}
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-3">
                    <a href className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <img src={IWatchFilms} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:opacity-25 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-b bg-[#171212] opacity-50" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">IWatchFilms: Films and TvShow Reviews</h3>
                    <p className="text-md text-white z-10 opacity-0 group-hover:opacity-100 text-justify text-sm">IWatchFilms is a web application that allows users to rate and review films and TV shows.</p>
                    </a>
                    {/* Modal 2*/}
                    <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-2xl">IWatchFilms: Films and TvShow Reviews</h3>
                        <p className='text-sm font-medium'>Responsibility: Full Stack Development</p>
                        <p className='pb-5 text-sm font-light'>( Frontend: ReactJS | CMS: Strapi )</p>
                        {/* Source Codes */}
                        <div className='py-2 md:space-x-2'>
                            <h2>Source Code: </h2>
                            <a href='https://github.com/FrancisCodex/nextAuthSystem' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Client</p>
                            </a>
                            <div className='tooltip tooltip-error' data-tip='Not Available'>
                                <a href='/' className='btn btn-disabled btn-ghost'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10v0a15.3 15.3 0 0 1-4 10v0a15.3 15.3 0 0 1-4-10v0a15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <p className='hidden md:block'>Live</p>
                                </a>
                            </div>
                        </div>
                        
                        <img src={IWatchFilms} alt="Student Management System" />
                        <p className="py-4">IWatchFilms is a web application that allows users to rate and review films and TV shows. The application is built using ReactJS and Strapi CMS. Users can create an account, log in, and rate and review films and TV shows. The application also allows users to search for films and TV shows by title, genre, and rating. This application was my first website project that I created when I began to learn web development utilizing a Headless Open Source CMS called Strapi and using open source api like MovieDatabase to get the latest movies and tv shows.</p>
                    </div>
                    </dialog>
                    {/* end of modal */}
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
                    <a href className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                        <img src={StudentManager} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:opacity-25 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b bg-[#171212] opacity-50" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Student Management System</h3>
                        <p className="text-md text-white z-10 opacity-0 group-hover:opacity-100 text-justify text-sm">A student management system that allows teachers to view students enrolled in the course and store the data in a database.</p>
                    </a>
                    {/* Modal 3*/}
                    <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-2xl">Student Management System</h3>
                        <p className='pb-5 text-sm font-light'>( Language: Java | Database: MySQL )</p>
                        <img src={StudentManager} alt="Student Management System" />
                        <p className="py-4">Using Java and MySQL, I developed a student Management system that allows teachers to view students enrolled in the course and store the data in a database. The system also allows students to view their attendance records.</p>
                    </div>
                    </dialog>
                    {/* end of modal */}
                    <a href className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                        <img src={BudgetFlow} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:opacity-25 transition-transform duration-500 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-b bg-[#171212] opacity-50" />
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">BudgetFlow: Expense Tracker</h3>
                        <p className="text-md text-white z-10 opacity-0 group-hover:opacity-100 text-justify text-sm">BudgetFlow is an expense tracker that allows users to track their expenses and create budgets.</p>
                    </a>
                    {/* Modal 4*/}
                    <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-2xl">BudgetFlow: Expense Tracker</h3>
                        <p className='text-sm font-medium'>Responsibility: Backend Development</p>
                        <p className='pb-5 text-sm font-light'>( Frontend: ReactJS | Backend: Laravel | Database: PostgreSQL)</p>
                        {/* Source Codes */}
                        <div className='py-2 md:space-x-2'>
                            <h2>Source Code: </h2>
                            <a href='https://github.com/FrancisCodex/ExpenseTracker' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Backend</p>
                            </a>
                            <div className='tooltip tooltip-error' data-tip='Not Available'>
                                <a href='/' className='btn btn-disabled btn-ghost'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10v0a15.3 15.3 0 0 1-4 10v0a15.3 15.3 0 0 1-4-10v0a15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <p className='hidden md:block'>Live</p>
                                </a>
                            </div>
                        </div>

                        {/* Carousel */}

                        <div className="carousel w-full">
                            <div id="slide4-1" className="carousel-item relative w-full">
                                <img src={BudgetFlow} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4-3" className="btn btn-circle">❮</a> 
                                <a href="#slide4-2" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide4-2" className="carousel-item relative w-full">
                                <img src={BudgetFlow2} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4-1" className="btn btn-circle">❮</a> 
                                <a href="#slide4-3" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide4-3" className="carousel-item relative w-full">
                                <img src={BudgetFlow3} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4-2" className="btn btn-circle">❮</a> 
                                <a href="#slide4-1" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                        </div>

                        {/* End of Carousel */}
                        <p className="py-4">BudgetFlow is an expense tracker that allows users to track their expenses and create budgets. The application is built using ReactJS, Laravel, and PostgreSQL. Users can create an account, log in, and track their expenses. The application also allows users to create budgets and set spending limits. This was a group school project and my tasks were handling the Backend of the application using Laravel and Database management using PostgreSQL.</p>
                    </div>
                    </dialog>
                    {/* end of modal */}
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-5 h-auto md:h-full flex flex-col">
                <a href className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                    <img
                    src={CosmosCafe}
                    alt="CosmosCafe: Online Coffee Shop"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:opacity-25 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b bg-[#171212] opacity-50" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">CosmosCafe: Online Coffee Shop</h3>
                    <p className="text-md text-white z-10 opacity-0 group-hover:opacity-100 text-justify text-sm">CosmosCafe is an online coffee shop that allows users to order coffee and have it delivered to their door.</p>
                </a>
                {/* Modal 5*/}
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-2xl">CosmosCafe: Online Coffee Shop</h3>
                        <p className='text-sm font-medium'>Responsibility: Backend Development</p>
                        <p className='pb-5 text-sm font-light'>( Frontend: NextJS | Backend: NodeJS | Database: PostgreSQL)</p>
                        {/* Source Codes */}
                        <div className='py-2 md:space-x-2'>
                            <h2>Source Code: </h2>
                            <a href='https://github.com/FrancisCodex/Cosmos_ClientSide' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Frontend</p>
                            </a>
                            <a href='https://github.com/FrancisCodex/Cosmos_ServerSide' className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192" fill="none" stroke='currentColor'>
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
                            </svg>
                            <p>Backend</p>
                            </a>
                            <div className='tooltip tooltip-error' data-tip='Not Available'>
                                <a href='/' className='btn btn-disabled btn-ghost'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10v0a15.3 15.3 0 0 1-4 10v0a15.3 15.3 0 0 1-4-10v0a15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <p className='hidden md:block'>Live</p>
                                </a>
                            </div>
                        </div>
                        {/* Carousel */}

                        <div className="carousel w-full">
                            <div id="slide5-1" className="carousel-item relative w-full">
                                <img src={CosmosCafe} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5-4" className="btn btn-circle">❮</a> 
                                <a href="#slide5-2" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide5-2" className="carousel-item relative w-full">
                                <img src={CosmosCafe2} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5-1" className="btn btn-circle">❮</a> 
                                <a href="#slide5-3" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide5-3" className="carousel-item relative w-full">
                                <img src={CosmosCafe3} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5-2" className="btn btn-circle">❮</a> 
                                <a href="#slide5-4" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide5-4" className="carousel-item relative w-full">
                                <img src={CosmosCafe4} className="w-full" />
                                <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5-3" className="btn btn-circle">❮</a> 
                                <a href="#slide5-1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                        {/* End of Carousel */}
                        <p className="py-4">CosmosCafe is an online coffee shop that allows users to order coffee and have it delivered to their door. The application is built using NextJS, NodeJS, and PostgreSQL. Users can create an account, log in, and order coffee. The application also allows users to search for coffee by type, flavor, and price. This project was made as a requirement for IT Cybersecurity Project, I was responsible for handling the Backend logics and Database management.</p>
                    </div>
                    </dialog>
                    {/* end of modal */}
                </div>

                </div>
            </div>
        </section>
    </div>
  )
}
