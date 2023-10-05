import React from 'react'
import { Post } from "types/collection";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
    post: Post;
}

const PostHero = ({ post }: PostHeroProps) => {
    return (
        < div >
            {/* @ts-expect-error Async Server Component */}
            <PostContent isPostPage post={post} />
            <Image className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`}
                width={700}
                height={500}
                alt={post.title}
            />
        </div >
    )
}

export default PostHero;
