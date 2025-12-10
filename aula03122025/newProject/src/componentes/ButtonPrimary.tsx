import { Button } from "@mui/material";

interface ButtonPrimaryProps {
  label: string;
  onClick?: () => void;
}

export default function ButtonPrimary({ label, onClick }: ButtonPrimaryProps) {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      fullWidth 
      sx={{ marginTop: 2 }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
