import Image from "next/image";

const services = [
  {
    title: "Corte de Cabelo",
    description:
      "Corte moderno ou clássico, adaptado ao seu estilo e preferências.",
    price: "15€",
    image: "/services/corte.jpg",
  },

  {
    title: "Barba",
    description:
      "Tratamento e definição da barba para um visual cuidado e elegante.",
    price: "10€",
    image: "/services/barba.jpg",
  },

  {
    title: "Corte + Barba",
    description:
      "A combinação perfeita para uma renovação completa do seu visual.",
    price: "20€",
    image: "/services/corteBarba.jpg",
  },

  {
    title: "Corte Infantil",
    description:
      "Corte de cabelo para crianças num ambiente confortável e acolhedor.",
    price: "12€",
    image: "/services/corteInfantil.jpg",
  },

  {
    title: "Serviço Premium",
    description:
      "Inclui corte, barba, lavagem e finalização com produtos premium.",
    price: "30€",
    image: "/services/cortePremium.jpg",
  },

  {
    title: "Tratamento Capilar",
    description:
      "Cuidados especiais para fortalecer e revitalizar o cabelo.",
    price: "18€",
    image: "/services/Capilar.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAFAFA] py-[60px]"
    >
      <div className="max-w-7xl mx-auto px-5">

        <h2
          className="
            font-roboto
            text-[36px]
            font-bold
            text-[#FA8112]
            text-center
            mb-[60px]
          "
        >
          Serviços
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            justify-items-center

            gap-y-[70px]
            gap-x-20
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                w-full
                max-w-[250px]
                min-h-[360px]

                bg-white

                shadow-[2px_2px_7px_rgba(0,0,0,0.25)]

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div
                className="
                  relative
                  w-full
                  h-[167px]
                  mb-[8px]
                "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="
                  pl-[23px]
                  pr-[23px]
                "
              >

                <h3
                  className="
                    font-roboto
                    text-[23px]
                    font-medium
                    text-[#FA8112]

                    mb-[8px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    font-inter
                    text-[16px]
                    text-black
                    leading-snug
                    min-h-[72px]
                    mb-[13px]
                  "
                >
                  {service.description}
                </p>

                <p
                  className="
                    font-inter
                    text-[12px]
                    text-[#FA8112]

                    mb-[16px]
                  "
                >
                  {service.price}
                </p>

                <button
                  className="
                    w-[206px]
                    h-[30px]
                    bg-[#FA8112]
                    font-roadrage
                    text-[24px]
                    text-white
                    flex
                    items-center
                    justify-center

                    mb-[20px]
                    transition-all
                    duration-300
                    hover:bg-[#E67300]
                    hover:-translate-y-1
                    hover:shadow-lg
                    cursor-pointer
                  "
                >
                  marcar agora
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}