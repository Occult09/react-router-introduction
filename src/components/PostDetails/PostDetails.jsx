import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const { title, body } = post
    const navigate = useNavigate()
    const { postId } = useParams()
    console.log(postId)

    const handleGoBack = () => {
        navigate(-1)
    }

    const postDetailStyle = {
        border: '2px solid blue',
        padding: '20px',
        borderRadius: '20px',
        marginTop: '20px'
    }

    return (
        <div style={postDetailStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back to Posts</button>
        </div>
    );
};

export default PostDetails;