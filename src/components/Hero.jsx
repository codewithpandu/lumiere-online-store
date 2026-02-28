import React from "react";
import Image1 from "../assets/img/shopping.jpg";
import { PrimaryButton, SecondaryButton } from "./ui/Button";

const Hero = () => {
  return (
    <section className="bg-primary w-full p-4">
      <div className="w-full lg:max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 m-auto py-24 md:py-32 gap-8">
        <div>
          <span className="text-sm text-(--color-my-brown) bg-taupe-200 px-4 py-2 rounded-full">
            ● Koleksi Terbaru 2026
          </span>
          <h3 className="text-5xl md:text-7xl mt-4 font-extrabold">
            Temukan Gaya
            <span className="text-my-brown"> Elegan</span> Anda
          </h3>
          <p className="text-my-brown text-md font-sans font-medium mt-4 w-full md:w-2/3">
            Koleksi fashion premium yang dikurasi khusus untuk menghadirkan
            keanggunan dan kenyamanan dalam setiap momen kehidupan Anda.
          </p>
          <div className="mt-4 flex gap-4">
            <PrimaryButton>Belanja Sekarang</PrimaryButton>
            <SecondaryButton>Lihat Katalog</SecondaryButton>
          </div>
          <div className="grid grid-cols-3 mt-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                15K+
              </h2>
              <p className="leading-relaxed text-sm">Pelanggan Puas</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                500+
              </h2>
              <p className="leading-relaxed text-sm">Prouduk Premium</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4.9
              </h2>
              <p className="leading-relaxed text-sm">Rating</p>
            </div>
          </div>
        </div>
        <div className="max-w-full h-150 lg:max-w-125 lg:h-175 rounded-3xl overflow-x-hidden place-self-end">
          <img src={Image1} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
