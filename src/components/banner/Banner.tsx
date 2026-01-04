import "./Banner.css";

function Banner(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          Uncover the Mystical Charms of North East India
        </h1>
        <p className="hero__subtitle">
          Embark on an extraordinary journey through the unexplored landscapes,
          vibrant cultures, and pristine natural beauty of India's North Eastern
          states.
        </p>
        <a className="btn btn-cta" href="#">
          Explore Destinations
        </a>
      </div>
    </section>
  );
}

export default Banner;
