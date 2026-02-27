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
    <header className="fixed w-full top-0 md:p-4 bg-(--color-secondary) border-b border-b-(--color-my-brown)">
      <div className="relative max-w-7xl mx-auto p-4 md:p-0">
        <div className="flex justify-between items-center ">
          <Link
            to="/"
            className="text-3xl font-semibold text-(--color-my-brown)"
          >
            Lumiere
          </Link>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div
            className={`${isOpen ? "flex" : "hidden"} md:flex absolute gap-8 right-0 flex-col bg-taupe-200 border-t-2 top-full 2 w-full h-96 md:flex-row md:bg-transparent md:border-none md:w-auto md:top-2 md:h-auto p-4 md:p-0`}
          >
            <nav className="">
              <ul className="flex md:flex-row md:items-center md:gap-4 flex-col text-2xl pt-4 md:text-lg md:pt-0">
                {url.map((item, index) => (
                  <Navlink key={index} name={item.name} url={item.path} />
                ))}
              </ul>
            </nav>
            <div className="flex md:justify-center">
              <button className="relative text-(--color-my-brown) group font-semibold ">
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
