import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext)

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;