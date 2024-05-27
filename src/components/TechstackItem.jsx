import React from "react";

function TechstackItem({ id, stack_name, img_url }) {
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
