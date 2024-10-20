import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/Hero.png';
import '../index.css'; 

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/create-product');
  };

  return(
    <>
      <div className="flex justify-between items-center p-[10px] bg-[#37517E] pl-[50px] pt-[98px] pb-[98px] mt-8">
        <div className="flex-1 text-[24px] leading-[1.5] p-[10px] text-white ml-0">
          <h1 className='font-bold text-[38px]'>Better Solutions For Your Business</h1>
          <p>We are a team of talented designers making websites with Bootstrap.</p>
          <button className="text-[16px] bg-transparent text-white border-none cursor-pointer rounded-[50px] px-[25px] py-[15px] mr-[10px] mt-8 hover:bg-[#47B2E4]">
            Get Started
          </button>
          <button className="text-[16px] bg-transparent text-white border-none cursor-pointer rounded-[50px] px-[25px] py-[15px] mr-[10px] mt-8 hover:bg-[#47B2E4]">
            Watch Video
          </button>
        </div>
        <div className="flex-1">
          <img src={Hero} alt="gambar" className="w-[90%] h-auto" />
        </div>
      </div>
      
      <div className="bg-[#F3F5FA] flex flex-col items-center text-center p-[50px]">
        <div className="my-[10px]">
          <h2 className="text-[#37517E] text-[24px]">Join Our Newsletter</h2>
        </div>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        
        <div className="my-[10px]">
          <form action="#">
            <input className="w-[516px] h-[50px] rounded-[50px] border-transparent shadow-gray p-[15px] shadow-lg outline-none" type="text" required="" />
            <button className="text-[18px] bg-[#47B2E4] text-white border-none cursor-pointer rounded-[50px] px-[25px] py-[15px] mr-[10px] hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>

        <button onClick={handleNavigation} className="bg-[#47B2E4] text-white py-2 px-4 rounded-[50px] mt-8 hover:bg-blue-500">
          Go to Create Product
        </button>
      </div>

      <div className="flex justify-center items-start flex-wrap m-[20px]">
        <div className="m-[10px] p-[20px] max-w-[400px] text-left">
          <h1 className="text-[28px] text-[#37517E]">ARSHA</h1>
          <ul className="text-[18px] list-none p-[10px] m-0">
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li>
            <li>United States</li>
            <li><b>Phone:</b> +1 5589 55488 55</li>
            <li><b>Email:</b> info@example.com</li>
          </ul>
        </div>
        <div className="m-[10px] p-[20px] max-w-[400px] text-left">
          <h2 className="text-[28px] text-[#37517E]">Useful Links</h2>
          <ul className="text-[18px] list-none p-[10px] m-0">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="m-[10px] p-[20px] max-w-[400px] text-left">
          <h2 className="text-[28px] text-[#37517E]">Our Services</h2>
          <ul className="text-[18px] list-none p-[10px] m-0">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="m-[10px] p-[20px] max-w-[400px] text-left">
          <h2 className="text-[28px] text-[#37517E]">Our Social Networks</h2>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="flex justify-around items-center pt-[10px]">
            <button className="text-[28px] bg-[#47B2E4] border-none cursor-pointer rounded-[50px] p-[32px] mr-[10px]" />
            <button className="text-[28px] bg-[#47B2E4] border-none cursor-pointer rounded-[50px] p-[32px] mr-[10px]" />
            <button className="text-[28px] bg-[#47B2E4] border-none cursor-pointer rounded-[50px] p-[32px] mr-[10px]" />
            <button className="text-[28px] bg-[#47B2E4] border-none cursor-pointer rounded-[50px] p-[32px] mr-[10px]" />
          </div>
        </div>
      </div>

      <footer className="flex justify-between items-center p-[18px] bg-[#37517E] text-white">
        <p className="mx-[28px]">
          © Copyright <b>Arsha.</b> All Rights Reserved
        </p>
        <p className="mx-[28px]">
          Designed by <span className="text-[#47B2E4]">BootstrapMade</span>
        </p>
      </footer>
    </>
  );
}

export default LandingPage;
