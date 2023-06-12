import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";

const Register = () => {
  document.title = "DC Toys | Register";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, logOut } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    setSuccess("");
    setError("");

    if (password.length < 6) {
      setError("Please enter at least 6 characters for your password.");
      return;
    }

    if (password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const saveUser = { name: name, email: email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        const loggedUser = result.user;
        setError("");
        setSuccess("User has been created successfully.");
        updateUserData(result.user, name, photoURL);
        logOut(result.user);
        showSweetAlert();
        reset(); // Reset the form fields
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        reset();
        console.log("User data updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const showSweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registration Complete",
      text: "Welcome To The New Journey.",
      confirmButtonText: "Alright",
      confirmButtonColor: "#7C3AED",
      allowOutsideClick: false,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-4 p-6 rounded-lg border shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <input
              className="w-full pl-10 pr-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              {...register("name", { required: "Your Name is required" })}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full pl-10 pr-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              {...register("email", { required: "Your Email is required" })}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full pl-10 pr-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              {...register("password", {
                required: "Your Password is required",
              })}
              placeholder="Your Password"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full pl-10 pr-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <input
            className="w-full mb-4 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="url"
            {...register("photoURL")}
            placeholder="Your Profile Picture URL"
          />
          <button
            className="w-full py-3 rounded bg-sky-500 hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Register
          </button>
          <div className="mt-8">
            <Social />
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? Please{" "}
          <Link
            className="text-orange-500 underline font-bold hover:text-red-600 transition-colors duration-300"
            to="/login"
          >
            Log In
          </Link>{" "}
        </p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="mt-4 text-center">{success}</p>}
      </div>
    </div>
  );
};

export default Register;
