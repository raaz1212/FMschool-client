import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Swal from "sweetalert2";
import axios from "axios";

const queryClient = new QueryClient();

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("http://localhost:5000/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axios
      .patch(`http://localhost:5000/users/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };

  const handleMakeInstructor = (user) => {
    axios
      .patch(`http://localhost:5000/users/instructor/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now an Instructor!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user instructor:", error);
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4 text-center">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">SN</th>
              <th className="border border-gray-300 py-2 px-4">Name</th>
              <th className="border border-gray-300 py-2 px-4">Email</th>
              <th className="border border-gray-300 py-2 px-4">Role</th>
              <th className="border border-gray-300 py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border border-gray-300 py-2 px-4">
                  {index + 1}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {user.name}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {user.email}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {user.role === "admin" ? (
                    "ADMIN✅"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-blue"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {user.role === "instructor" ? (
                    "INSTRUCTOR✅"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-green"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AllUsersPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AllUsers />
    </QueryClientProvider>
  );
};

export default AllUsersPage;
