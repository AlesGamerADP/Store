import { NavLink } from 'react-router-dom';

const HeroBanner = () => {

  return (
    <section className="hero-slider">
    <article className="hero">
      <div className="container d-flex f-direction-column a-items-center g-8">
        <h1 className="hero__title t-align-center">
          Ventas de diferente productos {" "}
          <span className="c-primary">STORE</span>
        </h1>
      </div>
    </article>
        <div className="d-flex f-direction-column a-items-center g-4">
          <p className="hero__paragraph t-align-center">
            Web de venta de productos al estilo temu barato 
          </p>
        </div>
    </section>
  );
};

export default HeroBanner;