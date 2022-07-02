import React from "react";
import img from '../../images/icons/html-5.png';
import MySkill from "./MySkill";
const MySkills = () => {

    const skills = [
        {
            "title": "HTML5",
            "img": "https://i.ibb.co/zF3qYDN/html-5.png"
        },
        {
            "title": "CSS3",
            "img": "https://i.ibb.co/F0rLThq/css-3.png"
        },
        {
            "title": "JavaScript",
            "img": "https://i.ibb.co/znq4LFR/js.png"
        },
        {
            "title": "Tailwind",
            "img": "https://i.ibb.co/9sL2dMd/images.png"
        },
        {
            "title": "Bootstrap",
            "img": "https://i.ibb.co/2K1Lm7w/225-2258787-bootstrap-4-logo-png-clipart-png-download-bootstrap.png"
        },
        {
            "title": "ReactJs",
            "img": " https://i.ibb.co/vqJCFRZ/physics.png"
        },
        {
            "title": "NodeJs",
            "img": "https://i.ibb.co/qYjCSfc/nodejs.png"
        }
    ]
    return (
        <section id="my-skills" className="">
            <div className="container">
                <h1 className="text-4xl text-center font-medium title">My Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-5 lg:grid-cols-7 text-center">
                    {
                        skills.map((skill, index) => <MySkill key={index} skill={skill} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default MySkills;