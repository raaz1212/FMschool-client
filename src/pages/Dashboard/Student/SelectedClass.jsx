import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useEnrollments from "../../../components/Hook/useEnrollments";

const SelectedClass = () => {
  const [enrollments, refetch] = useEnrollments();
  console.log(enrollments);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "DELETE!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/enrollments/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  // Remove duplicates using Set data structure
  const uniqueEnrollments = Array.from(
    new Set(enrollments.map((item) => item.classId))
  ).map((classId) => {
    return enrollments.find((item) => item.classId === classId);
  });

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">
          Total Class Selected: {uniqueEnrollments.length}
        </h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center">SN</th>
              <th className="px-4 py-2 text-center">Class Name</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {uniqueEnrollments.map((item, index) => (
              <tr key={item.classId}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2 text-end">${item.price}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-outline mr-2"
                    >
                      DELETE
                    </button>
                    <Link to={"/payment"} className="btn btn-outline">
                      PAY
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
