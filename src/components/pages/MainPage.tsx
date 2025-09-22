import React from "react";
import Welcome from "./main/welcome/Welcome";
import About from "./main/about/About";
import Quiz from "./quiz/Quiz";
import Review from "./review/Review";

const MainPage = () => {
  return (
    <section>
      <Welcome />
      <About />
      <Quiz />
      <Review />
    </section>
  );
};

export default MainPage;
