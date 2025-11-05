import "./InputField.css";

interface InputFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({ label = "", value = "", onChange }: InputFieldProps) {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite aqui..."
      />
    </div>
  );
}
