import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart, changeQuantity } from "../store/cart";
import { PrimaryButton } from "../components/ui/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DetailProduct = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = products.filter((product) => product.slug === slug);
    setDetail(getProduct[0]);
  });

  const findProducts = products.find((product) => product.slug === slug);

  if (!findProducts) {
    return <h1>Product Not Found</h1>;
  }

  const starRating = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-[gold] text-2xl">
            ★
          </span>
        ))}

        {halfStar && <span className="text-[gold] text-2xl">☆</span>}

        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-[lightgray] text-2xl">
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: detail.id, quantity: quantity }));
  };

  return (
    <main>
      <Header />
      <div className="body-font overflow-hidden md:max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            alt={detail.name}
            className="w-full md:h-auto lg:justify-self-center lg:max-w-lg h-72 object-cover object-top md:object-center rounded"
            src={detail.image}
          />
          <div>
            <div>
              <h1 className="text-3xl title-font font-medium mb-1">
                {detail.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {starRating([detail.rating])}
                  <span className="text-my-brown ml-3 font-sans">
                    {detail.rating}
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{detail.description}</p>
            </div>
            <div className="flex gap-2 items-center mt-8 justify-between">
              <div className="flex gap-2 items-center">
                <button
                  className="w-15 h-10 cursor-pointer text-2xl font-bold flex justify-center items-center bg-my-brown text-secondary rounded-full"
                  onClick={handleMinusQuantity}
                >
                  -
                </button>
                <p className="font-sans">{quantity}</p>
                <button
                  className="w-15 h-10 cursor-pointer text-2xl font-bold flex justify-center items-center bg-my-brown text-secondary rounded-full"
                  onClick={handlePlusQuantity}
                >
                  +
                </button>
              </div>
              <div onClick={handleAddToCart}>
                <PrimaryButton>Tambahkan ke Keranjang</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DetailProduct;
