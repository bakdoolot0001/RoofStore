import { Button } from "@/components/ui/Button/Button";
import sass from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={sass.Welcome}>
      <div className="container">
        <div className={sass.welcome_content}>
          <h1>
            ПРОДАЖА кровельных <br /> материалов{" "}
            <span>
              с доставкой <br /> по Санкт-Петербургу <br /> и области
            </span> в день заказа
          </h1>
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
