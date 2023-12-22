import { Metadata } from "next";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:h-[369px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <h1 className="self-stretch text-[40px] not-italic font-bold leading-[120%]">
            {"FAQs"}
          </h1>
          <p className="self-stretch text-base not-italic font-normal leading-[150%]">
            {
              "Search our most Frequently Asked Question around out products and services so we may better assist you."
            }
          </p>
        </div>
      </div>
      {/* FAQS */}
      <div className="flex w-[375px] flex-col items-center gap-20 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-center gap-2 lg:gap-6 self-stretch">
          <h2 className="self-stretch text-center text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
            {"Still have questions?"}
          </h2>
          <p className="self-stretch text-center text-base lg:text-lg not-italic font-normal leading-[150%]">
            {"Contact us today! We look forward to hearing from you."}
          </p>
        </div>
        <div className="flex items-start gap-4 pt-4">
          <Button buttonText="Contact Us" variant="primary" />
        </div>
      </div>
    </>
  );
}
