import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="container mx-auto my-20">
            <div className="w-full">
                <Title>Timeline</Title>
                {timeline.map(item => (
                    <TimelineItem 
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;