export const UICheckBox =({id,label,value, description,onChange} : {id:string, label:string,value:string,description:string ,onChange:Function})=>{
    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={id}
            type="checkbox"
            value={value}
            onChange={(event) => onChange(event)}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={id}
            className="font-medium text-gray-700 cursor-pointer"
          >
            {label}
          </label>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    );
}