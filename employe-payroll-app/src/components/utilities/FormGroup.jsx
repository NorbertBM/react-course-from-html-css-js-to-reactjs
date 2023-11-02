import React from "react";

export default function FormGroup({
  label,
  name,
  type,
  placeholder,
  disabled = false,
  value,
  onChange,
  onInput,
  reference,
}) {
  return (
    <div className="form-group">
      <label className="text-accept">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        ref={reference}
        onChange={onChange}
        onInput={onInput}
      />
    </div>
  );
}
