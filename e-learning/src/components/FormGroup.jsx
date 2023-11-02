import React from "react";

export default function FormGroup({
  label,
  type,
  placeholder,
  disabled = false,
  value,
  onChange,
  reference,
  name,
}) {
  return (
    <div className="form-group">
      <label className="text-primary">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        ref={reference}
        name={name}
      />
    </div>
  );
}
