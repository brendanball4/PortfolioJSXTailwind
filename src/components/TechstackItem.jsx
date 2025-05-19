import React from "react";

function TechstackItem({ stack_name, img_url, loading }) {
    if (loading) {
        return (
            <div>
                <div className="w-full p-4 bg-stone-200 dark:bg-stone-700 rounded-md animate-pulse">
                    <div className="aspect-square w-full"></div>
                </div>
            </div>
        );
    }

    return (
   <div>
        <div className="text-center">
            {stack_name}
        </div>
         <div className="w-full p-4 bg-stone-200 rounded-md">
            <img src={img_url}></img>
         </div>
   </div>
   );
}

export default TechstackItem;
