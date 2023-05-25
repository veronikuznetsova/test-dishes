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
  handleTypeChange,
}) => {
  return (
    <FormGroup>
      <Label htmlFor="name" label="Dish Name" />
      {type === "select" ? (
        <Select
          id="type"
          options={["pizza", "soup", "sandwich"]}
          register={register}
          errors={errors}
          onChange={handleTypeChange}
        />
      ) : (
        <Input
          type={type}
          id={name}
          step={step}
          register={register}
          errors={errors}
        />
      )}
      {errors[name] && <ErrorBlockMessage title="This field is required" />}
    </FormGroup>
  );
};

export default FormField;
