import "./ErrorBlock.css";

const ErrorBlock: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children
}: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className="success-message">{children}</div>
  );
};

export default ErrorBlock;
