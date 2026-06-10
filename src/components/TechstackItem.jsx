import React from "react";

function TechstackItem({ stack_name, img_url }) {
    return (
        <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg" title={stack_name}>
            <div className="w-12 h-12 p-2 rounded-md bg-stone-200 dark:bg-stone-100 flex items-center justify-center">
                <img src={img_url} alt={stack_name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs text-stone-600 dark:text-stone-400 text-center leading-tight">{stack_name}</span>
        </div>
    );
}

export default TechstackItem;
