import React from "react";
import Welcome from "./main/welcome/Welcome";
import About from "./main/about/About";
import Catalog from "./main/katalog/Catalog";

const MainPage = () => {
  return (
    <section>
        <Welcome/>
        <About/>
        <Catalog/>
    </section>
  );
};

export default MainPage;
