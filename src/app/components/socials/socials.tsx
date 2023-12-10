"use client";
import Link from "next/link";
import { LogoFacebook } from "react-ionicons";

export default function Socials() {
  return (
    <div>
      <Link href="https://www.facebook.com/CMMechanicalHVAC">
        <LogoFacebook
          color={"#fff"}
          title={"facebook"}
          height="50px"
          width="50px"
        />
      </Link>
    </div>
  );
}
