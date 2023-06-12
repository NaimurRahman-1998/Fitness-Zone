
import Banner from "../../component/Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Review from "./Review";

const Home = () => {


    return (
        <div >
            <Banner></Banner>
            <div className="mx-40">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
            <Review></Review>
        </div >





        // <div className="grid grid-cols-3">
        //     {
        //         classes.map(cls =>
        //             <ClassesCard
        //                 key={cls._id}
        //                 cls={cls}
        //             >

        //             </ClassesCard>)
        //     }
        // </div>
    );
};

export default Home;