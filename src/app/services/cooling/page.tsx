"use client";
import { Button } from "@nextui-org/react";
import Container from "@/app/components/container/container";
import Faq from "@/app/components/faq/faq";
import { SnowOutline } from "react-ionicons";
import { StickyScroll } from "@/app/components/sticky-scroll/sticky-scroll";

const coolingFaqs = [
  {
    key: 1,
    title: "How do heating systems work?",
    data: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 2,
    title: "What are the benefits of regular maintenance?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 3,
    title: "How often should I replace my heating system?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 4,
    title: "Can I install a heating system myself?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 5,
    title: "What is the NYSERTA program?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
];

const content = [
  {
    title: "Expert Cooling Services",
    description:
      "We offer professional air conditioning installation, maintenance, and repair services to keep your home cool and comfortable.",
  },
  {
    title: "Quality AC Solutions",
    description:
      "Our team of certified technicians is experienced in providing top-notch air conditioning solutions tailored to your specific needs.",
  },
  {
    title: "Reliable AC Repair",
    description:
      "When your air conditioner breaks down, our experts are here to quickly diagnose and repair any issues, ensuring your system is up and running smoothly.",
  },
];

export default function CoolingPage() {
  return (
    <>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 bg-black bg-opacity-50 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
            <p className="text-white text-base not-italic font-semibold leading-[150%]">
              {"Expertise"}
            </p>
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h1 className="self-stretch text-white text-[40px] not-italic font-bold leading-[120%] lg:text-[56px]">
                {"Stay Cool All Summer Long"}
              </h1>
              <p className="self-stretch text-white text-base not-italic font-normal leading-[150%] lg:text-lg">
                {
                  "Trust our family-owned HVAC business in the capital region for reliable cooling services."
                }
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-4">
            <Button variant="shadow" color="primary">Learn More </Button>
            <Button variant="ghost" color="primary">Contact Us</Button>
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:items-center lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <StickyScroll content={content} />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
              <p className="text-center text-base not-italic font-semibold leading-[150%]">
                {"Efficient"}
              </p>
              <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
                <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
                  {"Stay Cool with Mitsubishi Colling Solutions"}
                </h2>
                <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
                  {
                    "Experience ultimate comfort with our range of Mitsubishi cooling products. From air conditioners to ductless systems, we have the perfect solution to keep your home cool and comfortable all year round."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
          <div className="h-[348px] self-stretch bg-gray-300 shadow-2xl lg:h-[640px] lg:flex-[1_0_0]" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container classes={`lg:flex-row`}>
          <div className="flex flex-col items-start gap-5 self-stretch lg:gap-8 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h3 className="self-stretch text-[32px] not-italic font-bold leading-[120%] lg:text-[40px]">
                {
                  "Choose Our Cooling Services for Energy Efficiency, Cost Savings, and Improved Comfort"
                }
              </h3>
              <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
                {
                  "Our cooling services offer energy-efficient solutions that can help you save on your utility bills while ensuring optimal comfort in your home or office."
                }
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch px-0 py-2">
              <div className="flex items-center gap-4 self-stretch">
                <SnowOutline
                  color={"#25368A"}
                  title={""}
                  height="25px"
                  width="25px"
                />
                <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                  {"Energy-efficient cooling solutions for cost savings"}
                </p>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <SnowOutline
                  color={"#25368A"}
                  title={""}
                  height="25px"
                  width="25px"
                />
                <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                  {"Enhanced comfort with our cooling services"}
                </p>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <SnowOutline
                  color={"#25368A"}
                  title={""}
                  height="25px"
                  width="25px"
                />
                <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                  {"Stay cool and save money with our cooling solutions"}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] self-stretch bg-gray-300 shadow-2xl lg:h-[640px] lg:flex-[1_0_0]" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-center gap-3 self-stretch lg:w-[768px] lg:gap-4">
          <p className="text-center text-base not-italic font-semibold leading-[150%]">
            {"Efficient"}
          </p>
          <div className="flex flex-col items-center gap-5 self-stretch lg:gap-6">
            <h2 className="self-stretch text-center text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
              {"Easy and Convenient Cooling Services for You"}
            </h2>
            <p className="self-stretch text-center text-base not-italic font-normal leading-[150%] lg:text-lg">
              {
                "Scheduling and receiving cooling services from our company is a breeze. Our team of experts will guide you through the process, ensuring a seamless experience from start to finish."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch lg:gap-12">
          <div className="flex flex-col items-center gap-12 self-stretch lg:flex-row lg:items-start">
            <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl lg:h-60" />
              <div className="flex flex-col items-center gap-5 self-stretch lg:gap-6">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%] lg:text-[32px]">
                  {"Step 1: Schedule Your Cooling Service"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {"Contact us to schedule your cooling service appointment."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl lg:h-60" />
              <div className="flex flex-col items-center gap-5 self-stretch lg:gap-6">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%] lg:text-[32px]">
                  {"Step 2: Professional Cooling Service"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Our certified technicians will arrive promptly and provide top-notch cooling services."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl lg:h-60" />
              <div className="flex flex-col items-center gap-5 self-stretch lg:gap-6">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%] lg:text-[32px]">
                  {"Step 3: Enjoy Cool Comfort"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {"Sit back, relax, and enjoy the cool comfort of your home."}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="ghost" color="primary">Contact Us</Button>
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container classes={`lg:flex-row`}>
          <div className="flex flex-col items-start gap-3 self-stretch lg:gap-6 lg:flex-[1_0_0] lg:w-[768px]">
            <h3 className="self-stretch text-[32px] not-italic font-bold leading-[120%] lg:text-[40px]">
              {"Expert Cooling Services for You"}
            </h3>
            <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
              {"Stay cool with our reliable cooling solutions"}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Button variant="ghost" color="primary">Contact</Button>
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container center>
          <Faq
            title={"FAQs"}
            description={
              "Find answers to commonly asked questions about heating systems, installation, and maintenance."
            }
            href={"/contact"}
            faqs={coolingFaqs}
          />
        </Container>
      </div>
    </>
  );
}
