"use server";

import { makePartialPost, PublicPost } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validation";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-errors-messages";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  // Verificar se o usuário está logado

  if (!(formData instanceof FormData)) {
    return {
      formState: { ...prevState.formState },
      errors: ["Dados inválidos"],
    };
  }

  const formDataToObject = Object.fromEntries(formData.entries()); // ["title", "Aqui vem o título"]
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObject);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error);
    return {
      errors,
      formState: makePartialPost(formDataToObject),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: Date.now().toString(),
    slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  };
}
