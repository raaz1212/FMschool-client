import React from "react";
import Footer from "../../../components/Footer/Footer";
import PopularClassesPage from "../../Classes/PopularClasses";
import Instructors from "../../Instructors/instructorSix";
import Banner from "../Banner/Banner";
import Contact from "../ContactMessage.jsx/Messagebox";
import MarqueeSlider from "../Recruits/Recruits";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClassesPage />
      <Instructors />
      <MarqueeSlider />
      <Contact />
    </div>
  );
};

export default Home;
