import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean;
}

const PostCard = ({
    post,
    layout = "horizontal",
    reverse = false,

}: PostProps) => {
    return (
        <Link
            className={`@container ${layout === "horizontal"
                ? "grid items-center grid-cols-1 gap-10 md:grid-cols-2"
                : "space-y-10"
                } `}
            href={`/blog/${post.slug}`}
        >
            {/* Post Image */}
            <Image
                className={`rounded-md w-full object-cover object-center h-[300px] max-h-[300px]  ${reverse ? "md:order-last" : ""
                    }`}
                alt={post.title}
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`}
                width={600}
                height={300}
            />
            {/* Post Content */}
            {/* @ts-expect-error Async Server Component */}
            <PostContent post={post} />
        </Link>
    );
};

export default PostCard;
