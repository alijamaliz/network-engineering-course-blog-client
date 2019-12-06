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
                    marginBottom: 10
                }}
            >
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
                            marginTop: 5,
                            borderRadius: 5,
                            border: 'none',
                            outline: 'none',
                            padding: 5
                        }}
                    />
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
                    <label>Description:</label>
                    <textarea
                        type='text'
                        value={this.state.description}
                        onChange={event => this.setState({ description: event.target.value })}
                        style={{
                            width: width - 10,
                            heght: 100,
                            padding: 5,
                            resize: 'none',
                            border: 'none',
                            outline: 'none',
                            marginTop: 5,
                            borderRadius: 5
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
                        padding: 5,
                        borderRadius: 5,
                        fontWeight: 700,
                        fontSize: 18
                    }}
                    type='submit'
                    value='Submit'
                />
            </form>
        );
    }
}

export default newPost;
