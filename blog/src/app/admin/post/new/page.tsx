import { Button } from "@/components/Button";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap">
      <Button variant="default" size="lg">
        Confirma
      </Button>
      <Button variant="ghost" size="sm">
        Funciona como o JSX
      </Button>
      <Button variant="danger" size="md">
        Funciona como o JSX
      </Button>
    </div>
  );
}
