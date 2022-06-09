import React from "react";
const Banner = () => {
    return (
        <div class="container">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className="" src="https://i.ibb.co/826G2mK/Untitled-design-3-removebg-preview.png" class="max-w-sm" />
                <div className="">
                    <h1 class="text-5xl font-bold">I’m Abu Bakar Front-end Developer </h1>
                    <p class="py-6 max-w-[700px]">Hi! My name is Muhammad Abu Bakar.I am Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <button class="btn rounded-none bg-[#FFB400] px-8 py-4 text-black border-0 hover:bg-[#FFB400]">Hire Me <img src="https://i.ibb.co/829F2Wd/arrow-right.png" className="ml-2.5" /></button>
                </div>
            </div>
        </div>
    )
}
export default Banner;
