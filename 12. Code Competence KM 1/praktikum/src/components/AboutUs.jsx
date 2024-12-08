import React from "react";
import Comunity from '../assets/CommunityPlantingDay.jpg';
import Planting from '../assets/plantingComunity.jpg';
import Gardening from '../assets/GardeningBasicsforBeginners.jpg';

function AboutUs() {
  return (
    <section className="px-8 py-12 mt-14 bg-[#F4F4F9]">
      <h2 className="text-3xl font-bold text-center text-[#2C5E1A] mb-8">
        Tentang Kami
      </h2>

      <p className="text-lg text-center mb-8 text-[#4C5D3C]">
        Kami adalah tim yang penuh semangat dan berkomitmen untuk membuat perbedaan positif di dunia melalui situs web kami. 
        Misi kami adalah untuk menghubungkan orang dari berbagai lapisan masyarakat dan menyediakan sumber daya serta 
        informasi yang berharga tentang berbagai topik penting. Dengan membangun komunitas yang berbagi pengetahuan, kami berharap 
        dapat menginspirasi perubahan positif dan mendorong setiap orang untuk berkontribusi pada masa depan yang lebih berkelanjutan, 
        sehat, dan kolaboratif.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={Comunity}
            alt="comunity"
            className="w-full rounded-lg shadow-xl object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#2C5E1A]">Hari Penanaman Pohon Komunitas</h3>
          <p className="text-center text-[#6B7F3E] mt-2">
            Bergabunglah dengan kami dalam hari penanaman pohon komunitas untuk berkontribusi pada masa depan yang lebih hijau.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <img
            src={Planting}
            alt="pslnting"
            className="w-full rounded-lg shadow-xl object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#2C5E1A]">Menanam Bersama</h3>
          <p className="text-center text-[#6B7F3E] mt-2">
            Upaya kolektif kami dalam menanam pohon dan menciptakan ruang hijau membantu memulihkan lingkungan.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <img
          src={Gardening}
          alt="gardening"
          className="w-full md:w-2/3 rounded-lg shadow-xl object-cover"
        />
        <h3 className="text-xl font-semibold text-[#2C5E1A] mt-4">Dasar-dasar Berkebun untuk Pemula</h3>
        <p className="text-center text-[#6B7F3E] mt-2">
          Pelajari dasar-dasar berkebun dan bagaimana Anda dapat memulai kebun kecil Anda sendiri, baik di rumah maupun di komunitas.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
