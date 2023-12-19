"use client";
import Link from "next/link";
import { LogoFacebook } from "react-ionicons";

export default function Socials() {
  return (
    <div className="flex justify-center">
      <Link
        href="https://www.facebook.com/CMMechanicalHVAC"
        className="hover:drop-shadow-2xl w-[50px] rounded-full"
      >
        <LogoFacebook
          color={"#25368A"}
          title={"facebook"}
          height="50px"
          width="50px"
        />
      </Link>
    </div>
  );
}
