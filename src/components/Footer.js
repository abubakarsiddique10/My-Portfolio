import React from "react";
const Footer = () => {
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
                    {/* <div className="flex flex-col">
                        <span className="footer-title">Useful Link</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div> */}
                    <div className="flex flex-col">
                        <span className="text-xl mb-2 font-medium">Adress</span>
                        <a >Fatickchari, Chattogram, Bangladesh</a>
                        <a>Phone: 01857927912</a>
                        <a>Email: abubakarsiddique7912@gmail.com</a>
                        <div className="flex gap-5 mt-3">
                            <a href="https://www.facebook.com/md.bakkar.129357" className="link" target="_blank"><img src="https://i.ibb.co/4T6mjnQ/facebook-1.png" className="w-8" /></a>
                            <a href="https://www.linkedin.com/in/muhammad-abu-bakar-a283b4241/" className="link" target="_blank"><img src=" https://i.ibb.co/fFcBCcp/linkedin-2.png" className="w-8" /></a>
                            <a href="mailto:abubakarsiddique7912@gmail.com" className="link" target="_blank"><img src=" https://i.ibb.co/92SBqgL/gmail.png" className="w-8 bg-white" title="abubakarsiddique7912@gmail.com" /></a>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <p className="text-center py-8">Copyright © 2022 All rights reserved Abu bakar</p>
            </div>
        </footer>
    )
}
export default Footer;