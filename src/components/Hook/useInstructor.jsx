import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: instructorData, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user || !user.email) {
        return { instructor: false };
      }
      const res = await axios.get(
        `http://localhost:5000/users/instructor/${user.email}`
      );
      return res.data;
    },
  });

  const isInstructor = instructorData?.instructor === true;

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
