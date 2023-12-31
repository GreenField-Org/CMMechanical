import Image from "next/image";
import Link from "next/link";
import Socials from "../socials/socials";

export default function Footer() {
  return (
    <footer className="transition-colors p-10">
      <div className="grid text-center lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left mb-6">
        <Image
          src="/CMMechanical_logo.png"
          width={300}
          height={300}
          alt="C&M Mechanical Logo"
          className="my-0 mx-auto mb-6"
        />
        <div className="group grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mb-6">
          <Link className="hover:text-tertiary" href="/about">
            About Us
          </Link>
          <Link className="hover:text-tertiary" href="/services">
            Services
          </Link>
          <Link className="hover:text-tertiary" href="/financing">
            Financing
          </Link>
          <Link className="hover:text-tertiary" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-tertiary" href="/faq">
            FAQ
          </Link>
        </div>
        <Socials />
      </div>
      <hr className="bg-primary" />
      <p className="flex justify-center p-5">
        &copy; {new Date().getFullYear()} GreenField Dev
      </p>
    </footer>
  );
}
