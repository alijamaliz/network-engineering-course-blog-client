import { API_BASE_URL } from '../config/constants';

export const getAllPosts = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${API_BASE_URL}/posts/`)
            .then(res => res.json())
            .then(
                result => resolve(result),
                error => reject(error)
            );
    });
};
