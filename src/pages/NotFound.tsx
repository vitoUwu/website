import { Link } from "react-router-dom";
import Button from "../components/Button";

export function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1>Página não encontrada</h1>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </div>
  );
}
