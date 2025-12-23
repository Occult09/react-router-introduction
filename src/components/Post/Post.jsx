import { Link, useNavigate } from "react-router-dom";
import './Post.css'

const Post = ({ post }) => {
    const { id, title } = post
    const navigate = useNavigate()

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="post">
            <h4>User Id: {id}</h4>
            <p>{title}</p>
            <button onClick={handleShowDetail}>Show Detail</button>
        </div>
    );
};

export default Post;