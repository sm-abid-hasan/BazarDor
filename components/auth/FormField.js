
export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled = false,
  readOnly = false,
  required = false,
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className="input input-bordered h-10 w-full bg-base-100 text-sm read-only:bg-base-200"
      />
    </div>
  );
}
