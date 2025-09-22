import { Button } from "@/components/ui/Button/Button";
import sass from "./Welcome.module.scss";
import Image from "next/image";
import box from "@/assets/images/box.svg";
import w1 from "@/assets/images/w1.svg";
import w2 from "@/assets/images/w2.svg";
import w3 from "@/assets/images/w3.svg";

const Welcome = () => {
  return (
    <section className={sass.Welcome}>
      <div className="container">
        <div className={sass.welcome_content}>
          <h1>
            ПРОДАЖА кровельных <br /> материалов{" "}
            <span>
              с доставкой <br /> по Санкт-Петербургу <br /> и области
            </span>{" "}
            в день заказа
          </h1>
          <Image src={w1} alt="box" className={sass.box1} />
          <Image src={w2} alt="box" className={sass.box2} />
          <Image src={w3} alt="box" className={sass.box3} />
          <p>
            За 1 минуту пройдите тест и{" "}
            <span>
              рассчитайте <br /> стоимость кровли
            </span>{" "}
            под ваш объект <br /> с точностью 97% и получите подарки
          </p>
          <Button variant="primary">РАССЧИТАТЬ СТОИМОСТЬ МАТЕРИАЛОВ</Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
