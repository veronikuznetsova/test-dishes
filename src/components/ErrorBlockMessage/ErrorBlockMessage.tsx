import "./ErrorBlockMessage.css";
import { IErrorBlockMessageProps } from "./types";

const ErrorBlockMessage: React.FC<IErrorBlockMessageProps> = ({
  title,
  key,
}) => {
  return (
    <div key={key} className="error-message">
      {title}
    </div>
  );
};

export default ErrorBlockMessage;
