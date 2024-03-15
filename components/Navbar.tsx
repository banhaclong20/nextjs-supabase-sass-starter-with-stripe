import React from "react";
import Profile from "./Profile";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20">
      <Link href="/">
        <h1 className="text-xl font-bold">Next JS | Supabase</h1>
      </Link>
      <Profile />
    </div>
  );
}
