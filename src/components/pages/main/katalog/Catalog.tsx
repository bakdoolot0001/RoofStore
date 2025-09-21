import sass from "./Catalog.module.scss"

const Catalog = () => {
  return (
    <section className={sass.Catalog}>
      <div className="container">
        <div className={sass.category}>
          <h1>КАТАЛОГ ТОВАРОВ</h1>
          <div className={sass.product}>
            <h1>МЕТАЛЛОЧЕРЕПИЦА</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;