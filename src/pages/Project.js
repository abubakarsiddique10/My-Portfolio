import React from "react";
const Project = ({ project }) => {
    const { name, image, description } = project
    return (
        <div class="card lg:w-lg bg-base-100 shadow-xl">
            <figure className="h-48"><img className="h-full" src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    )
}
export default Project;