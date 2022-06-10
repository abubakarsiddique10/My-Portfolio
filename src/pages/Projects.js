import React, { useEffect, useState } from "react";
import Project from "./Project";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://hidden-sierra-55763.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <section className="my-20">
            <div className="container">
                <h1 className="text-center text-4xl my-12">Recent Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        projects.map(project => <Project project={project} key={project._id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects;