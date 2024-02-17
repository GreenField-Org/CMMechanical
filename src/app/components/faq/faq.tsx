"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Accordion from "../accordion/accordion";
import Link from "next/link";
import { Button } from "@nextui-org/react";

interface FaqProps {
  title?: string;
  description: string;
  href?: string;
  faqs: Array<{ title: string; data: string; key: number; isOpen: boolean }>;
}

export default function Faq({ title, description, href, faqs }: FaqProps) {
  const router = useRouter();
  const [accordions, setAccordion] = useState(faqs);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions?.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:gap-20 lg:self-stretch">
      <div className="flex flex-col items-start gap-12 self-stretch lg:w-[500px] lg:gap-8">
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-5 self-stretch">
            <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
              {title}
            </h2>
            <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
      {href ? (
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
              {"Still have questions?"}
            </h4>
            <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
              {"contact us today for more information."}
            </p>
          </div>
          <Link href={href}>
            <Button color="primary" variant="ghost">Contact</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
