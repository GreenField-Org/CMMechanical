"use client";

import { useRouter } from "next/navigation";
import Button from "../button/button";
import { useState } from "react";
import Accordion from "../accordion/accordion";

interface FaqProps {
  description: string;
  href?: string;
}

export default function Faq({ description, href }: FaqProps) {
  const router = useRouter();
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is GeeksforGeeks?",
      data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What GeeksforGeeks offer us?",
      data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Which is the best portal to study Computer Science?",
      data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord) => {
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
              {"FAQ"}
            </h2>
            <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
              {description}
            </p>
          </div>
          {href ? (
            <Button
              buttonText="Learn More"
              variant="secondary"
              onClick={() => router.push(href)}
            />
          ) : null}
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
    </div>
  );
}
