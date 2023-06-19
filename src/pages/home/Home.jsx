
import { Helmet } from "react-helmet-async";
import Banner from "../../component/Banner";
import TransitionEffect from "../../component/TransitionEffect";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Review from "./Review";
import Process from "./Process";
import Supplements from "./Supplements";

const Home = () => {


    return (
        <div>
            <Helmet><title>Fitness || Home</title></Helmet>
            <TransitionEffect></TransitionEffect>
            <Banner></Banner>
            <div className="lg:mx-40">
                <Process></Process>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
            <Review></Review>
            <div className="lg:mx-40">
                <Supplements></Supplements>
            </div>
        </div >


    );
};

export default Home;