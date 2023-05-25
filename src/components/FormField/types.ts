export interface IFormFieldProps {
  label: string;
  name: string;
  type: string;
  options?: string[];
  register: any;
  errors: any;
  step?: string;
  handleTypeChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}