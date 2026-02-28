import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-my-brown cursor-pointer py-4 px-8 text-white font-semibold font-sans rounded-xl hover:bg-my-brown/80">
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }) => {
  return (
    <button className=" py-4 px-8 font-sans cursor-pointer rounded-xl border font-semibold border-my-brown text-my-brown hover:bg-my-brown hover:text-white">
      {children}
    </button>
  );
};
