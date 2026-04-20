import styles from "./Button.module.css";

interface ButonProps {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButonProps) => {
  return (
    <button
      className={[styles.btn, styles.btnPrimary].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
