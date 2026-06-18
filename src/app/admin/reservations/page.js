"use client";

import { useEffect, useState } from "react";

export default function ReservationsPage() {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {

    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));

  }, []);

  return (

    <main className="min-h-screen text-[#555] bg-[#1E1E1E] p-10">

      <div
        className="
          max-w-7xl
          mx-auto

          bg-[#ECECEC]

          rounded-[30px]

          p-10
        "
      >

        <h1
          className="
            text-[42px]

            font-bold

            text-center

            mb-10
          "
        >
          Reservas
        </h1>

        <table className="w-full text-center">

          <thead>

            <tr className="border-b-2 border-gray-300">

              <th className="py-4">ID</th>

              <th>Cliente</th>

              <th>Email</th>

              <th>Telefone</th>

              <th>Serviço</th>

              <th>Barbeiro</th>

              <th>Data</th>

            </tr>

          </thead>

          <tbody>

            {reservations.map((reservation) => (

              <tr

                key={reservation.id}

                className="
                  border-b

                  border-gray-200

                  hover:bg-gray-100
                "

              >

                <td className="py-5">

                  {reservation.id}

                </td>

                <td>

                  {reservation.customer.name}

                </td>

                <td>

                  {reservation.customer.email}

                </td>

                <td>

                  {reservation.customer.phone}

                </td>

                <td>

                  {reservation.service.name}

                </td>

                <td>

                  {reservation.barber.name}

                </td>

                <td>

                  {

                    new Date(reservation.date)

                    .toLocaleString("pt-PT")

                  }

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>

  );

}