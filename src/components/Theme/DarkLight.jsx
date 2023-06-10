import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkLight = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      checkTheme(null);
    }
  }, []);

  const checkTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        break;

      case "dark":
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        break;

      default:
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        break;
    }
  };

  return (
    <div className="text-2xl" onClick={checkTheme}>
      {theme === "light" ? (
        <BsMoon style={{ cursor: "pointer" }} />
      ) : (
        <BsSun style={{ cursor: "pointer" }} />
      )}
    </div>
  );
};

export default DarkLight;
