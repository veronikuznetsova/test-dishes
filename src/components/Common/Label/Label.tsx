import React from "react";
import { ILabelProps } from "./types";

const Label: React.FC<ILabelProps> = ({ htmlFor, label }) => {
  return <label htmlFor={htmlFor}>{label}:</label>;
};

export default Label;