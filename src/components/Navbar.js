import React from "react";
import { Link } from "react-router-dom";
import pdf from '../resume/Abu Bakar Resume.pdf'
const Navbar = () => {
    const manuItems =
        <>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blogs'>Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><a href={pdf} download>Resume</a></li>
        </>
    return (
        <header className="w-full bg-white sticky top-0 z-10">
            <div className="container">
                <div className="navbar bg-base-100 px-0 justify-between">
                    <div className="navbar-start">
                        <Link to="/" className="text-2xl font-semibold">Abu Bakar</Link>
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