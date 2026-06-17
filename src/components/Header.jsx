"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLink =
  "w-full text-center pb-4 border-b border-white/20 cursor-pointer hover:text-[#FA8112] transition-colors duration-300";

  return (
    <header className="relative bg-[#222222] text-white">
      <div
          className="
          relative
          max-w-7xl
          mx-auto
          px-8 md:px-20
          h-25
          flex
          items-center
          justify-between
        "
      >

        <div className="cursor-pointer flex items-center">
          <Image
            src="/logo.svg"
            alt="Black Blade"
            width={110}
            height={110}
          />
        </div>

        <div className="hidden md:flex gap-4">
            <FaInstagram className="text-[20px] xl:text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
            <FaYoutube className="text-[20px] xl:text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
            <FaFacebookF className="text-[20px] xl:text-[24px] cursor-pointer hover:text-[#FA8112] transition-colors duration-300" />
        </div>

        <nav className="hidden md:flex gap-6 xl:gap-8 text-base">
          <a href="#inicio" className="transition-colors duration-300 hover:text-[#F5E7C6] text-[14px] xl:text-[16px]">Início</a>
          <a href="#services" className="transition-colors duration-300 hover:text-[#F5E7C6] text-[14px] xl:text-[16px]">Serviços</a>
          <a href="#barbers" className="transition-colors duration-300 hover:text-[#F5E7C6] text-[14px] xl:text-[16px]">Barbeiros</a>
          <a href="#gallery" className="transition-colors duration-300 hover:text-[#F5E7C6] text-[14px] xl:text-[16px]">Galeria</a>
        </nav>

        <Link
          href="/reservar"
          className="
            hidden md:flex
            cursor-pointer

            text-[#FA8112]
            text-[14px]
            xl:text-[16px]
            hover:text-orange-400

            transition-colors
            duration-300
          "
        >
          Marcar
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            mx-auto
            text-[30px]
            text-white
            cursor-pointer
            focus:outline-none
            outline-none
            transition-transform
            duration-300
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      

<div
  className={`
    md:hidden
    absolute
    top-full
    left-0
    w-full
    bg-[#222222]
    shadow-xl
    z-50

    overflow-hidden

    transition-all
    duration-300

    ${
      menuOpen
        ? "max-h-[500px] opacity-100 py-8"
        : "max-h-0 opacity-0 py-0"
    }
  `}
>

  <div className="flex flex-col items-center gap-5 px-10">

    <a
      href="#inicio"
      onClick={() => setMenuOpen(false)}
      className={mobileLink}
    >
      Início
    </a>

    <a
      href="#services"
      onClick={() => setMenuOpen(false)}
      className={mobileLink}
    >
      Serviços
    </a>

    <a
      href="#barbers"
      onClick={() => setMenuOpen(false)}
      className={mobileLink}
    >
      Barbeiros
    </a>

    <a
      href="#gallery"
      onClick={() => setMenuOpen(false)}
      className={mobileLink}
    >
      Galeria
    </a>

    <button
      className="
        cursor-pointer
        text-[#FA8112]
        font-medium
        hover:text-orange-400
        transition-colors
        duration-300
      "
    >
      Marcar
    </button>

    <div className="flex gap-6 text-[22px] mt-2">

      <FaInstagram
        className="
          cursor-pointer
          hover:text-[#FA8112]
          transition-colors
          duration-300
        "
      />

      <FaYoutube
        className="
          cursor-pointer
          hover:text-[#FA8112]
          transition-colors
          duration-300
        "
      />

      <FaFacebookF
        className="
          cursor-pointer
          hover:text-[#FA8112]
          transition-colors
          duration-300
        "
      />

    </div>

</div>

  </div>
    </header>
  );
}