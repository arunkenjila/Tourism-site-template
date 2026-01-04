import "./ExploreFeatured.css";

type Destination = {
  id: number;
  title: string;
  location: string;
  image: string;
  excerpt: string;
};

const DATA: Destination[] = [
  {
    id: 1,
    title: "Ziro Valley",
    location: "Arunachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=60",
    excerpt:
      "Rolling paddy fields, pine forests, and the slow-living Apatani villages.",
  },
  {
    id: 2,
    title: "Cherrapunji",
    location: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    excerpt: "Mighty waterfalls, living root bridges and misty hills.",
  },
  {
    id: 3,
    title: "Kaziranga",
    location: "Assam",
    image:
      "https://images.unsplash.com/photo-1505765057875-2f2b6c6014d0?auto=format&fit=crop&w=1200&q=60",
    excerpt:
      "World-famous wildlife sanctuary and the home of the one-horned rhino.",
  },
  {
    id: 4,
    title: "Tawang Monastery",
    location: "Arunachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1569741208779-97c2b1e3b9b5?auto=format&fit=crop&w=1200&q=60",
    excerpt:
      "A serene high-altitude monastery surrounded by snow-capped peaks.",
  },
];

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <article className="dest-card" key={dest.id}>
      <div
        className="dest-card__image"
        style={{ backgroundImage: `url(${dest.image})` }}
        role="img"
        aria-label={dest.title}
      />
      <div className="dest-card__body">
        <h3 className="dest-card__title">{dest.title}</h3>
        <p className="dest-card__loc">{dest.location}</p>
        <p className="dest-card__excerpt">{dest.excerpt}</p>
        <a className="btn btn-ghost" href="#">
          Explore
        </a>
      </div>
    </article>
  );
}

function ExploreFeatured(): JSX.Element {
  return (
    <section className="explore-featured" aria-labelledby="featured-title">
      <div className="explore-featured__inner">
        <header className="section-header">
          <h2 id="featured-title">Featured Destinations</h2>
          <p>Handpicked places to experience the best of North East India.</p>
        </header>

        <div className="dest-grid">
          {DATA.map((d) => (
            <DestinationCard dest={d} key={d.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreFeatured;
