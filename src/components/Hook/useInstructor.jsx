import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: instructors, isLoading: instructorsLoading } = useQuery({
    queryKey: ["instructors"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users");
      return res.data;
    },
  });

  const isInstructor = instructors?.some((user) => user.role === "instructor");

  return [isInstructor, instructorsLoading];
};

export default useInstructor;
