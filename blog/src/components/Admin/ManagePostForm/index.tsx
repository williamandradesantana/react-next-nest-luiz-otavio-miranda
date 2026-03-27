"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Email" placeholder="Digite seu email" />
        <InputCheckbox labelText="Sobrenome" type="checkbox" />
        <MarkdownEditor
          labelText="Conteúdo do post"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
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
