import React from "react";
import Contact from "../Contact";
import Projects from "../Projects";
import Banner from "./Banner";
import Services from "./Services";
const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Projects />
            <Contact />
        </>
    )
}
export default Home;