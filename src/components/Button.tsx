interface ButtonProps {
  onClick: () => void;
  children: string;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className={
        window.innerWidth > 768
          ? "btn btn-secondary btn-lg"
          : "btn btn-secondary btn-sm"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
