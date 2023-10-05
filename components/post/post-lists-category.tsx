import React from 'react';
import { Post } from "types/collection";
import PostCard from "./post-card-category";

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";

}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard layout={layout} key={post.id} post={post} />

                ))}
            </div>
        </div>
    );
};

export default PostList;
