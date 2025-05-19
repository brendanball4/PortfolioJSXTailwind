import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import useDirectusCollection from "./api/useDirectusCollection";

function Timeline() {
    const { entries, loading } = useDirectusCollection('timelines');

    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-9/12">
                <Title>Timeline</Title>
                {loading ? (
                    // Show 3 skeleton items while loading
                    Array(3).fill().map((_, index) => (
                        <TimelineItem key={index} loading={true} />
                    ))
                ) : (
                    entries.map(item => (
                        <TimelineItem 
                            key={item.id}
                            year={item.year}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                            time_unit={item.time_unit}
                            loading={false}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Timeline;