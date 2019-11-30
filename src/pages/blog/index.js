import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../api/post';
import PostList from '../../components/post/PostList';

let requested = false;

export default function Blog() {
    const [posts, setPosts] = useState(0);
    useEffect(() => {
        if (!requested) {
            requested = true;
            getAllPosts()
                .then(result => setPosts(result))
                .catch(err => console.log(err));
        }
    });

    return <PostList posts={posts} />;
}
