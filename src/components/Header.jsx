import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-20 h-25 flex items-center justify-between">

        <div className="cursor-pointer flex items-center">
          <Image
            src="/logo.svg"
            alt="Black Blade"
            width={110}
            height={110}
          />
        </div>

        <div className="hidden md:flex gap-4">
            <FaInstagram className="text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
            <FaYoutube className="text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
            <FaFacebookF className="text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
        </div>

        <nav className="hidden md:flex gap-8 text-base">
          <a href="#inicio" className="transition-colors duration-300 hover:text-[#F5E7C6]">Início</a>
          <a href="#services" className="transition-colors duration-300 hover:text-[#F5E7C6]">Serviços</a>
          <a href="#barbers" className="transition-colors duration-300 hover:text-[#F5E7C6]">Barbeiros</a>
          <a href="#gallery" className="transition-colors duration-300 hover:text-[#F5E7C6]">Galeria</a>
        </nav>

        <button className="cursor-pointer text-[#FA8112] text-[16px] hover:text-orange-400 transition-colors duration-300">
          Marcar
        </button>

      </div>
    </header>
  );
}