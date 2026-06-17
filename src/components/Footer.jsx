import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#BE8C54] py-[45px]">

      <div
        className="
          max-w-7xl
          mx-auto

          px-5

          flex
          flex-col

          sm:grid
          sm:grid-cols-3

          items-center

          gap-8
          sm:gap-0
        "
      >

        <div className="flex justify-center sm:justify-start">

          <Image
            src="/logo.svg"
            alt="Black Blade"

            width={110}
            height={110}

            className="

              h-auto

              cursor-pointer

              transition-all
              duration-300

              hover:scale-105
              hover:-translate-y-1
            "
          />

        </div>

        <div
          className="
            flex

            justify-center
            items-center

            gap-6
            sm:gap-8
            lg:gap-12
          "
        >

          <a
            href="#"
            className="
              text-white

              text-[24px]
              lg:text-[28px]
              cursor-pointer

              transition-all
              duration-300

              hover:scale-110
              hover:-translate-y-1
            "
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="
              text-white

              text-[24px]
              lg:text-[28px]

              cursor-pointer

              transition-all
              duration-300

              hover:scale-110
              hover:-translate-y-1
            "
          >
            <FaYoutube />
          </a>

          <a
            href="#"
            className="
              text-white

              text-[24px]
              lg:text-[28px]

              cursor-pointer

              transition-all
              duration-300

              hover:scale-110
              hover:-translate-y-1
            "
          >
            <FaFacebookF />
          </a>

        </div>

        <div className="flex justify-center sm:justify-end">

          <div
            className="
              font-roboto

              text-center
              sm:text-right

              text-[14px]
              lg:text-[16px]

              text-white

              leading-tight
            "
          >
            <p>© 2026 BlackBlade</p>
            <p>Todos os direitos reservados.</p>
          </div>

        </div>

      </div>

    </footer>
  );
}