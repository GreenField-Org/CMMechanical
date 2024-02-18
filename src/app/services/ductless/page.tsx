"use client";
import { Button } from "@nextui-org/react";
import Container from "@/app/components/container/container";
import Faq from "@/app/components/faq/faq";
import { BuildOutline } from "react-ionicons";

const ductlessFaqs = [
  {
    key: 1,
    title: "What are ductless systems?",
    data: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 2,
    title: "What are the advantages of ductless systems?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 3,
    title:
      "Are there any tax credits or rebates available for ductless systems?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
  {
    key: 4,
    title: "How do I maintain a ductless system?",
    data: `lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru`,
    isOpen: false,
  },
];

export default function DuctlessPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-500 to-slate-500 flex flex-col items-center gap-12 px-5 py-16 lg:gap-20 lg:px-16 lg:py-28 shadow-2xl">
        <Container classes={`lg:w-[768px] justify-center items-center`}>
          <div className="flex flex-col items-center gap-3 lg:gap-4 self-stretch">
            <p className="text-[color:var(--White,#FFF)] text-center text-base not-italic font-semibold leading-[150%]">
              {"Efficient"}
            </p>
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <h1 className="self-stretch text-[color:var(--White,#FFF)] text-center text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]">
                {"Ditch the Ducts"}
              </h1>
              <p className="self-stretch text-[color:var(--White,#FFF)] text-center text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Experience year-round comfort with our energy-efficient ductless heating and cooling systems."
                }
              </p>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="shadow" color="primary">Learn More</Button>
            <Button variant="ghost" color="primary">Contact</Button>
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start lg:justify-center lg:items-center gap-12 px-7 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container classes={`lg:flex-row`}>
          <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h2 className="self-stretch text-4xl lg:text-[40px] not-italic font-bold leading-[120%]">
                {"Discover the Benefits of Choosing a Ductless System"}
              </h2>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Experience energy efficiency, cost savings, and easy installation with our ductless systems."
                }
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch px-0 py-2 lg:flex-row lg:gap-6">
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                  {"50%"}
                </h2>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {"Lower energy bills and hassle-free installation."}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                  {"50%"}
                </h2>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {"Stay comfortable and save money with ductless technology."}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] self-stretch bg-gray-300 shadow-2xl lg:flex-[1_0_0]" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start lg:justify-center lg:items-center gap-12 px-7 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container classes={`lg:flex-row`}>
          <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h2 className="self-stretch text-4xl lg:text-[40px] not-italic font-bold leading-[120%]">
                {"Discover the Versatility of Ductless Systems for Your Home"}
              </h2>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Our wide range of ductless systems includes both single-zone and multi-zone options, providing customizable comfort for every room in your home."
                }
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch px-0 py-2 lg:flex-row lg:gap-6">
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h6 className="self-stretch text-lg lg:text-xl not-italic font-bold leading-[120%]">
                  {"Efficient Cooling"}
                </h6>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Stay cool and comfortable all summer long with our energy-efficient ductless cooling solutions."
                  }
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h6 className="self-stretch text-lg lg:text-xl not-italic font-bold leading-[120%]">
                  {"Flexible Heating"}
                </h6>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Experience the warmth and coziness of our ductless heating systems during the colder months."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] self-stretch bg-gray-300 shadow-2xl lg:flex-[1_0_0]" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start lg:justify-center lg:items-center gap-12 px-7 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container classes={`lg:flex-row`}>
          <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h2 className="self-stretch text-4xl lg:text-[40px] not-italic font-bold leading-[120%]">
                {
                  "Discover the Quality of Mitsubishi Products with Our Diamond Contractor Certification"
                }
              </h2>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "As a Mitsubishi Diamond Contractor certified business, we offer top-notch heating, cooling, and ductless services in the capital region. Experience the reliability and efficiency of Mitsubishi products for your home or business."
                }
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch px-0 py-2 lg:flex-row lg:gap-6">
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h6 className="self-stretch text-lg lg:text-xl not-italic font-bold leading-[120%]">
                  {"Certification Benefits"}
                </h6>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Our Mitsubishi Diamond Contractor certification ensures superior service and expertise in HVAC installations."
                  }
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch lg:flex-[1_0_0]">
                <h6 className="self-stretch text-lg lg:text-xl not-italic font-bold leading-[120%]">
                  {"Quality Products"}
                </h6>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Choose from a wide range of high-quality Mitsubishi heating, cooling, and ductless systems."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] self-stretch bg-gray-300 shadow-2xl lg:flex-[1_0_0]"/>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-center gap-3 self-stretch lg:w-[768px] lg:self-center lg:justify-center lg:gap-4">
          <p className="text-center text-base not-italic font-semibold leading-[150%]">
            {"Efficient"}
          </p>
          <div className="flex flex-col items-center gap-5 self-stretch lg:gap-6">
            <h2 className="self-stretch text-center text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
              {"Experience the Ultimate Comfort with Ductless Systems"}
            </h2>
            <p className="self-stretch text-center text-base lg:text-lg not-italic font-normal leading-[150%]">
              {
                "Our ductless systems offer quiet operation, customizable comfort, and convenient remote control, providing you with the ultimate heating and cooling experience."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch lg:gap-12">
          <div className="flex flex-col items-center gap-12 self-stretch lg:flex-row lg:items-start">
            <div className="flex flex-col items-center gap-5 self-stretch">
              <BuildOutline
                color={"#25368A"}
                title={""}
                height={"25px"}
                width={"25px"}
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Quiet Operation"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Enjoy a peaceful and quiet environment with our ductless systems that operate silently."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 self-stretch">
              <BuildOutline
                color={"#25368A"}
                title={""}
                height={"25px"}
                width={"25px"}
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Convenient Remote Control"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Take control of your comfort with the easy-to-use remote control included with our ductless systems."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 self-stretch">
              <BuildOutline
                color={"#25368A"}
                title={""}
                height={"25px"}
                width={"25px"}
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Customizable Comfort"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Create the perfect indoor environment with our ductless systems that allow you to customize the temperature to your preference."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="ghost"color="primary">Learn More</Button>
            <Button variant="ghost" color="primary">Contact</Button>
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col justify-center items-start self-stretch border border-solid border-black lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-2 self-stretch p-8 lg:justify-center lg:gap-6 lg:flex-[1_0_0] lg:p-12">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                {"Discover Efficient Ductless Solutions"}
              </h2>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Experience the Comfort and Energy Savings of Ductless HVAC Systems"
                }
              </p>
            </div>
            <div className="flex items-start gap-4 pt-4">
              <Button variant="ghost" color="primary">Contact Us</Button>
            </div>
          </div>
          <div className="h-[223px] self-stretch bg-gray-300 shadow-2xl lg:h-[437px] lg:flex-[1_0_0]" />
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
        <Container center>
          <Faq
            title={"FAQs"}
            description={
              "Find answers to commonly asked questions about heating systems, installation, and maintenance."
            }
            href={"/contact"}
            faqs={ductlessFaqs}
          />
        </Container>
      </div>
    </>
  );
}
