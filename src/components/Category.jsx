import React from "react";
import Image2 from "../assets/img/pakaian-pria.jpg";
import Image3 from "../assets/img/pakaian-wanita.jpg";
import Image4 from "../assets/img/aksesoris.jpg";
import Image5 from "../assets/img/tas.jpg";
import { CategoryCard } from "./ui/Card";

const categoryList = [
  {
    name: "Pakaian Pria",
    produk: 200,
    image: Image2,
  },
  {
    name: "Pakaian Wanita",
    produk: 300,
    image: Image3,
  },
  {
    name: "Aksesoris",
    produk: 300,
    image: Image4,
  },
  {
    name: "Tas & Sepatu",
    produk: 300,
    image: Image5,
  },
];

const Category = () => {
  return (
    <section className="bg-secondary w-full p-4">
      <div className="w-full md:max-w-7xl m-auto py-20">
        <div>
          <h1 className="text-center text-3xl md:text-5xl text-my-brown font-bold">
            Jelajahi Kategori
          </h1>
          <p className="text-center md:w-1/2 md:m-auto text-md py-4 font-sans text-my-brown">
            Temukan koleksi lengkap kami yang dikurasi untuk setiap gaya dan
            kebutuhan Anda
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          {categoryList.map((item, index) => (
            <CategoryCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
