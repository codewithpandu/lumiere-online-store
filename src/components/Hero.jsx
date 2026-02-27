import React from "react";
import Image1 from "../assets/img/shopping.jpg";
import PrimaryButton from "./ui/Button";

const Hero = () => {
  return (
    <section className="bg-(--color-primary) w-full p-4">
      <div className="w-full lg:max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 m-auto py-24 md:py-32 gap-8">
        <div>
          <span className="text-sm text-(--color-my-brown) bg-taupe-200 px-4 py-2 rounded rounded-full">
            ● Koleksi Terbaru 2026
          </span>
          <h3 className="text-5xl md:text-7xl mt-4 font-[800]">
            Temukan Gaya
            <span className="text-(--color-my-brown)"> Elegan</span> Anda
          </h3>
          <p className="text-(--color-my-brown) text-md font-sans font-[500] mt-4 w-full md:w-2/3">
            Koleksi fashion premium yang dikurasi khusus untuk menghadirkan
            keanggunan dan kenyamanan dalam setiap momen kehidupan Anda.
          </p>
          <div className="mt-4">
            <PrimaryButton>Belanja Sekarang</PrimaryButton>
          </div>
        </div>
        <div className="max-w-full h-[600px] lg:max-w-[500px] lg:h-[700px] rounded rounded-3xl overflow-x-hidden place-self-end">
          <img src={Image1} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
