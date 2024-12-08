import React from "react";
import women from '../assets/WomenGlobe.png'; 

function Welcome() {
  return (
    <section className="bg-white mt-14 pl-8 pt-8 text-center flex items-center">
      <div className="text-[#2C5E1A] text-left flex-1">
        <h1 className="text-5xl font-bold mb-14 border-b-4 border-[#2C5E1A] pb-4 w-[50%]">
          Welcome <br />to Our Comunity
        </h1>
        <h2 className="text-4xl font-bold mb-4">
          Caring for the Earth, Our Only Home
        </h2>
        <p className="text-lg">
        Temukan keindahan alam dan pentingnya menjaga kelestariannya.
          Mari peluk dunia ini dengan cinta, seperti semangat merawat yang ditunjukkan di sini.
          Bersama-sama, kita bisa membuat perbedaan.
        </p>
      </div>

      <img
        src={women}
        alt="Woman Embracing Globe"
        className=" bottom-[-20px] right-0 w-1/3 object-cover"
      />
    </section>
  );
}

export default Welcome;
