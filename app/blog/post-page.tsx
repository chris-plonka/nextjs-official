import type { Metadata } from 'next';
import Link from 'next/link';
import directus from "lib/directus";
import posts from "./get-from-db"
import { Post } from "types/collection";
import PostCard from 'components/post/post-card-blog';



export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};






export default async function PostPage() {

  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });

      return posts.data;

    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };





  {/*
    console.log(posts);

    if (!posts) {
      notFound();
    }
  */}

  const posts = await getAllPosts();

  if (!posts) {
    notFound()
  }



  return (
    <section>
      {/*}   <PostCard post={posts[7]} /> */}

      <h1 className="font-bold text-2xl mb-8 tracking-tighter">read my explorer blog</h1>

      <PostCard post={posts[0]} />
      <PostCard post={posts[1]} />
      <PostCard post={posts[2]} />

      {/*}      {posts
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">

              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>

            </div>
          </Link>
        ))}
        */}

    </section>

  );
}