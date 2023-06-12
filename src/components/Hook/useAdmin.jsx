import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: adminUser, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      return res.data;
    },
  });

  const isAdmin = adminUser?.role === "admin";

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
