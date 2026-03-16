import { logColor } from "@/utils/log-color";

export async function deletePostAction(formData: FormData) {
  "use server";
  const id = formData.get("id");

  logColor(`${id}`);
}
