import ErrorBlockMessage from "components/ErrorBlockMessage/ErrorBlockMessage";
import "./FormField.css";
import { IFormFieldProps } from "./types";
import Input from "components/Common/Input/Input";
import FormGroup from "components/FormGroup/FormGroup";
import Select from "components/Common/Select/Select";
import Label from "components/Common/Label/Label";

const FormField: React.FC<IFormFieldProps> = ({
  label,
  name,
  type,
  options,
  register,
  errors,
  step,
  min,
  max,
  handleTypeChange
}) => {
  return (
    <FormGroup>
      <Label htmlFor="name" label={label} />
      {type === "select" ? (
        <Select
          id={name}
          options={options || []}
          register={register}
          errors={errors}
          type={type}
          onChange={handleTypeChange}
        />
      ) : (
        <Input
          type={type}
          id={name}
          step={step}
          register={register}
          errors={errors}
          min={min}
          max={max}
        />
      )}
      {errors[name] && <ErrorBlockMessage title="This field is required" />}
    </FormGroup>
  );
};

export default FormField;
