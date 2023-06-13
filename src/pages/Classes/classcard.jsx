import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";
import useEnrollments from "../../components/Hook/useEnrollments";

const ClassCard = ({ classData }) => {
  const { image, name, instructorName, availableSeats, price, students, _id } =
    classData;
  const { role, user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useEnrollments();
  useEffect(() => {
    if (!user) {
      refetch();
    }
  }, [user, refetch]);

  const handleEnroll = () => {
    if (user && user.email) {
      const enrollmentData = {
        classId: _id,
        name,
        instructorName,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify(enrollmentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Enrollment successful!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll in the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="m-4">
      <div
        className={`rounded shadow-lg shadow-orange-300 p-4 ${
          availableSeats === 0 ? "bg-red-500 text-black" : "bg-none"
        } `}
      >
        <img
          className="w-full h-auto object-contain mb-4 rounded-lg"
          src={image}
          alt={name}
        />
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="mb-2 font-semibold">Instructor: {instructorName}</p>
        <p className="mb-2 text-lg font-semibold">
          Available Seats: {availableSeats}
        </p>
        <p className="mb-4 font-semibold">Price: ${price}</p>
        <p className="mb-6">Total Student: {students}</p>
        <button
          onClick={handleEnroll}
          className={`btn ${
            availableSeats === 0 ? "btn-disabled" : "btn-primary"
          }`}
          disabled={
            availableSeats === 0 || role === "admin" || role === "instructor"
          }
        >
          {availableSeats === 0 ? "Class Full" : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
