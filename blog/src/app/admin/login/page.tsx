import { Metadata } from "next";

import { LoginForm } from "@/components/Admin/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  return <LoginForm />;
}
