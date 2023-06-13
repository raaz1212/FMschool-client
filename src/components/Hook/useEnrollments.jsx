import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useEnrollments = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: enrollment = [] } = useQuery({
    queryKey: ["enrollments", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/enrollments?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [enrollment, refetch];
};

export default useEnrollments;
