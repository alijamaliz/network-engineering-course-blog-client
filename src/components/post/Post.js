import React, { Component } from 'react';
import { likePost } from '../../api/post';
import styles from './styles';
import Heart from '@material-ui/icons/FavoriteRounded';
import HeartOutline from '@material-ui/icons/FavoriteBorderRounded';

class Post extends Component {
    onLikeButtonPress = () => {
        likePost(this.props.post.id)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };
    renderLikeStatus() {
        let icon = <Heart style={styles.heart} />;
        if (!this.props.post.liked) icon = <HeartOutline style={styles.heart} />;
        return (
            <button style={styles.heartContainer} onClick={() => this.onLikeButtonPress()}>
                {icon}
            </button>
        );
    }
    render() {
        return (
            <div style={styles.postCard}>
                {this.props.post.image_path ? (
                    <img style={styles.image} src={this.props.post.image_path} alt='post' />
                ) : (
                    undefined
                )}
                <h3 style={styles.title}>{this.props.post.title}</h3>
                <h5 style={styles.description}>{this.props.post.description}</h5>
                <div style={styles.metaContainer}>
                    <span style={styles.likesCount}>{`${this.props.post.likes} likes`}</span>
                    {this.renderLikeStatus()}
                </div>
            </div>
        );
    }
}
export default Post;
