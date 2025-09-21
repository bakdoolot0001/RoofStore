import box from "../../../../assets/images/box.svg";
import check from "../../../../assets/images/check.svg";
import cart from "../../../../assets/images/cart.svg";
import truck from "../../../../assets/images/truck.svg";
import time from "../../../../assets/images/time.svg";
import people from "../../../../assets/images/people.svg";
import AboutCard from "../../../ui/about/AboutCard";
import sass from "./About.module.scss";

export interface AboutDataProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const aboutData: AboutDataProps[] = [
  {
    id: 1,
    title: "Постоянное наличие",
    description:
      "Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката",
    icon: check,
  },
  {
    id: 2,
    title: "Собственный автопарк",
    description:
      "Автомобили грузоподъемностью от 1.5 до 20 тонн. Всегда быстрая доставка.",
    icon: box,
  },
  {
    id: 3,
    title: "Объемы поставок",
    description:
      "Собственная служба доставки, гаранатирует вам поставку материалов на объект в кратчайшие сроки.",
    icon: truck,
  },
  {
    id: 4,
    title: "Справедливая цена",
    description: "Собственные ресурсы и транспорт позволяют снижать стоимость.",
    icon: cart,
  },
  {
    id: 5,
    title: "Обработка заявки < 30 минут",
    description:
      "Отдел продаж, насчитывающий более 80 сотрудников, не оставит вашу заявку без внимания.",
    icon: time,
  },
  {
    id: 6,
    title: "Погрузка без очередей",
    description:
      "Развитая складская логистика позволяет отгружать продукцию всегда без очередей.",
    icon: people,
  },
];

const About = () => {
  return (
    <section className={sass.About}>
      <div className="container">
        <div className={sass.about}>
          <div className={sass.about_content}>
            <h1>
              О НАС <br /> и НАШЕМ БИЗНЕСЕ
            </h1>
            <p>
              Каждому клиенту мы гарантируем взаимовыгодные условия <br />
              сотрудничества. Мы дорожим своими заказчиками, поэтому <br /> брак
              и низкокачественный металл никогда не поступают на <br /> склады
              предприятия. С нами – надежно, выгодно и безопасно!
            </p>
          </div>
          <div className={sass.about_blocks}>
            {aboutData.map((el: AboutDataProps) => (
              <AboutCard key={el.id} el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
