import React, { Component } from 'react';
import styles from './styles';
import Post from './Post';

class PostList extends Component {
    render() {
        if (this.props.posts)
            return (
                <div style={styles.postsContainer}>
                    {this.props.posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            );
        else return <h1>نداریم</h1>;
    }
}
export default PostList;
