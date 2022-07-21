import React, { useState } from "react";
const Footer = () => {
    const [open, setOpen] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('abubakarsiddique7912@gmail.com');
        setOpen(!open);
    }
    setTimeout(() => {
        setOpen(false)
    }, 5000)
    return (
        <footer className="pt-24 bg-[#2D3054] text-[#fff] mt-[100px]">
            <div className="container">
                <div className="grid sm:grid-cols-3 mb-3">
                    <div className="flex flex-col">
                        <span className="text-xl mb-2 font-medium">Website</span>
                        <a href="#portfolio" className="link link-hover">
                            Manufacturer website</a>
                        <a className="link link-hover">Warehouse management</a>
                        <a href="#portfolio" className="link link-hover">
                            Private service website</a>

                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl mb-2 font-medium">Services</span>
                        <a href="#services" className="link link-hover">Web Development</a>
                        <a href="#services" className="link link-hover">Responsive Design</a>
                        <a href="#services" className="link link-hover">Email Signature</a>
                        <a href="#services" className="link link-hover">Any Conversion</a>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xl mb-2 font-medium">Adress</span>
                        <a >Fatickchari, Chattogram, Bangladesh</a>
                        <a>Phone: 01857927912</a>
                        <a>Email: abubakarsiddique7912@gmail.com</a>
                        <div className="icon flex gap-4 mt-5">
                            <div className="w-8 h-8 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://www.facebook.com/md.bakkar.129357">
                                    <img src="https://i.ibb.co/z6Nx7bT/facebook-app-symbol.png" />
                                </a>
                            </div>
                            <div className="w-8 h-8 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://www.linkedin.com/in/muhammad-abu-bakar-a283b4241/">
                                    <img src="https://i.ibb.co/5BvspPK/linkedin-2.png" />
                                </a>
                            </div>
                            <div onClick={handleCopy} className="w-8 h-8 bg-white flex items-center justify-center cursor-pointer relative">
                                <img src="https://i.ibb.co/w6K833X/email-3.png" />
                                {open && <p className="absolute top-[95%] text-[13px] font-medium">Copied</p>}
                            </div>
                            <div className="w-8 h-8 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://github.com/abubakarsiddique10">
                                    <img src=" https://i.ibb.co/QHpNdt5/github.png" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <p className="text-center pt-20 pb-10">Copyright © 2022 All rights reserved Abu bakar</p>
            </div>
        </footer>
    )
}
export default Footer;