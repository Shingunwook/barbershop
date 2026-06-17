import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function Reservar() {
  return (
    <main className="min-h-screen bg-[#1E1E1E]">
<div className="h-24 flex items-center justify-between px-10">

  <Link href="/">
    <Image
      src="/logo.svg"
      alt="Black Blade"
      width={90}
      height={90}
      className="
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
      "
    />
  </Link>

  <Link
    href="/"
    className="
      flex
      items-center
      gap-2

      text-white

      hover:text-[#FA8112]

      transition-colors
      duration-300
    "
  >
    <FaArrowLeft />
    Voltar
  </Link>

</div>

      {/* Card */}
      <div className="flex justify-center px-5">

        <div
          className="
            w-full
            max-w-[600px]

            bg-[#ECECEC]

            rounded-[30px]

            shadow-lg

            px-10
            py-12
          "
        >

          <h1
            className="
              text-center

              text-[38px]

              font-bold

              text-[#222222]

              mb-10
            "
          >
            Reservar Horário
          </h1>

          <div className="mb-7">

            <p className="mb-2 font-medium text-[#222222]">
              Serviço
            </p>

            <select
              className="
                w-full

                p-4

                rounded-xl

                bg-white
                text-[#222222]

                border-2
                border-gray-300

                outline-none

                focus:border-[#FA8112]
              "
            >
              <option>Corte Masculino</option>

              <option>Barba</option>

              <option>Corte + Barba</option>

              <option>Corte Premium</option>

            </select>

          </div>

          <div className="mb-7">

            <p className="mb-2 font-medium text-[#222222]">
              Barbeiro
            </p>

            <select
              className="
                w-full

                p-4

                rounded-xl

                bg-white

                border-2
                border-gray-300
                text-[#222222]

                outline-none

                focus:border-[#FA8112]
              "
            >

              <option>João Silva</option>

              <option>Miguel Santos</option>

              <option>Carlos Pereira</option>

            </select>

          </div>

          <div className="mb-7">

            <p className="mb-2 font-medium text-[#222222]">
              Data
            </p>

            <input
              type="date"

              className="
                w-full

                p-4

                rounded-xl

                border-2
                border-gray-300
                text-[#222222]

                outline-none

                focus:border-[#FA8112]
              "
            />

          </div>

          <div className="mb-10">

            <p className="mb-2 font-medium text-[#222222]">
              Hora
            </p>

            <select
              className="
                w-full

                p-4

                rounded-xl

                bg-white

                border-2
                border-gray-300
                text-[#222222]

                outline-none

                focus:border-[#FA8112]
              "
            >

              <option>09:00</option>

              <option>10:00</option>

              <option>11:00</option>

              <option>14:00</option>

              <option>15:00</option>

              <option>16:00</option>

            </select>

          </div>

          <button

            className="

              w-full

              h-[70px]

              rounded-[25px]

              bg-[#222222]

              border-[4px]
              border-[#FAF3E1]

              text-[#FA8112]

              text-[40px]

              font-roadrage

              transition-all

              duration-300

              hover:bg-[#FA8112]

              hover:text-white

              cursor-pointer

            "

          >

            Marcar Agora

          </button>

        </div>

      </div>

    </main>
  );
}