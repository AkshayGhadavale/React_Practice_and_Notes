import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" ></img>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </div>
        
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                           <NavLink to="/" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-400":"text-gray-400"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-white
                                        lg:p-0`
                                    } aria-current="page">Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/Company" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-400":"text-gray-400"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-white
                                        lg:p-0`
                                    }>Company</NavLink>
                        </li>
                        <li>
                           <NavLink to="/Marketplace" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-400":"text-gray-400"}
                                        border-b border-gray-100 hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-white
                                        lg:p-0`
                                    }>Marketplace</NavLink>
                        </li>
                        {/* <li>
                           <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                        </li>
                        <li>
                           <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                        </li>
                        <li>
                           <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header