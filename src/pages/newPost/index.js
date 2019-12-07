import React from 'react';
import { createPost } from '../../api/post';

const width = 300;

class newPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const post = {
            title: this.state.title,
            description: this.state.description
        };
        createPost(post).then(() => {
            this.setState({ title: '', description: '' });
        });

        event.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{
                    display: 'flex',
                    alignSelf: 'center',
                    flexDirection: 'column',
                    width: width,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 5
                }}
            >
                <div style={{ fontWeight: 800, fontSize: 18, textAlign: 'center', marginBottom: 10 }}>
                    New post
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: 5,
                        paddingBottom: 5
                    }}
                >
                    <label>Title:</label>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={event => this.setState({ title: event.target.value })}
                        style={{
                            marginTop: 10,
                            borderRadius: 5,
                            border: 'none',
                            outline: 'none',
                            padding: 5,
                            backgroundColor: '#efefef',
                            fontSize: 16
                        }}
                    />
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: 10,
                        paddingBottom: 5
                    }}
                >
                    <label>Description:</label>
                    <textarea
                        type='text'
                        value={this.state.description}
                        onChange={event => this.setState({ description: event.target.value })}
                        style={{
                            width: width - 10,
                            height: 100,
                            padding: 5,
                            fontSize: 16,
                            resize: 'none',
                            border: 'none',
                            outline: 'none',
                            marginTop: 10,
                            borderRadius: 5,
                            backgroundColor: '#efefef'
                        }}
                    />
                </div>
                <input
                    style={{
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#26D306',
                        color: 'white',
                        marginTop: 5,
                        marginBottom: 5,
                        padding: 10,
                        borderRadius: 5,
                        fontWeight: 700,
                        fontSize: 18,
                        cursor: 'pointer'
                    }}
                    type='submit'
                    value='Submit'
                />
            </form>
        );
    }
}

export default newPost;
