import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../products.js";
import { ProductCard } from "../components/ui/Card";
import { CartTab } from "../components/CartTab.jsx";
const Product = () => {
  return (
    <main>
      <div>
        <Header />
        <div className="md:max-w-7xl grid grid-cols-2 lg:grid-cols-3 mx-auto gap-4 py-24 p-4">
          {products.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Product;
