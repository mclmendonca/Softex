import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import InputField from "../componentes/InputField";
import ButtonPrimary from "../componentes/ButtonPrimary";
import { Container, Typography } from "@mui/material";

export default function Register() {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 3, maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Cadastro
        </Typography>

        <InputField label="Nome" />
        <InputField label="Email" type="email" />
        <InputField label="Senha" type="password" />

        <ButtonPrimary 
          label="Cadastrar" 
          onClick={() => alert("Enviado!")} 
        />
      </Container>
      <Footer />
    </>
  );
}
