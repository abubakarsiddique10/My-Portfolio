import React from "react";
import Service from "./Service";
const Services = () => {
    const Services = [
        {
            "icon": "https://i.ibb.co/mrnFBhk/coding.png",
            "title": "Web development",
            "description": "Are you looking for a Frontend Web Developer to build a responsive, stunning, and user-friendly website or looking for someone to redesign your existing website,then you are in the right place! please contact me"
        },

        {
            "icon": "https://i.ibb.co/5Rr98YY/signature.png",
            "title": "Email signature",
            "description": "Having a professional signature design on your emails is much needed to show your professionalism. I will create a unique, professional & clickable HTML email signature for you. Feel free to contact with me"
        },
        {
            "icon": "https://i.ibb.co/W6VY9cX/file.png",
            "title": "Any conversion",
            "description": "Are you in need of a front-end developer who will be able to convert your web mockups to a clean, pixel-perfect, and fully responsive website? If your answer is YES then congrats! you are at the right place :)"
        }
    ]
    return (
        <section id="services">
            <div className="container">
                <h1 className="text-4xl text-center font-medium title">My Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        Services.map((service, index) => <Service key={index} service={service} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Services;

