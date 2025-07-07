import { NavigationMenu } from "@/components/ui/navigation-menu";



export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center p-24">
         <NavigationMenu />

        <h1 className="text-2xl font-bold text-center mb-8 flex flex-col h-screen">
          Seja bem-vindo ao Trabalho de Versionamento de Software!
        </h1>
      </main>
    </>
  );
}

