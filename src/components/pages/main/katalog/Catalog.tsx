import { Button } from "@/components/ui/Button/Button";
import ProductCard from "@/components/ui/productCard/ProductCard";
import proImg from "@/assets/images/Product picture.svg";
import sass from "./Catalog.module.scss";

export interface TestDataProps {
  id: number;
  img: string;
  title: string;
  brand: string;
  waveHeight: string;
  stepHeight: string;
  price: string;
  color: string;
  weight: string;
}

const testData: TestDataProps[] = [
  {
    id: 1,
    img: proImg,
    title: "Металлочерепица Classic",
    brand: "Grande Line",
    waveHeight: "23.5",
    stepHeight: "20",
    price: "433",
    color: "RAL 7004",
    weight: "0.4",
  },
  {
    id: 2,
    img: proImg,
    title: "Металлочерепица Classic",
    brand: "Grande Line",
    waveHeight: "23.5",
    stepHeight: "20",
    price: "433",
    color: "RAL 7004",
    weight: "0.4",
  },
  {
    id: 3,
    img: proImg,
    title: "Металлочерепица Classic",
    brand: "Grande Line",
    waveHeight: "23.5",
    stepHeight: "20",
    price: "433",
    color: "RAL 7004",
    weight: "0.4",
  },
  {
    id: 4,
    img: proImg,
    title: "Металлочерепица Classic",
    brand: "Grande Line",
    waveHeight: "23.5",
    stepHeight: "20",
    price: "433",
    color: "RAL 7004",
    weight: "0.4",
  },
];

const Catalog = () => {
  return (
    <section className={sass.Catalog}>
      <div className="container">
        <h1>КАТАЛОГ ТОВАРОВ</h1>
        <div className={sass.category}>
          <Button variant="outline">Все материалы</Button>
          <Button variant="outline">Металлочерепица</Button>
          <Button variant="outline">Профнастил</Button>
          <Button variant="outline">Фальцевая кровля</Button>
        </div>
        <h2>МЕТАЛЛОЧЕРЕПИЦА</h2>
        <div className={sass.product}>
          {testData.map((el: TestDataProps) => (
            <ProductCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
