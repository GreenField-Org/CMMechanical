import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Footer() {
    return (
        <footer className="text-white p-10">
            <div className="flex justify-evenly pb-4">
                <Suspense>
                    <Image src="/CMMechanical_logo.png" width={500} height={500} alt="C&M Mechanical Logo"/>
                </Suspense>
                <div>
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
                &copy; {new Date().getFullYear()} GreenField Dev.
            </p>
        </footer>
    )
}