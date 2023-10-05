import { Post } from "types/collection";
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
                ? "flex flex-col space-y-1 mb-4"
                : "space-y-10"
                } `}
            href={`/blog/${post.slug}`}
        >
            <div className="w-full flex flex-col">
                {/* Post Image */}
                <Image
                    className={`rounded-md w-full object-cover object-center pb-2 h-[300px] max-h-[300px]  ${reverse ? "md:order-last" : ""
                        }`}
                    alt={post.title}
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`}
                    width={600}
                    height={300}
                />
                {/* Post Content */}
                {/* @ts-expect-error Async Server Component */}
                <PostContent post={post} />
            </div>
        </Link>
    );
};

export default PostCard;
