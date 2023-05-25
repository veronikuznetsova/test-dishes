import React from "react";
import "./Input.css";
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = ({
  type,
  id,
  step,
  register,
  errors,
  min,
  max
}) => {
  const hasError = errors[id];

  const getInputClassName = () => {
    let className = "input-field";
    if (step) {
      className += ` time-input ${hasError ? "input-error" : ""}`;
    } else {
      className += hasError ? " input-error" : "";
    }
    return className;
  };

  return (
    <>
      <input
        type={type}
        id={id}
        step={step}
        min={min}
        max={max}
        {...register(id, { required: true })}
        className={getInputClassName()}
      />
    </>
  );
};

export default Input;
