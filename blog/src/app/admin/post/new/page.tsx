import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return <div className="py-16 text-6xl">AdminPostNewPage </div>;
}
