"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {

  const router = useRouter();

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (!admin) {

      router.push("/admin/login");

    }

  }, []);

  return children;

}