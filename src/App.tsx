import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ExploreFeatured from "./components/explore-featured/ExploreFeatured";
import ExploreAll from "./components/explore-all/ExploreAll";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />

        <section className="site-intro" aria-labelledby="intro-title">
          <h2 id="intro-title">Your Gateway to an Unforgettable Adventure</h2>
          <p>
            North East India, a land of breathtaking mountains, lush valleys,
            exotic wildlife, and ancient traditions, awaits your discovery.
            North East Explorer is your trusted companion, offering curated
            tours and detailed guides to help you experience this incredible
            region.
          </p>
        </section>

        <ExploreFeatured />

        <ExploreAll />

        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
