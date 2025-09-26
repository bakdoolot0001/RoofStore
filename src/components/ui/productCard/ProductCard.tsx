import Image from "next/image";
import { Button } from "../Button/Button";
import { TestDataProps } from "@/components/pages/main/katalog/Catalog";
import { FC } from "react";
import sass from "./ProductCard.module.scss"
import Link from "next/link";

interface TestElProps {
  el: TestDataProps
}

const ProductCard: FC<TestElProps> = ({el}) => {
  return (
    <div className={sass.productCard}>
      <Link href={"/detail"}>
      <Image src={el.img} alt="img"/>
      </Link>
      <div className={sass.content}>
        <h3>{el.title}</h3>
        <div className={sass.charakter}>
          <h4>Бренд <span>{el.brand}</span></h4>
          <h4>Высота волны, мм <span>{el.waveHeight}</span></h4>
          <h4>Высота ступеньки, мм <span>{el.stepHeight}</span></h4>
          <h6>от <span>{el.price} ₽ / м²</span></h6>
          <div className={sass.select}>
            <label>Цвет</label>
            <select>
              <option value="">{el.color}</option>
            </select>
            <label>Толщина</label>
            <select>
              <option value="">{el.weight}</option>
            </select>
            <label>Поверхность</label>
            <select>
              <option value="">Выбрать</option>
            </select>
          </div>
            <Button variant="primary">
              Рассчитать стоимость
            </Button>
            <Button variant="outline">
              Подробнее о товаре
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;