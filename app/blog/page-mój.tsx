import PaddingContainer from 'components/layout/padding-container';
import PostCard from 'components/post/post-card';
import PostList from 'components/post/post-lists';
import CTACard from 'components/elements/cta-card';
import directus from 'lib/directus';
import { notFound } from "next/navigation";


export default async function Home() {

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

  const posts = await getAllPosts();

  console.log(posts);

  if (!posts) {
    notFound();
  }

  return (

    <main className="space-y-10">
      <PostCard post={posts[0]} />
      <PostList posts={posts.filter((_post, index) => index > 0 && index < 3)} />
      <CTACard />
      <PostCard reverse post={posts[3]} />
      <PostList posts={posts.filter((_post, index) => index > 3 && index < 6)} />
      <PostCard post={posts[6]} />
      <PostList posts={posts.filter((_post, index) => index > 6 && index < 9)} />
      <PostCard reverse post={posts[9]} />
      <PostList posts={posts.filter((_post, index) => index > 9 && index < 12)} />
      <PostCard post={posts[12]} />
      <PostList posts={posts.filter((_post, index) => index > 12 && index < 15)} />
      <PostCard reverse post={posts[15]} />
      <PostList posts={posts.filter((_post, index) => index > 15 && index < 18)} />
    </main>


  );
}
