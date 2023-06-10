import { useQuery } from "@tanstack/react-query";


const InstructorPage = () => {

    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor`)
            return res.json();
        },
    })

    console.log(instructors)

    return (
        <div className=" grid grid-cols-3">
            {
                instructors.map(single =>
                    <div key={single?._id}>
                        <img src={single?.image} className="w-10 h-10 rounded-lg" alt="" />
                        <h1>Instructor name: {single?.name}</h1>
                        <p>email: {single?.email}</p>
                    </div>
                )
            }
        </div>
    );
};

export default InstructorPage;