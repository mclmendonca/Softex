import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
}

export default function InputField({ label, type = "text" }: InputFieldProps) {
  return (
    <TextField 
      label={label}
      type={type}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );
}
