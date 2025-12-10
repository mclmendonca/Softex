import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import CardInfo from "../componentes/CardInfo";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 3 }}>
        <CardInfo title="Bem-vindo" text="Você está na página inicial." />
        <CardInfo title="Sobre o App" text="Este projeto usa React + Vite + MUI." />
      </Container>
      <Footer />
    </>
  );
}
