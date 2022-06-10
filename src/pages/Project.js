import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Project = ({ project }) => {
    const navigate = useNavigate()
    const { name, image, description, id } = project;
    const handnavigate = id => {

    }
    return (
        <div class="card lg:w-lg bg-base-100 shadow-xl">
            <figure className="h-48"><img className="h-full" src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"><Link to={`/projectsDetails/${id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Project;