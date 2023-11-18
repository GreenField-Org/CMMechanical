import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Footer() {
    return (
        <footer className="text-white p-10">
            <div className="grid text-center lg:w-full lg:mb-5 lg:grid-cols-3 lg:text-left mb-6">
                <Suspense>
                    <Image src="/CMMechanical_logo.png" width={300} height={300} alt="C&M Mechanical Logo" className="my-0 mx-auto mb-6"/>
                </Suspense>
                <div className="group grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mb-6">
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/faq">FAQ</Link>
                </div>
                <div>
                    Socials
                </div>
            </div>
            <hr className="bg-white"/>
            <p className="flex justify-center p-5">
                &copy; {new Date().getFullYear()} GreenField Dev
            </p>
        </footer>
    )
}