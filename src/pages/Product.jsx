import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../products.js";
import { ProductCard } from "../components/ui/Card";
import { CartTab } from "../components/CartTab.jsx";
const Product = () => {
  return (
    <main className="relative">
      <div>
        <Header />
        <div className="w-full md:w-7xl grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 py-24 p-4">
          {products.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
        <Footer />
      </div>
      {/* <CartTab /> */}
    </main>
  );
};

export default Product;
