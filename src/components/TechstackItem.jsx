import React from "react";

function TechstackItem({ stack_name, img_url }) {
    return (
        <div className="flex flex-col items-center gap-2" title={stack_name}>
            <div className="w-full aspect-square p-3 bg-stone-100 border border-stone-200 dark:border-stone-700 flex items-center justify-center">
                <img src={img_url} alt={stack_name} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-xs text-stone-500 text-center leading-tight">{stack_name}</span>
        </div>
    );
}

export default TechstackItem;
