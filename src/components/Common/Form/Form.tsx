import React from "react";
import "./Form.css";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  onSubmit,
}: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form className="dish-form" onSubmit={onSubmit}>{children}</form>
);

export default Form;
