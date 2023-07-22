import { Description } from "@/components/Description";
import { Title } from "@/components/Title";

export default function Error() {
  return (
    <main className="flex-col flex justify-center items-center min-h-screen text-center">
      <Title className="animate-fade-in">Página não encontrada</Title>
      <Description className="animate-fade-in-200">
        A página que você procura não existe ou foi movida
      </Description>
      <span className="fixed font-bold text-muted text-9xl -z-10 opacity-25">
        404
      </span>
    </main>
  );
}
