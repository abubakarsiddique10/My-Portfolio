import React from "react";
const Service = ({ service }) => {
    const { icon, title, description } = service;
    return (
        <div className="bg-base-100 flex flex-col items-center text-center p-10 hover:shadow-lg transition duration-300 ease-in-out">
            <figure><img src={icon} alt="Shoes" className="" /></figure>
            <div className="">
                <h2 className="text-2xl font-medium mt-5 mb-2">{title}</h2>
                <p className="text-[17px]">{description}</p>
            </div>
        </div>
    )
}
export default Service;
