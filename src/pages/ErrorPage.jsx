import React from 'react';
import errorAnimation from '../assets/Animations/84918-404-error-doodle-animation.json'
const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <div>
            <Lottie animationData={errorAnimation} loop={true} />
            <div>
                <p className="text-red-500 text-xl">{error?.message}</p>
                <Link to='/'><button className="btn-red">Back To Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;