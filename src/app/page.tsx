import Image from "next/image";
import Cta from "./components/cta/cta";
import Faq from "./components/faq/faq";
import Carousel from "./components/carousel/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
      <Faq description={"this is a test"} href="/about" />
      <Cta />
    </main>
  );
}
