import React from "react";
const About = () => {
    return (
        <section id="about" className="py-12 lg:pt-24">
            <div className="container">
                <h1 className="text-4xl text-center font-medium title">About Me</h1>
                <div className="flex justify-center items-center justify-between flex-col lg:flex-row gap-10">
                    <img src="https://i.ibb.co/kcnjMpq/Untitled-design-2-removebg-preview-1.png" className="w-[400px] bg-white rounded" />
                    <div>
                        <h5 className="text-3xl font-bold">I'm a frontend developer</h5>
                        <p className="max-w-[700px] text-xl mt-3">Hi! My name is Muhammad Abu Bakar.I am a Frontend Developer, and I'm very passionate and dedicated to my work.With 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        <div className="icon flex gap-5 mt-5">
                            <img src=" https://i.ibb.co/rZ8wMgn/facebook.png" />
                            <img src="https://i.ibb.co/0QdsvpV/linkedin.png" />
                            <img src="  https://i.ibb.co/5rKMGP0/email.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;