
import Banner from "../../component/Banner";
import PopularClasses from "./PopularClasses";

const Home = () => {


    return (
        <div >
            <Banner></Banner>
            <PopularClasses></PopularClasses>
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