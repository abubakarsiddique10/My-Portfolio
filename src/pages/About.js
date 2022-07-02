import React from "react";
const About = () => {
    return (

        <section id="about" className="py-12 lg:pt-24">
            <div className="container">
                <h1 className="text-4xl text-center font-medium title">About Me</h1>
                <div className="flex justify-center items-center justify-between flex-col lg:flex-row gap-10">
                    <img src="https://i.ibb.co/WB9TZZh/abu-bakar1.jpg" className="w-[400px] bg-white rounded" />
                    <div>
                        <h5 className="text-3xl font-bold">I'm a frontend developer Why Hire Me for Your
                            Next Project?</h5>
                        <p className="max-w-[700px] text-xl mt-3">Hi! My name is Muhammad Abu Bakar.I am a Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        <div className="icon flex gap-5 mt-5">
                            <a className="link" target="_blank" href="https://www.facebook.com/md.bakkar.129357">
                                <img src=" https://i.ibb.co/rZ8wMgn/facebook.png" />
                            </a>
                            <a className="link" target="_blank" href="https://www.linkedin.com/in/muhammad-abu-bakar-a283b4241/">
                                <img src="https://i.ibb.co/0QdsvpV/linkedin.png" />
                            </a>
                            <a className="link" target="_blank" href="mailto:abubakarsiddique7912@gmail.com">
                                <img src="  https://i.ibb.co/5rKMGP0/email.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;