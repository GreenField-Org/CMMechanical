import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full m-20">
      <Image
        src="/error.jpg"
        alt="error"
        width={400}
        height={400}
        className="rounded-lg shadow-2xl"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-bold text-2xl">Oh No!</h2>
        <p className="font-body">
          Something went wrong. Return home or use your back button.
        </p>
        <Link
          href="/"
          className="hover:text-tertiary hover:italic hover:font-bold"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
