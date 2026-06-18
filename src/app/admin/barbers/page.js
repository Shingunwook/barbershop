"use client";

import { useEffect, useState } from "react";

export default function BarbersPage() {
  const [barbers, setBarbers] = useState([]);
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    fetchBarbers();
  }, []);

  async function fetchBarbers() {
    const res = await fetch("/api/barbers");
    const data = await res.json();
    setBarbers(data);
  }

  async function handleAddBarber() {
    const res = await fetch("/api/barbers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        name,
        experience,
      }),

    });

    if (res.ok) {
      setName("");
      setExperience("");
      fetchBarbers();
    }
     else {
      
      alert("Erro ao adicionar");
    }

  }

  async function handleDelete(id) {
    const res = await fetch(`/api/barbers?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchBarbers();
    } else {
      alert("Erro ao eliminar");
    }
  }

  return (

    <main className="min-h-screen bg-[#1E1E1E] flex justify-center pt-16 px-5">

      <div className="
        w-full
        max-w-[900px]
        bg-[#ECECEC]
        rounded-[30px]
        px-10
        py-12
      ">

        <h1 className="
          text-center
          text-[55px]
          font-bold
          text-[#222222]
          mb-10
        ">

          Barbeiros

        </h1>

        <div className="grid grid-cols-3 gap-5 mb-8">

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}

            className="
              p-4
              rounded-xl
              border-2
              border-gray-300
              outline-none
              text-[#222]
            "

          />

          <input
            type="number"
            placeholder="Experiência"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="
              p-4
              rounded-xl
              border-2
              border-gray-300
              outline-none
              text-[#222]
            "

          />

          <button
            onClick={handleAddBarber}
            className="
              bg-[#222222]
              text-[#FA8112]
              rounded-xl
              font-bold
              hover:bg-[#FA8112]
              hover:text-white
              transition-all
              cursor-pointer
            "

          >

            Adicionar Barbeiro
          </button>
        </div>

        <table className="w-full">
          <thead>

            <tr className="border-b text-[#555]">
              <th className="py-4 text-left">ID</th>
              <th className="py-4 text-left">Nome</th>
              <th className="py-4 text-left">Experiência</th>
              <th className="py-4 text-left">Ações</th>
            </tr>

          </thead>

          <tbody className="text-[#555]">

            {barbers.map((barber) => (

              <tr
                key={barber.id}
                className="border-b"
              >

                <td className="py-5">
                  {barber.id}
                </td>

                <td>
                  {barber.name}
                </td>

                <td>
                  {barber.experience} anos
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(barber.id)}
                    className="
                      bg-red-500
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      hover:bg-red-600
                      transition-all
                      cursor-pointer
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