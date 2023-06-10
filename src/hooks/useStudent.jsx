import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useStudent = () => {
    const { user, loading } = useContext(AuthContext)

    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['student', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/student/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;