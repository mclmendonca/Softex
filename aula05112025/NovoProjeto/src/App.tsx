import "./style.css";
import { useState} from "react"
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/NavBar";
import { Sidebar } from "./components/Sidebar/SideBar";
import { Card } from "./components/Card/card";
import { Button } from "./components/Button/Button";
import { InputField } from "./components/InputField/InputField";
import { Modal } from "./components/Modal/Modal";
import { Loader } from "./components/Loader/Loader";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main>
        <Sidebar />
        <div className="content">
          <Card title="Bem-vindo!" description="Este é um card de exemplo" />
          <InputField label="Seu nome:" value={name} onChange={(e) => setName(e.target.value)} />
          <Button label="Abrir Modal" onClick={() => setIsModalOpen(true)} />
          <Loader />
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Aberto!</h2>
        <p>Você pode colocar qualquer conteúdo aqui.</p>
        <Button label="Fechar Modal" onClick={() => setIsModalOpen(false)} />
      </Modal>

      <Footer />
    </div>
  );
}

export default App;
