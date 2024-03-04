import Image from "next/image";
import Link from "next/link";
import Socials from "../socials/socials";

export default function Footer() {
  return (
    <footer className="transition-colors py-10 px-5">
      <div className="grid text-center lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left mb-6">
        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <Image
            src="/CMMechanical_logo.png"
            width={300}
            height={300}
            alt="C&M Mechanical Logo"
            className="my-0 mx-auto mb-6"
          />
          <h4>
            Phone: <a href="tel:518-768-8800">518-768-8800</a>
          </h4>
          <h4>
            Email:{" "}
            <a href="mailto:office@cmmechanicalhvac.com">
              office@cmmechanicalhvac.com
            </a>
          </h4>
        </div>
        <div className="group grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mb-6">
          <Link className="hover:text-tertiary mb-1" href="/about">
            About Us
          </Link>
          <Link className="hover:text-tertiary mb-1" href="/services">
            Services
          </Link>
          <Link className="hover:text-tertiary mb-1" href="/financing">
            Financing
          </Link>
          <Link className="hover:text-tertiary mb-1" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-tertiary mb-1" href="/faq">
            FAQ
          </Link>
        </div>
        <Socials />
      </div>
      <hr className="bg-primary" />
      <div className="flex flex-col items-center justify-center p-5">
        <p>&copy; {new Date().getFullYear()} C&M Mechanical HVAC</p>
        <br />
        <p>Designed & Developed by GreenField Development</p>
      </div>
    </footer>
  );
}
