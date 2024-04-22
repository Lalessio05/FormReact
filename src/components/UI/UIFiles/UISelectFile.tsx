import { useEffect, useState } from "react";

export const UISelectFile = ({id,handleFiles}:{id:string,handleFiles:Function})=>{
    
    
  return (
    <div>
        <div>
              <label htmlFor={id}>Select a file:</label>
      <input type="file" id={id} name={id} onChange={(event)=>handleFiles(event)}/>
    </div>
    <p className="text-xs text-gray-500"> PNG,JPG,GIF up to 10MB</p>
    </div>
  );
}