import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="m-4 mt-72">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-[#89939E] sm:text-center  ease-in-out duration-200">
          © 2023
          <NavLink className="mx-1 hover:text-[#DEDEDE]" to="/home">
            Science Stream™.
          </NavLink>
          All Rights Reserved.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <NavLink className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200 me-4 md:me-14" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200 me-4 md:me-14" to="/privacy-policy">
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-[#89939E] hover:text-[#DEDEDE] ease-in-out duration-200" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>

    )
}