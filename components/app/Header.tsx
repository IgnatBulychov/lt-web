"use client";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="px-8 py-2 shadow-sm">
        <Link href="/" className="  text-blue-500   hover:text-blue-400">
          Главная
        </Link>
        <Link
          href="/training"
          className="ml-6   text-blue-500   hover:text-blue-400"
        >
          Тренировка
        </Link>
      </div>
    </>
  );
}
