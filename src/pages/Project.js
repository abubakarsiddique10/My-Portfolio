import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
const Project = ({ project }) => {
    const navigate = useNavigate()
    const { name, image, description, _id } = project;
    const handlenavigate = id => {
        navigate(`/projectDetails/${id}`)
    }
    return (
        <div class="card lg:w-lg bg-base-100 shadow-xl">
            <figure className="h-48"><img className="h-full" src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => handlenavigate(_id)} class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    )
}
export default Project;