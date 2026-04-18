interface ButonProps {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, color, onClick }: ButonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
