import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://hidden-sierra-55763.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5 text-lg">
                    <div className="">
                        <div className="grid grid-cols-3">
                            <figure className="h-48 flex justify-center"><img className="h-auto w-auto" src={details.img1} alt="Shoes" /></figure>
                            <figure className="h-48 flex justify-center"><img className="h-full" src={details.img2} alt="Shoes" /></figure>
                            <figure className="h-48 flex justify-center"><img className="h-full" src={details.img3} alt="Shoes" /></figure>
                        </div>
                    </div>
                    <div className="f">
                        <div>
                            <h1 className="text-2xl font-medium">{details.name}</h1>
                            <a className="mr-4 text-blue-500" target="_blank" href={details.link}>Live Site</a>
                            <a className="mr-4 text-blue-500" target="_blank" href={details.client}>Client-side</a>
                            <a className="text-blue-500" target="_blank" href={details.server}>Server-side</a>
                        </div>
                        <p>1 {details.implement1}</p>
                        <p>2 {details.implement2}</p>
                        <p>Technology: {details.technology}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectDetails;