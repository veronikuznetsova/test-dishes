import { useForm } from "react-hook-form";
import { useState } from "react";
import FormField from "components/FormField/FormField";
import SuccessBlockMessage from "components/SuccessBlockMessage/SuccessBlockMessage";
import { IApiErrors } from "./types";
import Button from "components/Common/Button/Button";
import ErrorBlock from "components/ErrorBlock/ErrorBlock";
import ErrorBlockMessage from "components/ErrorBlockMessage/ErrorBlockMessage";
import Form from "components/Common/Form/Form";
import { submitFormData } from "utils/apiUtils";

const DishForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedType, setSelectedType] = useState("");
  const [apiErrors, setApiErrors] = useState<IApiErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    await submitFormData(data, setApiErrors, setIsSuccess, reset);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Dish Name"
        name="name"
        type="text"
        register={register}
        errors={errors}
      />

      <FormField
        label="Preparation Time"
        name="preparation_time"
        type="time"
        step="1"
        register={register}
        errors={errors}
      />

      <FormField
        label="Dish Type"
        name="type"
        type="select"
        options={["pizza", "soup", "sandwich"]}
        register={register}
        errors={errors}
        handleTypeChange={handleTypeChange}
      />

      {selectedType === "pizza" && (
        <>
          <FormField
            label="Number of Slices"
            name="no_of_slices"
            type="number"
            register={register}
            errors={errors}
          />

          <FormField
            label="Diameter"
            name="diameter"
            type="number"
            register={register}
            errors={errors}
          />
        </>
      )}

      {selectedType === "soup" && (
        <FormField
          label="Spiciness Scale (1-10)"
          name="spiciness_scale"
          type="number"
          register={register}
          errors={errors}
        />
      )}

      {selectedType === "sandwich" && (
        <FormField
          label="Slices of Bread Required"
          name="slices_of_bread"
          type="number"
          register={register}
          errors={errors}
        />
      )}

      {isSuccess && (
        <SuccessBlockMessage title="Dish submitted successfully!" />
      )}

      <ErrorBlock>
        {Object.keys(apiErrors).map((field) => (
          <ErrorBlockMessage key={field} title={apiErrors[field].join(", ")} />
        ))}
      </ErrorBlock>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default DishForm;
