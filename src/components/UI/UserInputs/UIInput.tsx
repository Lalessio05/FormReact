export const UIInput =({id,label,value, onChange} : {id:string, label:string,value:string, onChange:Function})=>{
  let classes = "w-full rounded-md h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500"  
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event)}
        className={classes}
      />
    </div>
  );
}