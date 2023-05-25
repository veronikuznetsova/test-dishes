import React from "react";
import "./Button.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type={type}>{children}</button>
);

export default Button;
