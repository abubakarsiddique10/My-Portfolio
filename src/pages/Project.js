import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
    const navigate = useNavigate()
    const { image, id, link } = project;

    const handlenavigate = id => {
        navigate(`/projectDetails/${id}`)
    }
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="h-[450px] overflow-hidden relative shadow-xl card bg-cover bg-top hover:bg-bottom">
            <div className="absolute h-full w-full bottom-0 left-0 project-card flex justify-center items-center gap-5">
                <a href={link} target="_blank">
                    <button className="rounded-none bg-[#F94073] w-32 h-10 font-medium text-lg text-black border-0 hover:bg-[#F94073] text-white">Live Demo</button>
                </a>
                <button onClick={() => handlenavigate(id)} className="rounded-none bg-[#F94073] w-32 h-10 font-medium text-lg text-black border-0 hover:bg-[#F94073] text-white">Details</button>
            </div>
        </div>
    )
}
export default Project;