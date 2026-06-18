"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Admin() {

  const router = useRouter();
    function handleLogout() {
      localStorage.removeItem("admin");
      router.push("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex justify-center items-center px-5">

      <div
        className="
          w-full
          max-w-[500px]
          bg-[#ECECEC]
          rounded-[30px]
          px-10
          py-12
          shadow-lg
        "
      >

        <h1
          className="
            text-center
            text-[40px]
            font-bold
            mb-10
            text-[#222222]
          "
        >
          Painel Admin
        </h1>

        <div className="flex flex-col gap-6">

          <Link
            href="/admin/services"
            className="
              bg-[#222222]
              text-[#FA8112]
              rounded-[20px]
              py-5
              text-center
              font-semibold
              hover:bg-[#FA8112]
              hover:text-white
              transition-all
            "
          >
            Serviços
          </Link>

          <Link
            href="/admin/barbers"
            className="
              bg-[#222222]
              text-[#FA8112]
              rounded-[20px]
              py-5
              text-center
              font-semibold
              hover:bg-[#FA8112]
              hover:text-white
              transition-all
            "
          >
            Barbeiros
          </Link>

          <Link
            href="/admin/reservations"
            className="
              bg-[#222222]
              text-[#FA8112]
              rounded-[20px]
              py-5
              text-center
              font-semibold
              hover:bg-[#FA8112]
              hover:text-white
              transition-all
            "
          >
            Reservas
          </Link>
          
          <button
              onClick={handleLogout}
              className="
                absolute
                top-8
                right-8
                px-6
                py-3
                rounded-xl
                bg-red-500
                text-white
                font-bold
                hover:bg-red-600
                transition-all
                cursor-pointer
              "
            >
              Logout
          </button>
        </div>
      </div>
    </main>
  );
}