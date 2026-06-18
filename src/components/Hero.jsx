import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px]">

      <Image
        src="/hero/hero.jpg"
        alt="Black Blade"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-20">
        <div className="h-full flex justify-center">
          <div
            className="
            max-w-[653px]
            mt-[140px]
            flex
            flex-col
            items-center
            text-center
          "
          >
            <h1
              className="
                font-roboto
                text-[32px]
                lg:text-[36px]
                xl:text-[40px]
                font-bold
                leading-[1.15]
              "
            >

              <span className="text-[#FA8112]">
                A BLACK BLADE
              </span>{" "}

              <span className="text-white">
                É SINÓNIMO DE
                <br />
                PROFISSIONALISMO
                <br />
                E RESPEITO PELO CLIENTE
              </span>

            </h1>

          <Link
            href="/reservar"
            className="
              mt-[140px]
              w-[260px]
              lg:w-[290px]
              xl:w-[318px]
              h-[75px]
              lg:h-[85px]
              xl:h-[92px]
              flex
              items-center
              justify-center
              bg-[#222222]
              border-[5px]
              border-[#FAF3E1]
              rounded-[30px]
              font-roadrage
              text-[44px]
              lg:text-[50px]
              xl:text-[56px]
              text-[#FA8112]
              transition-all
              duration-300
              hover:bg-[#FA8112]
              hover:text-white
              cursor-pointer
            "
          >
            marcar agora
          </Link>

          </div>

        </div>

      </div>

    </section>
  );
}