import React from "react";

function TechstackItem({ stack_name, img_url }) {
    return (
   <div>
        <div className="text-center">
            {stack_name}
        </div>
         <div className="w-full p-4 bg-stone-200 rounded-md">
            <img src={img_url} className="w-14 h-14 object-contain mx-auto"></img>
         </div>
   </div>
   );
}

export default TechstackItem;
