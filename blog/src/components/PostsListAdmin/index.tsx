import { findAllPostsAdmin } from "@/lib/post/queries/admin";

export async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className="py-16">
      <div>
        {posts.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    </div>
  );
}
