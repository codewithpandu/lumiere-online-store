import React from "react";
import { ProductCard } from "./ui/Card";
import Product1 from "../assets/img/product1.jpg";
import Product2 from "../assets/img/product2.jpg";
import Product3 from "../assets/img/product3.jpg";
import Product4 from "../assets/img/product4.jpg";
import Product5 from "../assets/img/product5.jpg";
import Product6 from "../assets/img/product6.jpg";

const listProduct = [
  {
    name: "Blazer Premium Wool",
    price: 1250000,
    rating: 4.9,
    review: 128,
    image: Product1,
  },
  {
    name: "Dress Elegan Silk",
    price: 800000,
    rating: 4.9,
    review: 200,
    image: Product2,
  },
  {
    name: "Kemeja Premium",
    price: 500000,
    rating: 4.9,
    review: 500,
    image: Product3,
  },
  {
    name: "Celana Chino Classic",
    price: 400000,
    rating: 4.9,
    review: 400,
    image: Product4,
  },
  {
    name: "Tas Kulit Handmade",
    price: 400000,
    rating: 4.9,
    review: 400,
    image: Product5,
  },
  {
    name: "Sepatu Sneakers",
    price: 500000,
    rating: 4.9,
    review: 400,
    image: Product6,
  },
];

const FeaturedProduct = () => {
  return (
    <section className="bg-my-brown text-secondary p-4">
      <div className="py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] w-full md:max-w-7xl m-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Produk Unggulan
          </h1>
          <p className=" font-sans my-4">
            Pilihan terbaik dari koleksi kami yang paling diminati
          </p>
        </div>
        <button className="font-sans border w-full md:w-auto py-2 px-6 rounded-xl cursor-pointer place-self-center">
          Lihat Semua Produk
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-7xl m-auto">
        {}
        {listProduct.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
