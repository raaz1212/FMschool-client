import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";
import useEnrollments from "../../components/Hook/useEnrollments";

const ClassCard = ({ classData }) => {
  const {
    image,
    name,
    instructorName,
    availableSeats,
    price,
    students,
    summary,
    _id,
  } = classData;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useEnrollments();

  const handleEnroll = () => {
    console.log(classData);
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
    <div
      className={` m-8 ${
        availableSeats === 0 ? "bg-red-500 text-black" : "bg-none"
      }`}
    >
      <div className="rounded shadow-lg shadow-orange-300 p-4">
        <img
          className="w-full h-48 object-contain mb-4 rounded-lg"
          src={image}
          alt={name}
        />
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="mb-2 text-lg font-semibold">
          Instructor: {instructorName}
        </p>
        <p className="mb-2 text-lg font-semibold">
          Available Seats: {availableSeats}
        </p>
        <p className="mb-4 text-lg font-semibold">Price: ${price}</p>
        <p className="mb-6">{summary}</p>
        <button
          onClick={handleEnroll}
          className={`btn ${
            availableSeats === 0 ? "btn-disabled" : "btn-primary"
          }`}
          disabled={availableSeats === 0}
        >
          {availableSeats === 0 ? "Class Full" : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
