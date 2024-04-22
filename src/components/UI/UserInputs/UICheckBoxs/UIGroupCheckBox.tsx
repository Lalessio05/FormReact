import { useEffect, useState } from "react";
import { UICheckBox } from "./UICheckBox";

export const UIGroupCheckBox =({values,onChange, title} : {title : string, values : Array<{id : string,label : string,value : number, description : string}>,onChange: Function}) =>{
    const [selected ,setSelected] = useState<Array<Number>>([]) ;
    
      const handleChange = (event : any) =>{
        if (!event.target.checked){ //Le checkbox funzionano al contrario
            setSelected([...selected.filter(x=>x!==parseInt(event.target.value,0))])
        }
        else{
            setSelected([...selected, parseInt(event.target.value, 0)]);        
        }
    }
    
    useEffect(()=>{
        onChange(selected.sort());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selected])
    
    return (
      <div className="mb-4">
        <fieldset>
          <legend className="text-base font-medium text-gray-900">
            {title}
          </legend>
          <div className="mt-4 space-y-4">
            {values.map((checkbox) => {
              return (
                <UICheckBox
                  id={checkbox.id}
                  key={checkbox.id}
                  label={checkbox.label}
                  description={checkbox.description}
                  value={checkbox.value.toString()}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        </fieldset>
      </div>
    );
}
