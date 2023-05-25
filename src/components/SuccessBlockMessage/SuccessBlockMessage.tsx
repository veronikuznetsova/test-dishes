import "./SuccessBlockMessage.css";
import { ISuccessBlockMessageProps } from "./types";

const SuccessBlockMessage: React.FC<ISuccessBlockMessageProps> = ({
  title
}) => {
  return (
    <div className="success-message">{title}</div>
  );
};

export default SuccessBlockMessage;
