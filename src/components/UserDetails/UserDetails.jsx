import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const { name, username, email, website, phone } = user
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const userDetailStyle = {
        border: '2px solid blue',
        padding: '20px',
        borderRadius: '20px',
        marginTop: '20px'
    }

    return (
        <div style={userDetailStyle}>
            <h2>{name}</h2>
            <h4>Username: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go Back to Users</button>
        </div>
    );
};

export default UserDetails;