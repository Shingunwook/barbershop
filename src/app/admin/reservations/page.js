"use client";

import { useEffect, useState } from "react";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  async function fetchReservations() {
    const res = await fetch("/api/reservations");
    const data = await res.json();
    setReservations(data);
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  async function handleStatusChange(id, status) {
    const res = await fetch("/api/reservations", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    if (res.ok) {
      fetchReservations();
    } else {
      const data = await res.json();
      alert(data.error);
    }

  }

  async function handleDelete(id) {
    const res = await fetch(
      `/api/reservations?id=${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      fetchReservations();
    } else {
      const data = await res.json();
      alert(data.error);
    }
  }
  return (

    <main className="min-h-screen bg-[#1E1E1E] text-[#555] p-10">

      <div className="
        max-w-7xl
        mx-auto
        bg-[#ECECEC]
        rounded-[30px]
        p-10
      ">

        <h1 className="
          text-[42px]
          font-bold
          text-center
          mb-10
        ">

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
              <th>Status</th>
              <th>Ações</th>
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
                  {new Date(reservation.date).toLocaleString("pt-PT")}
                </td>

                <td>

                  <select
                    value={reservation.status || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(
                        reservation.id,
                        e.target.value
                      )
                    }
                    className="
                      p-2
                      rounded-lg
                      border
                      bg-white
                    "
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDelete(
                        reservation.id
                      )
                    }
                    className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-red-600
                      transition-all
                    "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>

  );

}