import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Importa Link de react-scroll
import logo from '../assets/Logo-3.png'
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setIsSticky(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cambia addEventListener a removeEventListener
        }
    }, []); // Agrega [] para que useEffect se ejecute solo una vez al montar el componente

    const navItems = [
        { link: "Inicio", path: "inicio" },
        { link: "Descripción", path: "descripcion" },
        { link: "Especialidades", path: "especialidades" },
        { link: "Servicios", path: "servicios" },
        { link: "Staff professional", path: "staff" },
        { link: "Contacto", path: "contacto" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300":""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-60 inline-block items-center' /><span className='text-[#263238]'></span></a>
                    {/* nav items for large devices */}
                    <ul className='md:flex space-x-10 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path} className='block'>
                                    <Link to={path} spy={true} smooth={true} offset={-100} className='text-sm text-gray-900 hover:text-brandPrimary font-medium cursor-pointer'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    {/*boton pantallas grandes*/}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div>
                    {/* menu boton para mobiles */}
                    <div className='md:hidden'>
                        <button onClick= {toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className="h6 w-6 "/> ) :(<FaBars className="h-6 w-6 "/>) 
                            }

                        </button>
                    
                    </div>
                </div>
                {/*items para mobile*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                            navItems.map(({ link, path }) => (
                                <li key={path} className='block'>
                                    <Link to={path} spy={true} smooth={true} offset={-100} className='text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                        

                </div>

            </nav>
        </header>
    );
}

export default Navbar;