import Image from "next/image";
import Cta from "./components/cta/cta";
import Faq from "./components/faq/faq";
import Carousel from "./components/carousel/carousel";
import Button from "./components/button/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-[375px] h-[812px] flex-col items-center lg:w-[1440px] lg:h-[824px]">
        <div className="flex-[1_0_0] self-stretch">
          <video src="https://picsum.photos/200/300"></video>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch px-5 py-12 lg:gap-20 lg:px-16 lg:py-20">
          <div className="flex flex-col items-start self-stretch lg:flex-[1_0_0]">
            <h1 className="self-stretch text-[40px] not-italic font-bold leading-[120%] lg:text-[56px]">
              {"Family-Owned HVAC Experts in the Capital Region"}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
              {
                "Experience top-quality heating, cooling, and dectless services."
              }
            </p>
            <div className="flex items-start gap-4 pt-4">
              <Button buttonText="Learn More" variant="primary" />
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Faq description={"this is a test"} href="/about" />
      <Cta />
    </main>
  );
}
