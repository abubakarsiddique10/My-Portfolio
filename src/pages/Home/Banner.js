import React from "react";
import Button from "../../components/Button";
import pdf from '../../resume/Resume of Abu Bakar.pdf'
const Banner = () => {
    return (
        <section id="banner" className="bg-white text-black">
            <div className="container bg-[url(https://i.ibb.co/mvYYy9d/Main-menu-1.png)]" style={{ backgroundPosition: "68% 55%", backgroundRepeat: "no-repeat" }}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:h-[650px] py-10 lg:p-0 gap-8 lg:gap-32">
                    <img src="https://i.ibb.co/pxNnzN3/abu-bakaar-1.png" className="max-w-sm baaner-img w-full bg-[#FBFBFB]" />
                    <div className="text-center sm:text-left ">
                        <h5 className="font-medium mb-1 text-[20px]">Hi, my name is</h5>
                        <h1 className="text-3xl sm:text-5xl font-bold banner-title">Abu Bakar and I'm a Front-end Developer </h1>
                        <p className="py-6 text-lg max-w-[700px]">
                            I'm a Frontend Developer, and I specialize in efficient React, HTML, CSS & JavaScript that just work across all platforms and browsers. for the past two years, I gather knowledge in various parts of web development. My goal is to become a full-stack web developer who can make beautiful UI and also can handle the back-end smoothly.
                        </p>
                        <a href={pdf} download>
                            <Button>download cv</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;
