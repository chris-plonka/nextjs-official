export default async function BlogPage() {

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
}
