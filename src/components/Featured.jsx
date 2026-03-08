import React from "react";
import { FeaturedCard } from "./ui/Card";
import { FaCar } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FaRotateLeft } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";

const featuredList = [
  {
    id: 1,
    image: <FaCar />,
    title: "Gratis Ongkir",
    description: "Gratis Ongkir untuk semua produk di Lumiere",
  },
  {
    id: 2,
    image: <FaShield />,
    title: "Pembayaran Aman",
    description: "Pembayaran aman dan terpercaya",
  },
  {
    id: 3,
    image: <FaRotateLeft />,
    title: "Mudah Dikembalikan",
    description: "Pengembalian gratis dalam 30 hari jika tidak puas",
  },
  {
    id: 4,
    image: <FaHeadphones />,
    title: "Layanan 24/7",
    description: "Tim support kami siap membantu kapan saja",
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
