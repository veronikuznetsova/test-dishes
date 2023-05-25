export interface IFormFieldProps {
  label: string;
  name: string;
  type: string;
  options?: string[];
  register: any;
  errors: any;
  step?: string;
  min?: number;
  max?: number;
  handleTypeChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}