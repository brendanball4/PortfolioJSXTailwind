import React from "react";
import Carousel from "./Carousel";

function ProjectItem({ id, title, description, images, stack, link }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}></a>
        </div>
    );
}

export default ProjectItem;
