import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Product from "../components/Product";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Category />
        <Product />
        <Featured />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
