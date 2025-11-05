
import "./Button.css";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export function Button({ label = "Botão", onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}
