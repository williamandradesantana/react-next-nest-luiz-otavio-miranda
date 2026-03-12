import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  return <div className="py-16 text-6xl">AdminLoginPage</div>;
}
