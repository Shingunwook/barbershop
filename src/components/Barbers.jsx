import Image from "next/image";

function BarberImage({ src, alt }) {
  return (
    <div
      className="
      relative
      overflow-hidden
      cursor-pointer
      group

      transition-all
      duration-300

      hover:-translate-y-2
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
      "
    >
      <Image
        src={src}
        alt={alt}
        width={402}
        height={268}
        className="
        object-cover

        transition-transform
        duration-300

        group-hover:scale-[1.03]
        "
      />

      <div
        className="
        absolute
        inset-0

        bg-[#FA8112]
        opacity-0

        transition-opacity
        duration-300

        group-hover:opacity-15
        "
      />
    </div>
  );
}

export default function Barbers() {
  return (
    <section
      id="barbers"
      className="bg-white py-[60px]"
    >
      <div className="max-w-7xl mx-auto px-5">

        <h2
          className="
          text-center
          font-roboto
          text-[36px]
          font-bold
          text-[#FA8112]
          mb-[70px]
        "
        >
          Barbeiros
        </h2>

        {/* João */}

        <div
          className="
          text-center lg:text-left
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-[20px]
          mb-[40px]
          "
        >

            <BarberImage
                src="/barbers/Joao.jpg"
                alt="João Silva"
            />

          <div className="w-[331px]">

            <h3
              className="
              font-roboto
              text-[24px]
              font-medium
              text-[#FA8112]
              mb-[20px]
            "
            >
              João Silva
            </h3>

            <h4
              className="
              font-inter
              text-[24px]
              font-medium
              text-black
              mb-[25px]
            "
            >
              Especialista em Fades Modernos
            </h4>

            <p
              className="
              font-inter
              text-[16px]
              text-black
              leading-relaxed
            "
            >
              Com mais de 5 anos de experiência, João destaca-se pelos cortes
              modernos e atenção ao detalhe.
            </p>

          </div>

        </div>

        {/* Miguel */}

            <div
              className="
              flex
              flex-col-reverse
              lg:flex-row
              items-center
              justify-center
              gap-[20px]
              mb-[40px]
              "
            >

            <div
              className="
                w-[331px]
                text-center lg:text-right
                flex
                flex-col
                items-center

                lg:items-end
                lg:mr-[20px]
              "
            >

            <h3
              className="
              font-roboto
              text-[24px]
              font-medium
              text-[#FA8112]
              mb-[20px]
            "
            >
              Miguel Santos
            </h3>

            <h4
              className="
              font-inter
              text-[24px]
              font-medium
              text-black
              mb-[25px]
            "
            >
              Especialista em Barba
            </h4>

            <p
              className="
              font-inter
              text-[16px]
              text-black
              leading-relaxed
            "
            >
              Miguel é especialista em modelação e tratamento de barba,
              garantindo um visual elegante e cuidado.
            </p>

          </div>

            <BarberImage
                src="/barbers/Miguel.jpg"
                alt="Miguel Santos"
            />

        </div>

        {/* André */}

        <div
          className="
          flex
          text-center lg:text-left
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-[20px]
          "
        >

            <BarberImage
                src="/barbers/Andre.jpg"
                alt="André Costa"
            />

          <div className="w-[331px]">

            <h3
              className="
              font-roboto
              text-[24px]
              font-medium
              text-[#FA8112]
              mb-[20px]
            "
            >
              André Costa
            </h3>

            <h4
              className="
              font-inter
              text-[24px]
              font-medium
              text-black
              mb-[25px]
            "
            >
              Especialista em Cortes Clássicos
            </h4>

            <p
              className="
              font-inter
              text-[16px]
              text-black
              leading-relaxed
            "
            >
              Apaixonado pelos estilos tradicionais, André combina técnica e
              precisão para criar cortes intemporais.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}