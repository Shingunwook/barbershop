import Image from "next/image";

const images = [
  "/gallery/Gal-1.jpg",
  "/gallery/Gal-2.jpg",
  "/gallery/Gal-3.jpg",
  "/gallery/Gal-4.jpg",
  "/gallery/Gal-5.jpg",
  "/gallery/Gal-6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        bg-[#FAFAFA]
        pt-[45px]
        pb-[100px]
      "
    >
      <div className="max-w-7xl mx-auto px-5">

        <h2
          className="
            text-center
            font-roboto
            text-[36px]
            font-bold
            text-[#FA8112]
            mb-[72px]
          "
        >
          Galeria
        </h2>


        <div
            className="
                grid

                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3

                justify-items-center

                gap-x-8
                gap-y-8

                lg:gap-x-12
                lg:gap-y-12
            "
        >
          {images.map((image, index) => (

            <div
                key={image}
                className="
                    group
                    relative

                    w-full
                    max-w-[343px]

                    aspect-[343/229]

                    overflow-hidden

                    cursor-pointer

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:shadow-2xl
                "
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  343px
                "
                className="
                  object-cover

                  transition-transform
                  duration-500

                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-blue-600

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-25
                "
              />

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}