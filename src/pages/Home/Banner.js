import React from "react";
import Button from "../../components/Button";
import pdf from '../../resume/Abu Bakar Resume.pdf'
const Banner = () => {
    return (
        <section id="banner" className="bg-white">
            <div className="container bg-[url(https://i.ibb.co/mvYYy9d/Main-menu-1.png)]" style={{ backgroundPosition: "68% 54%", backgroundRepeat: "no-repeat" }}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:h-[650px] py-10 lg:p-0 gap-8 lg:gap-32">
                    <img src="https://i.ibb.co/pxNnzN3/abu-bakaar-1.png" className="max-w-sm baaner-img w-full bg-[#FBFBFB]" />
                    <div className="text-center sm:text-left ">
                        <h5 className="font-medium mb-1 text-[20px]">Hi, my neme is</h5>
                        <h1 className="text-3xl sm:text-5xl font-bold banner-title">Abu Bakar and I'm a Front-end Web Developer </h1>
                        <p className="py-6 text-lg max-w-[700px]">
                            I'm a Frontend Web Developer, and I specialize in efficient React, HTML, CSS & javaScript that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. In the following years, I also plan to explore the “server-side” more and become a better full-stack dev.
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


/* Hi! My name is Muhammad Abu Bakar.I'm a Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success. */