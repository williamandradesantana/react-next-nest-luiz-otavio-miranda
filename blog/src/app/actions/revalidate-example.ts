"use server";

import { revalidatePath } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = (formData.get("path") as string) || "";

  console.log(`Estou em uma server action - ${path}`);

  revalidatePath(`${path}`);
}
