import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../../assets/cool-background.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <motion.div
          className="hero-content text-center text-neutral-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-md">
            <motion.h1
              className="mb-5 text-5xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hello there
            </motion.h1>
            <motion.p
              className="mb-5 text-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Discover the world of radio broadcasting with our exciting summer
              program designed for aspiring radio jockeys like you. Join us for
              interactive workshops, studio experiences, inspiring guest
              speakers, networking opportunities, and a chance to showcase your
              talent. Unleash your potential as a radio star. Register from
              below!
            </motion.p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link
                to="/register"
                className="text-white underline font-semibold zoom-effect-link"
              >
                register
              </Link>{" "}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
