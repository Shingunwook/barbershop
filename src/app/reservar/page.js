"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{9,15}$/;

export default function Reservar() {

const [services, setServices] = useState([]);
const [barbers, setBarbers] = useState([]);

const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const [name, setName] = useState("");

const [serviceId, setServiceId] = useState("");
const [barberId, setBarberId] = useState("");

const [date, setDate] = useState("");
const [time, setTime] = useState("");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const selectedServiceId = Number(params.get("serviceId"));

  if (selectedServiceId) {
    setServiceId(selectedServiceId);
  }
}, []);

useEffect(() => {

  fetch("/api/services")
    .then((res) => res.json())
    .then((data) => setServices(data));

  fetch("/api/barbers")
    .then((res) => res.json())
    .then((data) => setBarbers(data));

}, []);

async function handleReservation() {

  if (
    !name ||
    !email ||
    !phone ||
    !serviceId ||
    !barberId ||
    !date ||
    !time
  ) {

    alert("Preencha todos os campos!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Email inválido!");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Telefone inválido!");
    return;
  }

    const reservationDate = new Date(
        `${date}T${time}:00`

    );

  const res = await fetch("/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
        name,
        email,
        phone,
        serviceId,
        barberId,
        date,
        date: reservationDate,
    }),

  });

  const data = await res.json();

  console.log(data);

  if (res.ok) {
    alert("Reserva criada!");
  } else {
    alert(data.error);
  }
}

const hours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
];


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
                Nome
                </p>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    className="
                    w-full
                    p-4
                    rounded-xl
                    border-2
                    border-gray-300
                    text-[#222222]
                    bg-white
                    outline-none
                    focus:border-[#FA8112]
                    "
                />

                </div>


                <div className="mb-7">

                <p className="mb-2 font-medium text-[#222222]">
                    Email
                </p>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    className="
                    w-full
                    p-4
                    rounded-xl
                    border-2
                    border-gray-300
                    text-[#222222]
                    bg-white
                    outline-none
                    focus:border-[#FA8112]
                    "
                />

                </div>


                <div className="mb-7">

                <p className="mb-2 font-medium text-[#222222]">
                    Telefone
                </p>

                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="
                    w-full
                    p-4
                    rounded-xl
                    border-2
                    border-gray-300
                    text-[#222222]
                    bg-white
                    outline-none
                    focus:border-[#FA8112]
                    "
                />

            <p className="mb-2 font-medium text-[#222222]">
              Serviço
            </p>

            <select

                value={serviceId}

                onChange={(e) => setServiceId(e.target.value)}

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

                <option value="">
                    Escolha um serviço
                </option>

                {services.map((service) => (

                    <option
                      key={service.id}
                      value={service.id}
                    >
                      {service.name}
                    </option>
                ))}

            </select>

          </div>

          <div className="mb-7">

            <p className="mb-2 font-medium text-[#222222]">
              Barbeiro
            </p>

           <select
                value={barberId}

                onChange={(e) => setBarberId(e.target.value)}

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

                <option value="">
                    Escolha um barbeiro
                </option>

                {barbers.map((barber) => (

                    <option
                      key={barber.id}
                      value={barber.id}
                    >
                      {barber.name}
                    </option>
                ))}

            </select>

          </div>

          <div className="mb-7">

            <p className="mb-2 font-medium text-[#222222]">
              Data
            </p>

            <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
                <option value="">
                  Escolha uma hora
                </option>

                {hours.map((hour) => (
                  <option
                    key={hour}
                    value={hour}
                  >
                    {hour}
                  </option>
                ))}
              </select>
          </div>

          <button
            onClick={handleReservation}
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