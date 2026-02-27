import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ name, url }) => {
  return (
    <li>
      <Link
        to={url}
        className="relative text-(--color-my-brown) group font-semibold "
      >
        {name}
        <span className="absolute -bottom-1/2 left-1/2 w-0 group-hover:w-full group-hover:left-0 h-1 bg-(--color-my-brown) transition-all duration-300"></span>
      </Link>
    </li>
  );
};

export default Navlink;
