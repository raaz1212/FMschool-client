import React, { useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Auth/AuthProvider";
import { app } from "../../firebase/firbase.config";
import { useForm } from "react-hook-form";

const Login = () => {
  document.title = "DC Toys | LogIn";
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

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

  const handleGoogleSignIn = () => {
    const from = location.state?.from?.pathname || "/";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError("Failed to sign in with Google.");
      });
  };

  return (
    <animated.div
      style={fadeAnimation}
      className="flex flex-row justify-center items-center min-h-screen py-4 login-bg"
    >
      <div className="flex flex-col justify-center items-center w-1/2 ">
        <h2 className="text-6xl font-bold">Welcome!!!</h2>
        <p className="text-lg mt-4">Please sign in to continue.</p>
      </div>
      <div>
        <animated.div style={fadeAnimation} className="text-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <hr className="my-4" />
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
              <input
                type="password"
                id="password"
                className="shadow border rounded w-full py-2 px-3 mb-3 focus:outline-none focus:shadow-outline zoom-effect"
                {...register("password", { required: "Password is required" })}
              />
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
          <div className="flex gap-2">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600 zoom-effect-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 12.083 12.083"
                width="29"
                height="29"
              >
                {/* SVG path code */}
              </svg>
              Google login
            </button>
          </div>
        </animated.div>

        <div className="mt-4">
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
    </animated.div>
  );
};

export default Login;
