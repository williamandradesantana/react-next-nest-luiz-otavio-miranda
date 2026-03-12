import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPostsAdmin = cache(async () => {
  return postRepository.findAll();
});

export const findPostByIdAdmin = cache(async (id: string) => {
  return await postRepository.findById(id);
});
