import { UIRadioButton } from "./UIRadioButton";
export const UIGroupRadioButton = ({nameGroup,title,values,onChange} : {nameGroup:string,title:string,values:Array<{label:string,id:string,value:number,description:string}>, onChange: Function}) => {
    return (
        <div className="mb-4">
          <fieldset>
              <legend className="text-base font-medium text-gray-900">{title}</legend>
              <div className="mt-4 space-y-4">
              {values.map((radioButton)=>{
                  return (
                    <UIRadioButton
                      id={radioButton.id}
                      key={radioButton.id}
                      name={nameGroup}
                      label={radioButton.label}
                      description={radioButton.description}
                      value={radioButton.value.toString()}
                      onChange={onChange}
                    />
                  );
              })}
          </div>
          </fieldset>
  
        </div>
      );
}