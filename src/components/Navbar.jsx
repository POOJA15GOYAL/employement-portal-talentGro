import React from 'react';
import logo from "../assets/TalentGro-RetinaLogo.svg";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { toast } from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className='w-full flex justify-between items-center px-6 h-[70px] bg-primary-color border-b-2 z-50'>
            <NavLink to="/">
                <img src={logo} alt="Logo" loading="lazy" style={{ height: '60px', width: 'auto' }} />

            </NavLink>

            <nav>
                <ul className="flex justify-center items-center">
                    <li>
                        <NavLink to="/" className="px-3 mx-4 text-[1.2rem] no-underline uppercase text-white" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="px-3 mx-4 text-[1.2rem] no-underline uppercase text-white">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="px-3 mx-4 text-[1.2rem] no-underline uppercase text-white">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="px-3 mx-4 text-[1.2rem] no-underline uppercase text-white">Services</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="nav-container">
                {!isLoggedIn && (
                    <NavLink to="/login">
                        <button className="login-button">
                            Login
                        </button>
                    </NavLink>
                )}

                {!isLoggedIn && (
                    <NavLink to="/signup">
                        <button className="signup-button">
                            Sign Up
                        </button>
                    </NavLink>
                )}

                {isLoggedIn && (
                    <NavLink to="/">
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logout Sucessfully");
                            }}>
                            <BiLogOut data-tooltip-id="my-logout-tooltip" size={30} color='white' />
                            <ReactTooltip
                                id="my-logout-tooltip"
                                place="bottom"
                                effect="solid"
                                className="custom-tooltip"
                                content="Logout"
                            />
                        </button>
                    </NavLink>
                )}
            </div>

        </div>
    );
};

export default Navbar;