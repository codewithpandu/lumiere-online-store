import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePlace } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const fastMenuLink = [
  {
    path: "#",
    name: "Tentang Kami",
  },
  {
    path: "#",
    name: "Produk Terbaru",
  },
  {
    path: "#",
    name: "Promo & Diskon",
  },
  {
    path: "#",
    name: "Blog Fashion",
  },
  {
    path: "#",
    name: "Karir",
  },
];

const customerMenuLink = [
  {
    path: "#",
    name: "Chat Pemesanan",
  },
  {
    path: "#",
    name: "Pengiriman",
  },
  {
    path: "#",
    name: "Pengembalian",
  },
  {
    path: "#",
    name: "FAQ",
  },
  {
    path: "#",
    name: "Syarat & Ketentuan",
  },
];

const contactMenuLink = [
  {
    path: "#",
    icon: <MdOutlinePlace />,
    name: "Jl. Fashion Boulevard No. 123, Jakarta Selatan, 12345",
  },
  {
    path: "#",
    icon: <FiPhoneCall />,
    name: "+6281234567890",
  },
  {
    path: "#",
    icon: <IoMailOutline />,
    name: "lumiere@email.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-my-brown p-4 text-secondary">
      <div className="py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:max-w-7xl m-auto">
        <div>
          <h2 className="text-3xl pb-4 font-bold">Lumière</h2>
          <p className="font-sans text-sm">
            Destinasi fashion premium untuk gaya elegan dan modern. Kualitas
            terbaik, harga terjangkau.
          </p>
        </div>
        <div>
          <p className="text-xl font-bold pb-2">Menu Cepat</p>
          <nav>
            <ul className="flex flex-col gap-1">
              {fastMenuLink.map((item, index) => (
                <li className="font-sans text-sm ">
                  <Link to={item.path} key={index}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-xl font-bold pb-2">Layanan Pelanggan</p>
          <nav>
            <ul className="flex flex-col gap-1">
              {customerMenuLink.map((item, index) => (
                <li className="font-sans text-sm ">
                  <Link to={item.path} key={index}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-xl font-bold pb-2">Hubungi Kami</p>
          {contactMenuLink.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className="font-sans text-sm flex gap-2 items-center py-1"
            >
              <span className="text-lg mb-auto">{item.icon}</span> {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
