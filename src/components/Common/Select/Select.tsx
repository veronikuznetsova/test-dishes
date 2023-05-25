import React from "react";
import "./Select.css";
import { ISelectProps } from "./types";

const Select: React.FC<ISelectProps> = ({
  id,
  options,
  register,
  errors,
  onChange,
}) => {
  const hasError = errors[id];

  return (
    <select
      id={id}
      {...register(id, { required: true })}
      className={hasError ? "input-error" : ""}
      onChange={onChange}
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
