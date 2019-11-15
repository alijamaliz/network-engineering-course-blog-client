import React, { Component } from 'react';
import styles from './styles';
import Heart from '@material-ui/icons/FavoriteRounded';
import HeartOutline from '@material-ui/icons/FavoriteBorderRounded';

class Post extends Component {
    renderLikeStatus() {
        let icon = <Heart style={styles.heart} />;
        if (!this.props.post.liked) icon = <HeartOutline style={styles.heart} />;
        return (
            <button style={styles.heartContainer} onClick={() => alert('cool')}>
                {icon}
            </button>
        );
    }
    render() {
        return (
            <div style={styles.postCard}>
                <img style={styles.image} src={this.props.post.image} alt='post' />
                <h3 style={styles.title}>{this.props.post.title}</h3>
                <h5 style={styles.description}>{this.props.post.description}</h5>
                <div style={styles.metaContainer}>
                    <span style={styles.likesCount}>3 likes</span>
                    {this.renderLikeStatus()}
                </div>
            </div>
        );
    }
}
export default Post;
