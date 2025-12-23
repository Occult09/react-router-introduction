import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    const handleGoBackToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>Ooopsss!</h2>
            {
                error.status === 404 && <div>
                    <h3>{error.statusText}</h3>
                    <p>{error.status} Error</p>
                </div>
            }
            <button onClick={handleGoBackToHome}>Go Back to Home</button>
        </div>
    );
};

export default ErrorPage;