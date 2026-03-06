import React from "react";
import { FeaturedCard } from "./ui/Card";
import { FaCar } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const featuredList = [
  {
    image: <FaCar />,
    title: "Gratis Ongkir",
    description: "Gratis Ongkir untuk semua produk di Lumiere",
  },
  {
    image: <FaShield />,
    title: "Pembayaran Aman",
    description: "Pembayaran aman dan terpercaya",
  },
  {
    image: <FaShield />,
    title: "Pembayaran Aman",
    description: "Pembayaran aman dan terpercaya",
  },
  {
    image: <FaShield />,
    title: "Pembayaran Aman",
    description: "Pembayaran aman dan terpercaya",
  },
];

const Featured = () => {
  return (
    <section className="bg-primary text-my-brown py-20 px-4">
      <div className="w-full md:max-w-7xl m-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          Mengapa Memilih Kami?
        </h1>
        <p className="font-sans my-4 text-center md:text-left">
          Kami berkomitmen memberikan pengalaman berbelanja terbaik untuk Anda
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredList.map((item, index) => (
            <FeaturedCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
