import React from "react";
const MySkill = ({ skill }) => {
    const { img, title } = skill;
    return (
        <div className="skill flex flex-col items-center">
            <div className="skill-img">
                <img src={img} />
            </div>
            <h5 className="mt-3 text-xl font-medium text-black">{title}</h5>
        </div>
    )
}
export default MySkill;