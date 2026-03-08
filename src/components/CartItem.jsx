import React, { useEffect, useState } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";
import RupiahCurrency from "../utils/RupiahCurrency";
const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = products.filter((product) => product.id === productId);
    setProduct(getProduct[0]);
  }, [productId]);
  console.log(product);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      }),
    );
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId: productId, quantity: quantity + 1 }));
  };
  return (
    <div className="flex justify-between text-secondary gap-4 p-2 items-center bg-secondary/30 backdrop-blur-2xl">
      <img src={product.image} className="w-16 h-20" alt="" />
      <p className="font-sans">{product.name}</p>
      <p className="font-sans">{RupiahCurrency(product.price * quantity)}</p>
      <div className="flex gap-2">
        <button
          className="w-5 h-5 cursor-pointer font-bold flex justify-center bg-primary text-my-brown rounded-full"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <p className="font-sans">{quantity}</p>
        <button
          className="w-5 h-5 cursor-pointer font-bold flex justify-center bg-primary text-my-brown rounded-full"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
