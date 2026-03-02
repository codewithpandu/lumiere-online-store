import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlink from "./Navlink";
import { FaShoppingCart } from "react-icons/fa";
import Hamburger from "hamburger-react";

const url = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/produk",
    name: "Produk",
  },
  {
    path: "/kategori",
    name: "Kategori",
  },
  {
    path: "/tentang",
    name: "Tentang",
  },
];
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-999 top-0 md:p-4 bg-secondary border-b border-b-my-brown">
      <div className="relative max-w-7xl mx-auto p-4 md:p-0">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-3xl font-semibold text-my-brown">
            Lumiere
          </Link>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div
            className={`${isOpen ? "translate-x-0" : "translate-x-full"}  md:translate-x-0 flex transition duration-300 md:flex absolute gap-8 right-0 flex-col bg-secondary/80 backdrop-blur-xl border-t-2 top-full 2 w-full h-96 md:flex-row md:bg-transparent md:border-none md:w-auto md:top-2 md:h-auto p-4 md:p-0`}
          >
            <nav>
              <ul className="flex md:flex-row md:items-center md:gap-4 flex-col text-2xl pt-4 md:text-lg md:pt-0">
                {url.map((item, index) => (
                  <Navlink key={index} name={item.name} url={item.path} />
                ))}
              </ul>
            </nav>
            <div className="flex md:justify-center border-t md:border-none pt-4 md:pt-0 -translate-y-1">
              <button className="relative cursor-pointer py-2 px-2 rounded-lg text-my-brown group font-semibold hover:bg-my-brown hover:text-primary text-2xl md:text-lg">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
