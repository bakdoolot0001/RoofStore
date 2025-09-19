import React from "react";
import Header from "../header/Header";
import sass from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={sass.Footer}>
      <Header />
      <div className={sass.footer}>
        <h3>Политика конфиденциальности</h3>
        <h3>Copyright © 2010 - 2022 | ООО «СУПЕРМЕТ»</h3>
      </div>
    </footer>
  );
};

export default Footer;
