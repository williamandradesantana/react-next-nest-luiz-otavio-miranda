import { InputText } from "@/components/InputText";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Email" placeholder="Digite seu email" />
        <InputText labelText="Sobrenome" defaultValue="Olá mundo" disabled />
        <InputText labelText="Sobrenome" defaultValue="Olá mundo" readOnly />
      </div>
    </>
  );
}
