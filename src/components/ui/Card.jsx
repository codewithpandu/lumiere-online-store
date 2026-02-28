import React from "react";

export const CategoryCard = (props) => {
  const { name, produk, image } = props.data;

  return (
    <div className="w-full min-h-80 md:min-h-96 lg:max-h-120  overflow-hidden rounded-2xl relative group hover:-translate-y-1">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300"
      />
      <div className="-translate-y-[150%] text-center">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-white font-sans">{produk} Produk</p>
      </div>
      <div className="absolute w-full h-full top-0 bg-black/20"></div>
    </div>
  );
};
