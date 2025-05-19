import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import useTimelineEntries from "./api/useTimelineEntries";

function Timeline() {
    const { entries, loading } = useTimelineEntries();

    if (loading) return <p className="text-center">Loading...</p>;
    
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-9/12">
                <Title>Timeline</Title>
                {entries.map(item => (
                    <TimelineItem 
                        key = {item.id}
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                        time_unit = {item.time_unit}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;