import "./ExploreAll.css";

type Destination = {
  id: number;
  title: string;
  location: string;
  image: string;
  excerpt: string;
  tags: string[];
};

const ALL: Destination[] = [
  {
    id: 1,
    title: "Meghalaya Waterfalls",
    location: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Explore the majestic waterfalls and lush green landscapes of Meghalaya, known as the abode of clouds.",
    tags: ["Meghalaya", "Trekking", "Moderate"],
  },
  {
    id: 2,
    title: "Kaziranga National Park",
    location: "Assam",
    image:
      "https://images.unsplash.com/photo-1530704771069-198f3d41f861?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Home to the one-horned rhinoceros, Kaziranga offers thrilling wildlife encounters in its vast grasslands.",
    tags: ["Assam", "Wildlife Safari", "Easy"],
  },
  {
    id: 3,
    title: "Tawang Monastery",
    location: "Arunachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1545330905-7a1d3bc0f336?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Visit the largest monastery in India, nestled amidst the Himalayas with breathtaking views.",
    tags: ["Arunachal Pradesh", "Cultural", "Moderate"],
  },
  {
    id: 4,
    title: "Loktak Lake",
    location: "Manipur",
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Experience the unique floating phumdis on Loktak Lake, the largest freshwater lake in North East India.",
    tags: ["Manipur", "Boating", "Easy"],
  },
  {
    id: 5,
    title: "Dzukou Valley",
    location: "Nagaland",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Trek through the stunning Dzukou Valley, famous for its seasonal flowers and pristine natural beauty.",
    tags: ["Nagaland", "Trekking", "Hard"],
  },
  {
    id: 6,
    title: "Agartala Ujjayanta Palace",
    location: "Tripura",
    image:
      "https://images.unsplash.com/photo-1549887534-0e6fe1b4d2c0?auto=format&fit=crop&w=1400&q=60",
    excerpt:
      "Explore the magnificent Ujjayanta Palace, a former royal palace and now a state museum in Agartala.",
    tags: ["Tripura", "History", "Easy"],
  },
];

function Chip({ text }: { text: string }) {
  return <span className="chip">{text}</span>;
}

function Card({ d }: { d: Destination }) {
  return (
    <article className="all-card" key={d.id}>
      <div
        className="all-card__image"
        style={{ backgroundImage: `url(${d.image})` }}
        role="img"
        aria-label={d.title}
      />
      <div className="all-card__body">
        <h3 className="all-card__title">{d.title}</h3>
        <p className="all-card__excerpt">{d.excerpt}</p>
        <div className="all-card__tags" aria-hidden>
          {d.tags.map((t) => (
            <Chip text={t} key={t} />
          ))}
        </div>
        <a className="btn btn-primary all-card__cta" href="#">
          View Details
        </a>
      </div>
    </article>
  );
}

function ExploreAll(): JSX.Element {
  return (
    <section className="explore-all" aria-labelledby="all-title">
      <div className="explore-all__inner">
        <header className="section-header">
          <h2 id="all-title">All Destinations</h2>
        </header>

        <div className="all-grid">
          {ALL.map((d) => (
            <Card d={d} key={d.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreAll;
