const BORDER_RADIUS = 4;
const WIDTH = 600;

export default {
    postsContainer: {
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    postCard: {
        backgroundColor: 'white',
        webkitBoxShadow: '0px 0px 10px #ccc',
        mozBoxShadow: '0px 0px 10px #ccc',
        boxShadow: '0px 0px 10px #ccc',
        borderRadius: BORDER_RADIUS,
        marginEnd: 12,
        margin: 12,
        width: WIDTH,
        maxWidth: '100%'
    },
    image: {
        width: '100%',
        borderTopRightRadius: BORDER_RADIUS,
        borderTopLeftRadius: BORDER_RADIUS
    },
    title: {
        display: 'flex',
        flex: 1,
        margin: 0,
        padding: 12,
        color: 'black'
    },
    description: {
        display: 'flex',
        flex: 1,
        margin: 0,
        padding: 12,
        paddingTop: 0,
        color: '#666',
        textAlign: 'justify',
        fontWeight: 500
    },
    metaContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
    },
    likesCount: {
        fontWeight: 100,
        fontSize: 12,
        fontStyle: 'italic',
        color: '#777'
    },
    heartContainer: {
        border: 0,
        backgroundColor: 'transparent',
        outline: 'none',
        cursor: 'pointer'
    },
    heart: {
        color: 'red'
    }
};
