import { Button } from "@/components/Button";
import { BugIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return (
    <>
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="lg">
          <BugIcon /> Confirma
        </Button>
        <Button variant="ghost" size="sm">
          <BugIcon />
          Funciona como o JSX
        </Button>
        <Button variant="danger" size="md">
          <BugIcon />
          Funciona como o JSX
        </Button>
      </div>

      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="lg" disabled>
          <BugIcon /> Confirma
        </Button>
        <Button variant="ghost" size="sm" disabled>
          <BugIcon />
          Funciona como o JSX
        </Button>
        <Button variant="danger" size="md" disabled>
          <BugIcon />
          Funciona como o JSX
        </Button>
      </div>
    </>
  );
}
