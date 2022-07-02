import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const manuItems =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
            <li><NavLink to='/blogs'>Blog</NavLink></li>
            <li><a href="/#contact">Contact</a></li>

        </>
    return (
        <header className="w-full bg-[#2D3054] text-[#fff] sticky top-0 z-10">
            <div className="container">
                <div className="navbar px-0 justify-between">
                    <div className="navbar-start">
                        <Link to="/" className="text-2xl font-medium">Abu Bakar</Link>
                    </div>
                    <div className="navbar-center hidden md:block lg:flex">
                        <ul className="menu menu-horizontal p-0 text-lg font-medium">
                            {manuItems}
                        </ul>
                    </div>
                    <div className="dropdown md:hidden">
                        <label tabIndex="0" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;