import React from "react";
import useData from "../hooks/useData";
import Project from "./Project";

const Projects = () => {
    const [projects] = useData();
    const newProjects = projects.slice(0, 3);
    console.log(newProjects)
    return (
        <section id="portfolio" className="">
            <div className="container">
                <h5 className="text-4xl font-medium text-center mb-20 title">My portfolio</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        newProjects.map(project => <Project project={project} key={project.id} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Projects;

/* https://hidden-sierra-55763.herokuapp.com/projectsá */
