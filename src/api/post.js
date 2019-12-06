import { API_BASE_URL } from '../config/constants';

export const getAllPosts = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${API_BASE_URL}/posts/`)
            .then(res => {
                return res.json();
            })
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
};

export const likePost = async postId => {
    return new Promise((resolve, reject) => {
        fetch(`${API_BASE_URL}/posts/${postId}/like/`, { method: 'post' })
            .then(res => {
                return res.json();
            })
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
};

export const createPost = async post => {
    return new Promise((resolve, reject) => {
        fetch(`${API_BASE_URL}/posts/`, {
            method: 'post',
            body: JSON.stringify(post),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => {
                return res.json();
            })
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
};
