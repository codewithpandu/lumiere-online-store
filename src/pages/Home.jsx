import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Category />
        <FeaturedProduct />
      </main>
    </div>
  );
};

export default Home;
