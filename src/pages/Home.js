import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRooms from '../components/FeaturedRooms'
import Services from "../components/Services";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
        <Link to="/" className="btn-primary">
          our Rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
    </>
  );
}

export default Home;
