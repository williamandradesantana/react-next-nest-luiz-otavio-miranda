"use client"; // <- se espalha para todos os componentes que importar aqui.

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log("ClientComponent");
  return <div>client component {children} </div>;
}
