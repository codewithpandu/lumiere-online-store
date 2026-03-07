import React from "react";
import { ProductCard } from "./ui/Card";
import { products } from "../products";

const FeaturedProduct = () => {
  return (
    <section className="bg-my-brown text-secondary py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] w-full md:max-w-7xl m-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Produk Unggulan
          </h1>
          <p className="font-sans my-4 text-center md:text-left">
            Pilihan terbaik dari koleksi kami yang paling diminati
          </p>
        </div>
        <button className="font-sans border w-full md:w-auto py-2 px-6 rounded-xl cursor-pointer place-self-center">
          Lihat Semua Produk
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-7xl m-auto pt-8">
        {products.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
