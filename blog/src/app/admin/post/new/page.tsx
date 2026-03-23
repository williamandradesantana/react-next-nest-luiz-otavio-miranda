import { Button } from "@/components/Button";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return (
    <div className="py-16">
      <Button type="submit">Funciona como o JSX</Button>
    </div>
  );
}
