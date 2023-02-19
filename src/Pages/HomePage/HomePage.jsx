import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Easier from "./Easier/Easier";
import Courses from "./Courses/Courses";
import OurAtmosphere from "./OurAtmosphere/OurAtmosphere";
import Statistics from "./Statistics/Statistics";
import WorkStudents from "./WorkStudents/WorkStudents";
import Mentor from "./Mentor/Mentor";
import WhyUs from "./WhyUs/WhyUs";
import TheNews from "./TheNews/TheNews";
import Contact from "./Contact/Contact";

function HomePage() {
  return (
    <div>
      <Easier />
      <AboutUs />
      <Courses />
      <OurAtmosphere />
      <Statistics />
      <WorkStudents />
      <Mentor />
      <WhyUs />
      <TheNews />
      <Contact />
    </div>
  );
}

export default HomePage;
