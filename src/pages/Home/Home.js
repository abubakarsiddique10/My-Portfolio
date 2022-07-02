import React from "react";
import Projects from "../Projects";
import Banner from "./Banner";
import Services from "./Services";
import Contact from "./Contact";
import MySkills from "./MySkills";
const Home = () => {
    return (
        <>
            <Banner />
            <MySkills />
            <Services />
            <Projects />
            <Contact />
        </>
    )
}
export default Home;