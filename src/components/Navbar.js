import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const manuItems =
        <>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blogs'>Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="https://drive.google.com/file/d/12eK_397cUiD2EAhfv0u6HncREfvS3Xz4/view?usp=sharing" target="_blank">Download Resume</Link></li>
        </>
    return (
        <header className="w-full">
            <div className="container">
                <div className="navbar bg-base-100 px-0 justify-between">
                    <div className="navbar-start">
                        <Link to="/" className="text-xl">Abu Bakar</Link>
                    </div>
                    <div className="navbar-center hidden md:block lg:flex">
                        <ul className="menu menu-horizontal p-0">
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