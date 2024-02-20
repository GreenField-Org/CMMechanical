"use client";
import { Facebook } from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex justify-center">
      <Link
        href="https://www.facebook.com/CMMechanicalHVAC"
        className="hover:drop-shadow-2xl w-[50px] rounded-full"
      >
        <Facebook
          color={"#25368A"}
          size={50}
        />
      </Link>
    </div>
  );
}
