import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user
    const navigate = useNavigate()

    const userStyle = {
        border: '2px solid yellow',
        padding: '20px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={handleShowDetail}>Show Detail</button>
        </div>
    );
};

export default User;