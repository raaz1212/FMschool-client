import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useEnrollments = () => {
  const { user, token } = useContext(AuthContext);

  const { refetch, data: enrollments = [] } = useQuery({
    queryKey: ["enrollments", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enrollments?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [enrollments, refetch];
};
export default useEnrollments;
