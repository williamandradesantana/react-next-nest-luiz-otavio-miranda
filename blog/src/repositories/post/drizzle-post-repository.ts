import { PostRepository } from "./post-repository";
import { PostModel } from "@/models/post/post-model";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel | undefined> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  await repo.findBySlugPublic("rotina-matinal-de-pessoas-altamente-eficazes");
})();
