"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("admin", "true");
      alert("Login realizado!");
      router.push("/admin");
    } else {

      alert(data.error);

    }
  }

  return (

    <main className="min-h-screen flex text-black items-center justify-center bg-[#1E1E1E]">
      <div
        className="
          w-[500px]
          bg-[#ECECEC]
          rounded-[30px]
          p-10
        "
      >

        <h1 className="text-[50px] font-bold text-center mb-10">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            p-4
            mb-5
            rounded-xl
            border-2
            border-gray-300
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            p-4
            mb-8
            rounded-xl
            border-2
            border-gray-300
          "
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            h-[60px]
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
          Entrar
        </button>
      </div>
    </main>
  );
}