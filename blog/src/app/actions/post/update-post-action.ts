"use server";

import {
  makePartialPost,
  makePublicPostFromDb,
  PublicPost,
} from "@/dto/post/dto";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { PostUpdateSchema } from "@/lib/post/validation";
import { postRepository } from "@/repositories/post";
import { getZodErrorMessages } from "@/utils/get-zod-errors-messages";
import { makeRandomString } from "@/utils/make-random-string";
import { revalidateTag } from "next/cache";

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: string;
};

export async function updatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData,
): Promise<UpdatePostActionState> {
  const isAutheticated = await verifyLoginSession();

  if (!(formData instanceof FormData)) {
    return {
      formState: { ...prevState.formState },
      errors: ["Dados inválidos"],
    };
  }

  const id = formData.get("id")?.toString() || "";

  if (!id || typeof id !== "string") {
    return {
      formState: prevState.formState,
      errors: ["Id inválido!"],
    };
  }

  const formDataToObject = Object.fromEntries(formData.entries()); // ["title", "Aqui vem o título"]
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObject);

  if (!isAutheticated) {
    return {
      formState: makePartialPost(formDataToObject),
      errors: ["Faça o login antes de salvar!"],
    };
  }

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error);
    return {
      errors,
      formState: makePartialPost(formDataToObject),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost = {
    ...validPostData,
  };

  let post;

  try {
    post = await postRepository.update(id, newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPost(formDataToObject),
        errors: [e.message],
      };
    }

    return {
      formState: makePartialPost(formDataToObject),
      errors: ["Erro desconhecido!"],
    };
  }
  revalidateTag("posts", "");
  revalidateTag(`post-${post.slug}`, "");

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: makeRandomString(),
  };
}
