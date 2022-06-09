import React from "react";
const Navbar = () => {
    return (
        <header className="w-full">
            <div className="container border">
                <div class="navbar bg-base-100 px-0 justify-between">
                    <div class="navbar-start">
                        <a class="btn btn-ghost normal-case text-xl">Abu Bakar</a>
                    </div>
                    <div class="navbar-center hidden md:block lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div class="dropdown md:hidden">
                        <label tabindex="0" class="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;