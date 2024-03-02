"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Cta() {
  const router = useRouter();

  return (
    <div className="flex w-[375px] lg:w-full flex-col lg:flex-row items-start gap-12 px-5 py-16 lg:gap-20 lg:px-16 lg:py-28">
      <div className="flex flex-col justify-center items-start gap-6 self-stretch lg:gap-20">
        <div className="flex flex-col items-start gap-3 self-stretch lg:gap-6 lg:flex-[1_0_0]">
          <div className="lg:flex lg:w-[768px] lg:flex-col lg:items-start lg:gap-6">
            <h3 className="self-stretch text-[32px] not-italic font-bold leading-[120%] lg:text-[40px]">
              {"Schedule a consultation today"}
            </h3>
            <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
              {
                "Ready to experience unparalleled HVAC service? Contact us today for a free consultation and let us tailor a solution that suits your needs and budget."
              }
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Button variant="shadow" color="primary">
            Contact
          </Button>
          <Link href="/about">
            <Button
              variant="ghost"
              color="primary"
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
