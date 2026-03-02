import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ name, url }) => {
  return (
    <li>
      <Link
        to={url}
        className="relative text-my-brown group font-semibold font-sans text-lg"
      >
        {name}
        <span className="absolute -bottom-1/2 left-1/2 w-0 group-hover:w-full group-hover:left-0 h-1 bg-my-brown transition-all duration-300 hidden md:block"></span>
      </Link>
    </li>
  );
};

export default Navlink;
