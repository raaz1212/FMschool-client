import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmailSignIn = handleSubmit((data) => {
    const { email, password } = data;
    const from = location.state?.from?.pathname || "/";

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-lg shadow-lg p-6">
        <div className="text-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleEmailSignIn}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow border rounded w-full py-2 px-30 focus:outline-none focus:shadow-outline zoom-effect"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 mb-4">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="shadow border rounded w-full py-2 px-3 mb-3 focus:outline-none focus:shadow-outline zoom-effect"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <span
                  className="absolute top-2 right-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 mb-4">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mb-4 zoom-effect-button"
            >
              Sign in
            </button>
          </form>
          <Social />
        </div>

        <div className="mt-4 text-center">
          Do not have an account? please{" "}
          <Link
            to="/register"
            className="text-red-600 underline font-semibold zoom-effect-link"
          >
            register
          </Link>{" "}
          here.
        </div>
      </div>
    </div>
  );
};

export default Login;
