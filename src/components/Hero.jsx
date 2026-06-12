import Image from "next/image";

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
        <div className="h-full flex justify-end">
          <div className="max-w-[653px] mr-[160px] mt-[140px]">
            <h1 className="font-roboto text-[40px] font-bold leading-[1.15]">
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

            <button
              className="
                mt-[184px]
                w-[318px]
                h-[92px]
                ml-[60px]
                flex
                items-center
                justify-center
                bg-[#222222]
                border-[5px]
                border-[#FAF3E1]
                rounded-[30px]
                font-roadrage
                text-[56px]
                text-[#FA8112]
                transition-all
                duration-300
                hover:bg-[#FA8112]
                hover:text-white
                cursor-pointer
              "
            >
              marcar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}