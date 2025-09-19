import { FaVk, FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/images/logo.svg";
import sass from "./Header.module.scss";
import Image from "next/image";
import { RiTelegram2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className={sass.Header}>
      <div className="container">
        <div className={sass.header}>
          <div className={sass.header_logo}>
            <Image src={logo} alt="logo-img" />
            <span></span>
            <h4>
              Санкт-Петербург, <br /> Горелово, <br /> Волхонское шоссе, 6
            </h4>
          </div>
          <div className={sass.price_list}>
            <div className={sass.Pdf}>
              <span>PDF</span>
            </div>
            <h4>Скачать прайс-лист</h4>
          </div>
          <button className={sass.catalog}>Посмотреть каталог товаров</button>
          <div className={sass.online_social}>
            <li>Задайте вопрос online</li>
            <div className={sass.social_logo}>
              <a>
                <FaWhatsapp />
              </a>
              <a>
                <RiTelegram2Fill />
              </a>
              <a>
                <FaVk />
              </a>
            </div>
          </div>
          <div className={sass.phone}>
            <a>
              +7 (812) 325-50-55 <span>Перезвоним Вам</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
