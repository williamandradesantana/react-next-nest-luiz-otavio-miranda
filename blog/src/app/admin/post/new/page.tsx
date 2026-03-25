import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Email" placeholder="Digite seu email" />
        <InputCheckbox labelText="Sobrenome" type="checkbox" />
        <InputText labelText="Sobrenome" defaultValue="Olá mundo" disabled />
        <InputText labelText="Sobrenome" defaultValue="Olá mundo" readOnly />
      </div>

      <div className="mt-4">
        <Button type="submit" variant="default" size="md">
          Enviar
        </Button>
      </div>
    </form>
  );
}
