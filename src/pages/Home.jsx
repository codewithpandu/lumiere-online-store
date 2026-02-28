import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Category />
      </main>
    </div>
  );
};

export default Home;
