import React from "react";
import Service from "./Service";
const Services = () => {
    const Services = [
        {
            "icon": "https://i.ibb.co/mrnFBhk/coding.png",
            "title": "Web development",
            "description": "Developed a manufacturer-website with front-end, back-end and database for sales and purchase products."
        },

        {
            "icon": "https://i.ibb.co/5Rr98YY/signature.png",
            "title": "Email signature",
            "description": "Developed a manufacturer-website with front-end, back-end and database for sales and purchase products."
        },
        {
            "icon": "https://i.ibb.co/W6VY9cX/file.png",
            "title": "Any conversion",
            "description": "Developed a manufacturer-website with front-end, back-end and database for sales and purchase products."
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

