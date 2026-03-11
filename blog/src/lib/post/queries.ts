import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => await postRepository.findAllPublic()),
  ["posts"],
  {
    tags: ["posts"],
    revalidate: 60,
  },
);

export const findPostByIdCached = (id: string) =>
  unstable_cache(
    cache(async (id: string) => {
      return await postRepository.findById(id);
    }),
    ["post"],
    {
      tags: [`post-${id}`],
    },
  )(id);

export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);

      if (!post) notFound();
      return post;
    }),
    ["post"],
    {
      tags: [`post-${slug}`],
    },
  )(slug);
