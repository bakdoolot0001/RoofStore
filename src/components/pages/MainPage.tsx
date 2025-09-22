import React from "react";
import Welcome from "./main/welcome/Welcome";
import About from "./main/about/About";
import Quiz from "./quiz/Quiz";

const MainPage = () => {
  return (
    <section>
      <Welcome />
      <About />
      <Quiz />
    </section>
  );
};

export default MainPage;
