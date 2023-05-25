export interface ISelectProps {
  id: string;
  options: string[];
  register: any;
  errors: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}