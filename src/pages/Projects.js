import React, { useEffect, useState } from "react";
import Project from "./Project";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <section className="my-20">
            <div className="container">
                <h1 className="text-center text-4xl my-12">Recent Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        projects.map(project => <Project project={project} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects;