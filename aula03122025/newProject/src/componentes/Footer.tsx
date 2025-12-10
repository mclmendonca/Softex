import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        padding: 2, 
        marginTop: 4, 
        bgcolor: "#f2f2f2" 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </Typography>
    </Box>
  );
}
