import {
  FaHandScissors,
  FaStar,
  FaHouse,
  FaHandshake,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#222222] py-[35px]"
    >
      <div className="max-w-7xl mx-auto px-20">

        <h2
          className="
            font-roboto
            text-[36px]
            font-bold
            text-[#F5E7C6]
            text-center
            mb-[40px]
          "
        >
          Sobre Nós
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            justify-items-center
          "
        >

          <div className="w-full max-w-[264px]">
            <div className="flex items-center mb-[35px]">
              <FaHandScissors
                size={32}
                className="text-[#FA8112]"
              />

              <h3
                className="
                  ml-[11px]
                  font-inter
                  text-[19px]
                  text-[#FA8112]
                "
              >
                Excelência Profissional
              </h3>
            </div>

            <p
              className="
                font-inter
                text-[15px]
                text-[#F5E7C6]
                leading-relaxed
              "
            >
              Cortes realizados por barbeiros experientes,
              atentos aos detalhes e às tendências mais atuais.
            </p>
          </div>

          <div className="w-full max-w-[264px]">
            <div className="flex items-center mb-[35px]">
              <FaStar
                size={32}
                className="text-[#FA8112]"
              />

              <h3
                className="
                  ml-[11px]
                  font-inter
                  text-[19px]
                  text-[#FA8112]
                "
              >
                Qualidade Garantida
              </h3>
            </div>

            <p
              className="
                font-inter
                text-[15px]
                text-[#F5E7C6]
                leading-relaxed
              "
            >
              Trabalhamos com produtos cuidadosamente
              selecionados para garantir os melhores
              cuidados.
            </p>
          </div>

          <div className="w-full max-w-[264px]">
            <div className="flex items-center mb-[35px]">
              <FaHouse
                size={32}
                className="text-[#FA8112]"
              />

              <h3
                className="
                  ml-[11px]
                  font-inter
                  text-[19px]
                  text-[#FA8112]
                "
              >
                Conforto e Estilo
              </h3>
            </div>

            <p
              className="
                font-inter
                text-[15px]
                text-[#F5E7C6]
                leading-relaxed
              "
            >
              Um ambiente moderno, pensado para
              proporcionar uma experiência única
              a cada visita.
            </p>
          </div>

          <div className="w-full max-w-[264px]">
            <div className="flex items-center mb-[35px]">
              <FaHandshake
                size={32}
                className="text-[#FA8112]"
              />

              <h3
                className="
                  ml-[11px]
                  font-inter
                  text-[19px]
                  text-[#FA8112]
                "
              >
                Serviço à Sua Medida
              </h3>
            </div>

            <p
              className="
                font-inter
                text-[15px]
                text-[#F5E7C6]
                leading-relaxed
              "
            >
              Valorizamos cada cliente e adaptamos os
              nossos serviços às suas necessidades.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}