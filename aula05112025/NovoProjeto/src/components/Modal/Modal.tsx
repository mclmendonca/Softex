import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Modal({
  isOpen = false,
  onClose = () => {},
  children = <p>Conteúdo padrão do modal</p>,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="close-btn">
          Fechar
        </button>
      </div>
    </div>
  );
}
