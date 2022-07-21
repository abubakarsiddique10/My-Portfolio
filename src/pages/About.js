import React, { useState } from "react";
const About = () => {
    const [open, setOpen] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('abubakarsiddique7912@gmail.com');
        setOpen(!open);
    }
    setTimeout(() => {
        setOpen(false)
    }, 5000)
    return (

        <section id="about" className="py-12 lg:pt-24">
            <div className="container">
                <h1 className="text-4xl text-center font-medium title">About Me</h1>
                <div className="flex justify-center items-center justify-between flex-col lg:flex-row gap-10">
                    <img src="https://i.ibb.co/TkydWxF/abu-bakaar-1.png" className="w-[400px] bg-[#79AFD1] rounded" />
                    <div>
                        <h5 className="text-3xl font-medium">Front End Web Developer</h5>
                        <p className="max-w-[700px] text-xl mt-3">Hi! My name is Abu Bakar I'm from Bangladesh. I'm a Frontend Web Developer. I'm very passionate & dedicated to my work. With 2 years experience in this job. In the following years, I also plan to explore the “server-side” more and become a better-rounded full-stack developer.</p>
                        <div className="icon flex gap-5 mt-5">
                            <div className="w-10 h-10 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://www.facebook.com/md.bakkar.129357">
                                    <img src="https://i.ibb.co/z6Nx7bT/facebook-app-symbol.png" />
                                </a>
                            </div>
                            <div className="w-10 h-10 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://www.linkedin.com/in/muhammad-abu-bakar-a283b4241/">
                                    <img src="https://i.ibb.co/5BvspPK/linkedin-2.png" />
                                </a>
                            </div>
                            <div onClick={handleCopy} className="w-10 h-10 bg-white flex items-center justify-center cursor-pointer relative">
                                <img src="https://i.ibb.co/w6K833X/email-3.png" />
                                {open && <p className="absolute top-[95%] text-[13px] font-medium">Copied</p>}
                            </div>
                            <div className="w-10 h-10 bg-white flex items-center justify-center">
                                <a className="link" target="_blank" href="https://github.com/abubakarsiddique10">
                                    <img src=" https://i.ibb.co/QHpNdt5/github.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}
export default About;