import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: adminData, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user || !user.email) {
        return { admin: false };
      }
      const res = await axios.get(
        `http://localhost:5000/users/admin/${user.email}`
      );
      return res.data;
    },
  });

  const isAdmin = adminData?.admin === true;

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
