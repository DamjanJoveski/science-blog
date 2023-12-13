import {useEffect, useState} from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Logo from './assets/logo-transparent.png'
import {NavLink} from "react-router-dom";


export const NavBar = ({isMobile}) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setToggleMenu(false),
        );
    }, []);

     const mobileNav =
         <nav className="absolute w-2/3 h-screen right-0 bg-gray-800/90">
             <div className="absolute left-3 top-7 max-w-[70%]">
                <img src={Logo} alt="Logo" />
             </div>
            <ul className="flex flex-col mt-36 gap-14">
                <li className="mx-auto p-5 items-center text-[#89939E]" onClick={() => setToggleMenu(!toggleMenu)}><NavLink to="/home">Home</NavLink></li>
                <li className="mx-auto p-5 items-center text-[#89939E]" onClick={() => setToggleMenu(!toggleMenu)}><NavLink to="/articles">Articles</NavLink></li>
                <li className="mx-auto p-5 items-center text-[#89939E]" onClick={() => setToggleMenu(!toggleMenu)}><NavLink to="/about">About</NavLink></li>
                <li className="mx-auto p-5 items-center text-[#89939E]" onClick={() => setToggleMenu(!toggleMenu)}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
     </nav>

    const desktopNav =
        <nav className="absolute w-full bg-gray-800 h-20">
            <ul className="flex justify-center items-center gap-24 mt-3">
                <li className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200"><NavLink to="/home">Home</NavLink></li>
                <li className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200"><NavLink to="/articles">Articles</NavLink></li>
                <li><NavLink to="/home"><img className="h-14 hover:scale-110 ease-in-out duration-200" src={Logo} alt="Logo"/></NavLink> </li>
                <li className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200"><NavLink to="/about">About</NavLink></li>
                <li className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>


    return (
        <>
            {isMobile ?
                toggleMenu ?
                    <>
                        <AiOutlineClose className="absolute right-3 mt-9 z-10 text-[#89939E]" size={25} onClick={() => setToggleMenu(!toggleMenu)} />
                        {mobileNav}
                    </>
                    :
                    <CiMenuBurger className="absolute right-3 mt-9 z-10 text-[#89939E]" size={25} onClick={() => setToggleMenu(!toggleMenu)}/>
                :
                desktopNav}
        </>
    )
}