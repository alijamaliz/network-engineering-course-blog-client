import React from 'react';

import PostList from '../../components/post/PostList';

const POSTS = [
    {
        title: 'Shalgham',
        image: 'http://hdwpro.com/wp-content/uploads/2017/01/Colorful-Nature-Hd.jpg',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        liked: true
    },
    {
        title: 'Havij',
        image: 'https://static.techspot.com/fileshost/articles-info/walls3/nature/108p.jpg',
        description:
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        liked: false
    },
    {
        title: 'Nokhod',
        image:
            'https://lh4.googleusercontent.com/proxy/g3hu0wAKAN3cXm4j5f7I31SHr33sUv-Hy9yANnEMvp-n-KU7XPiKGlGkLdbLqafrqljOyDb_M-0HahVe6cESRO0du98kK0Ardb5kwdgbk-v1QPU4d8AntvzH7Si8zxWANrAL45H7pgPmBK4yGzKtqWfKD4H8-_xwmz0vmm94jKY9fxaTpA=s0-d',
        description:
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        liked: true
    }
];

export default function Blog() {
    return <PostList posts={POSTS} />;
}
