import Image from "next/image";
import Cta from "./components/cta/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cta />
    </main>
  );
}
