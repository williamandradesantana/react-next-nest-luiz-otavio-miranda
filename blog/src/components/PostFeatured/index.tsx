import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qualquer-coisa";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: "/images/bryen_9.png",
          width: 1200,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
      ></PostCoverImage>

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2024-04-02">
          20/04/2025 10:00
        </time>

        <PostHeading url={postLink} as="h1">
          Doloribus ut vitae sed mollitia qui enim exercitationem.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          corrupti sint iure inventore in culpa doloribus minus quos assumenda,
          quod fuga consequuntur. Doloribus ut vitae sed mollitia qui enim
          exercitationem.
        </p>
      </div>
    </section>
  );
}
