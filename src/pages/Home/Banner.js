import React from "react";
const Banner = () => {
    return (
        <div className="container">
            <div className="hero-content flex-col lg:flex-row-reverse lg:h-[600px] lg:p-0 pt-6">
                <img src="https://i.ibb.co/7CX6HCV/Untitled-design-2-removebg-preview-1.png" className="max-w-sm baaner-img w-full" />
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-5xl font-bold">I’m Abu Bakar Front-end Developer </h1>
                    <p className="py-6 text-lg max-w-[700px]">Hi! My name is Muhammad Abu Bakar.I am Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <button className="btn rounded-none bg-[#FFB400] px-8 py-4 text-black border-0 hover:bg-[#FFB400]">Hire Me <img src="https://i.ibb.co/829F2Wd/arrow-right.png" className="ml-2.5" /></button>
                </div>
            </div>
        </div>
    )
}
export default Banner;
