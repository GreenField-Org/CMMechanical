import { Metadata } from "next";

export const metadata: Metadata = {
  title: "American Standard",
};

export default function AmericanStandardPage() {
  return (
    <div className="w-full p-2">
      <iframe
        src="https://www.vpsupply.com/brands/american-standard-hvac"
        rel="nofollow"
        width="100%"
        height="850px"
        className="rounded-lg shadow-2xl"
      ></iframe>
    </div>
  );
}
