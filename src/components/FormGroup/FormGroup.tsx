import "./FormGroup.css";

const FormGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className="form-group">{children}</div>
  );
};

export default FormGroup;
