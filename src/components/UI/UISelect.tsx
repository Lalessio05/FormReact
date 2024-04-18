export const UISelect = ({
  id,
  label,
  values,
  onChange,
  defaultValue = 1,
}: {
  id: string;
  label: string;
  values: Array<{ id: number; name: string; default: boolean }>;
  onChange: Function;
  defaultValue: number;
}) => {
  
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <select
          name={id}
          id={id}
          defaultValue={defaultValue}
          onChange={(event) => onChange(event)}
        >
          {values.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
