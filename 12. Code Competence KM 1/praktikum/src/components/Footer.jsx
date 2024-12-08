import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1A4314] p-4 mt-auto">
      <div className="container mx-auto text-[#B2D2A4]">
        <div className="flex  text-white justify-between items-center">
          <div>
            <p>&copy; 2024</p>
          </div>
          <div className="flex text-white space-x-4">
            <a href="https://www.linkedin.com/in/khurotul-aini-a4a300259/" className="hover:text-[#32CD30]">LinkedIn</a>
            <a href="https://www.instagram.com/xhr.ayni/profilecard/?igsh=MnJhdjVvMDIzeW82" className="hover:text-[#32CD30]">Instagram</a>
            <a href="https://x.com/xhr_ayni?t=Mj4CaYl0deYafXJI3vWNYg&s=09" className="hover:text-[#32CD30]">Twitter</a>
          </div>
        </div>
        <div className="mt-4  text-white">
          <p>Phone: +62 8548 5678 890</p>
          <p>Jl. Jawa Jember, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
