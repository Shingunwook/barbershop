"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {

  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  async function fetchServices() {
    const res = await fetch("/api/services");
    const data = await res.json();

    setServices(data);
  }

  useEffect(() => {
    fetchServices();
  }, []);

  async function handleAddService() {

    const res = await fetch("/api/services", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price: Number(price),
        duration: Number(duration),
      }),
    });

    if (res.ok) {

      setName("");
      setPrice("");
      setDuration("");

      fetchServices();

    } else {

      alert("Erro ao adicionar serviço");

    }

  }

  async function handleDelete(id) {

    const res = await fetch(`/api/services?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {

      fetchServices();

    } else {

      alert("Erro ao eliminar");

    }

  }

  return (
    <main className="min-h-screen bg-[#1E1E1E] py-12 px-5">

      <div className="max-w-5xl mx-auto bg-[#ECECEC] rounded-[30px] p-10">

        <h1 className="text-center text-[42px] font-bold mb-10 text-[#222222]">
          Serviços
        </h1>

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 bg-white text-black"
          />

          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 bg-white text-black"
          />

          <input
            type="number"
            placeholder="Duração"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 bg-white text-black"
          />

        </div>

        <button
          onClick={handleAddService}
          className="
            w-full h-[60px] mb-10
            rounded-[20px]
            bg-[#222222]
            text-[#FA8112]
            font-bold

            hover:bg-[#FA8112]
            hover:text-white

            transition-all
            cursor-pointer
          "
        >
          Adicionar Serviço
        </button>

        <table className="w-full text-center">

          <thead>
            <tr className="border-b-2 text-[#555] border-gray-300">
              <th className="py-4">ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Duração</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody className="text-[#555]">
            {services.map((service) => (

              <tr
                key={service.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >

                <td className="py-5">
                  {service.id}
                </td>

                <td>
                  {service.name}
                </td>

                <td>
                  {service.price} €
                </td>

                <td>
                  {service.duration} min
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="
                      px-4 py-2
                      rounded-lg
                      bg-red-500
                      text-white
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