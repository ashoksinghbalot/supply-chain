import { Menu } from '@headlessui/react'
import logo from '../phone logo.png'
import {FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({count}) => {
    const navigate = useNavigate();

 

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/");
    }



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (
    <>
    
            <div className="bg-gray-100 min-h-10 min-w-screen">
                <div className="w-full text-gray-700 bg-white shadow-md body-font" >
                    <div className="container flex flex-col p-4 mx-auto md:flex-row">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-25"
                                    src={logo}
                                    alt="Your Company"
                                />
                            </div>
                        </div>
                        <nav className="flex items-center justify-center md:ml-auto">
                            <Link to="/Home" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Home</Link>
                            <Link to="/Product" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Product</Link>
                            <Link to="/Gallary" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Gallary</Link>
                            <Link to="/About" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">About</Link>
                            <Link to="/Contact" className="mr-20 font-semibold text-gray-900 hover:text-orange-500">Contact</Link>
                            <Link to="/ViewProductCart" className='font-semibold text-gray-900 hover:text-orange-500'>
                                <FaShoppingCart /> <span>{count} </span>
                            </Link>
                        </nav>
                        <div className="absolute inset-y-0 right-0 flex items-end h-full pr-2 ml-10 border-l border-gray-200 pl-7 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                                        />
                                    </Menu.Button>
                                </div>

                                <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                onClick={handleLogOut}
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>

                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Navbar