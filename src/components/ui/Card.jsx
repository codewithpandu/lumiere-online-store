import React from "react";
import RupiahCurrency from "../../utils/RupiahCurrency";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { Link } from "react-router-dom";

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

export const ProductCard = (props) => {
  const { id, name, slug, image, price, rating, review } = props.data;

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden group">
      <div className="w-full h-56 md:h-96 overflow-hidden">
        <Link to={`/product/${slug}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top cursor-pointer group-hover:scale-110 transition duration-300"
          />
        </Link>
      </div>
      <div className="bg-secondary text-my-brown p-4 h-full relative z-10">
        <p className="font-sans text-sm">
          ⭐{rating} <span>({review})</span>
        </p>
        <h3 className="font-bold text-lg">{name}</h3>
        <h3 className="font-sans text-sm">{RupiahCurrency(price)}</h3>
      </div>
      <div
        className="absolute bottom-0 p-4 -translate-y-30 md:translate-y-0 md:group-hover:-translate-y-30 transition duration-300 flex justify-center w-full"
        onClick={handleAddToCart}
      >
        <button className="bg-my-brown cursor-pointer w-full py-4 px-8 text-xs text-white font-semibold font-sans rounded-xl hover:bg-my-brown/80">
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
};

export const FeaturedCard = (props) => {
  const { image, name, description } = props.data;

  return (
    <div className="flex flex-col  bg-white/50 backdrop-blur-md px-4 py-8 justify-center items-center gap-2 rounded-2xl">
      <span className="text-3xl">{image}</span>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="font-sans text-sm text-center">{description}</p>
    </div>
  );
};
