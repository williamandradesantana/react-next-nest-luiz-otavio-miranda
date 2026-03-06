"use server";

import { revalidateTag } from "next/cache";
import { revalidatePath, updateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = (formData.get("path") as string) || "";

  console.log(`Estou em uma server action - ${path}`);

  // revalidatePath(`${path}`);
  revalidateTag("randomuser", "max");
}
