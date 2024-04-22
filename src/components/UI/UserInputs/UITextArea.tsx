
export const UITextArea = ({
  id,
  label,
  value,
  subtitle,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  subtitle: string;
  onChange: Function;
}) => {
  return (
    <div className="col-span-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <textarea
          id={id}
          name={id}
          rows={3}
          value={value}
          onChange={(event) => onChange(event)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
