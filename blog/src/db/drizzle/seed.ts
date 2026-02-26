import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // Limpa a basa de dados

    await drizzleDb.insert(postsTable).values(posts);

    console.log("Posts salvos!");
  } catch (e) {
    console.log("Ocorreu um erro!");
    console.log();
    console.log(e);
  }
})();
