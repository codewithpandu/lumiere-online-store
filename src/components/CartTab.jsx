import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";
import { SecondaryButton } from "./ui/Button";

export const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const toggleCloseTab = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`${!statusTab ? "translate-x-full" : ""} fixed bg-my-brown/80 backdrop-blur-2xl w-full md:w-120 h-full top-0 right-0 z-999 grid grid-rows-[60px_1fr_60px] p-4`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-secondary">Keranjang Belanja</h3>
        <button
          className="text-my-brown font-bold font-sans bg-primary px-2 rounded-full cursor-pointer"
          onClick={toggleCloseTab}
        >
          X
        </button>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          {carts.map((item, index) => (
            <CartItem key={index} data={item} />
          ))}
        </div>
      </div>
      <div>
        <button className=" py-4 px-8 font-sans cursor-pointer rounded-xl bg-secondary font-semibold border-my-brown text-my-brown hover:bg-secondary/90 hover:text-my-brown w-full">
          Chekout
        </button>
      </div>
    </div>
  );
};
