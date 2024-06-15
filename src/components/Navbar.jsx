import { useState } from 'react';
import {Menu , X} from 'lucide-react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen) ;
  }

  return (
   <nav className='sticky top-0 z-50 py-2 backdrop-blur-lg 
   border-b border-[#000814]-700/80 '>
    <div className="container px-4 mx-auto my-0 relative text-sm">
      <div className="flex justify-between items-center mx-10">
        <div className="flex items-center flex-shrink-0">
          <img className="h-25 w-20 mr-2" src={logo} alt="Aracompany" />
          <span className='text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-amber-300 to-red-600 bg-clip-text text-transparent'>Ara Company</span>
        </div>
         <div>
          <ul className='hidden lg:flex ml-40 space-x-12 '>

            <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#7209b7] transition-all duration-200' href='/#'>Home</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#d62828] transition-all duration-200' href='/#'>About</a>
            </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
            
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#f77f00] transition-all duration-200' href='/#'>Service</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Client"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#0a9396] transition-all duration-200' href='/#'>Team</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#fb6f92] transition-all duration-200' href='/#'>Contact</a>
              </Link>
              </li>
          </ul>
          
         </div>
         <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className='py-2 px-10 text-white border-black rounded-[20px] bg-[#000814] hover:bg-[#001d3d] transition-all duration-200'>Get Start</a>
          </div>
          <div className="lg:hidden md:flex flex justify-end ">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X/> :<Menu/>}

        </button>
      </div>
      </div>  
      {mobileDrawerOpen && (
        <div className=' backdrop-blur-md right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden '>
          <ul className='py-1'>
          <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#7209b7] transition-all duration-200' href='/#'>Home</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#d62828] transition-all duration-200' href='/#'>About</a>
            </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
            
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#f77f00] transition-all duration-200' href='/#'>Service</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Client"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#0a9396] transition-all duration-200' href='/#'>Team</a>
              </Link>
              </li>
            <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="cursor-pointer"
            >
              <a className='text-lg tracking-tight text-[#000814] hover:text-[#fb6f92] transition-all duration-200' href='/#'>Contact</a>
              </Link>
              </li>
          </ul>
          <div className="space-x-6 flex">
            <a href="" className='py-2 px-10 text-white border-black rounded-[20px] bg-[#000814] hover:bg-[#001d3d] transition-all duration-200'>lets go</a>
          </div>
        </div>
        )}
    </div>
   </nav>

  );
};

export default Navbar;
