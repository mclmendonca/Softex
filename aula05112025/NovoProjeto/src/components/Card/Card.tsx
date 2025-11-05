
import "./Card.css";

interface CardProps {
  title?: string;
  description?: string;
}

export function Card({ title = "Título padrão", description = "Descrição padrão" }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
