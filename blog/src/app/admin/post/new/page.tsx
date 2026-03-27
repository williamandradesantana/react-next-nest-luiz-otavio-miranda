import { ManagePostForm } from "@/components/Admin/ManagePostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create new post",
};

export default async function AdminPostNewPage() {
  return <ManagePostForm />;
}
