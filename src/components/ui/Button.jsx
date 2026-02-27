import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-(--color-my-brown) py-2 px-4 text-white font-sans rounded rounded-xl">
      {children}
    </button>
  );
};

export default PrimaryButton;
