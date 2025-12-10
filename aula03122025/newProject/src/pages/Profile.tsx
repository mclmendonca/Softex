import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import CardInfo from "../componentes/CardInfo";
import { Container } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 3 }}>
        <CardInfo title="Perfil" text="Informações do usuário." />
      </Container>
      <Footer />
    </>
  );
}
