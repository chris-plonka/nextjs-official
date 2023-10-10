import { Post } from "../../types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content-blog";

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean;
}

const PostCard: JSX.Element[] = ({
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

            {/* Post Image */}

            {/* Post Content */}

            <div className="w-full flex flex-col mb-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    <PostContent post={post} />
                </p>
            </div>

        </Link>
    );
};

export default PostCard;
