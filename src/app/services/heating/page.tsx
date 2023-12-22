"use client";
import Faq from "@/app/components/faq/faq";
import Button from "../../components/button/button";
import Container from "../../components/container/container";
import { FlameOutline } from "react-ionicons";

const heatingFaqs = [
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

export default function HeatingPage() {
  return (
    <>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-3 lg:gap-4 self-stretch">
            <p className="text-center text-base not-italic font-semibold leading-[150%]">
              {"Reliable"}
            </p>
            <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
              <h1 className="self-stretch text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]">
                {"Expert Heating Services"}
              </h1>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Stay warm and comfortable with our top-notch heating services and Mitsubishi expertise."
                }
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-4">
            <Button buttonText="Learn More" variant="primary" />
            <Button buttonText="Contact Us" variant="secondary" />
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-2 lg:gap-6 self-stretch lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-3 lg:gap-4 self-stretch">
              <p className="text-center text-base not-italic font-semibold leading-[150%]">
                {"Efficient"}
              </p>
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                  {"Choose the Perfect Heating System for Your Home"}
                </h2>
                <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                  {
                    "We offer a wide range of heating systems, including furnaces, boilers, and heat pumps, to ensure that you find the perfect solution for your home's heating needs. Our expert technicians will guide you through the selection process, taking into account your budget, energy efficiency goals, and comfort preferences."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
              <Button buttonText="Contact Us" variant="secondary" />
            </div>
          </div>
          <div className="h-[348px] lg:h-[640px] self-stretch lg:flex-[1_0_0] bg-gray-300 shadow-2xl"></div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <h3 className="self-stretch text-center text-[32px] not-italic font-bold leading-[120%] lg:self-center lg:w-[768px] lg:text-[40px]">
          {
            "Expert Heating System Installation, Maintenance, and Repair Services"
          }
        </h3>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:items-start gap-12 self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
            <div className="flex flex-col items-center gap-4 self-stretch">
              <div className="flex flex-col items-start gap-3 self-stretch">
                <h5 className="self-stretch text-center text-xl not-italic font-bold leading-[140%]">
                  {"Professional Heating System Maintenance and Repair"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Our team of certified technicians provides top-quality heating system installation, maintenance, and repair services to keep your home warm and comfortable."
                  }
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch pt-2">
                <Button buttonText="Learn More" variant="secondary" fullwidth />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
            <div className="flex flex-col items-center gap-4 self-stretch">
              <div className="flex flex-col items-start gap-3 self-stretch">
                <h5 className="self-stretch text-center text-xl not-italic font-bold leading-[140%]">
                  {"Efficient Heating System Upgrades and Replacements"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Upgrade your outdated heating system with our energy-efficient solutions or replace it with a reliable and modern system that suits your needs."
                  }
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch pt-2">
                <Button buttonText="Contact Us" variant="secondary" fullwidth />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
            <div className="flex flex-col items-center gap-4 self-stretch">
              <div className="flex flex-col items-start gap-3 self-stretch">
                <h5 className="self-stretch text-center text-xl not-italic font-bold leading-[140%]">
                  {"24/7 Emergency Heating System Repair Services"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "We offer round-the-clock emergency heating system services to ensure that you stay warm and comfortable, no matter the time of day."
                  }
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch pt-2">
                <Button buttonText="Contact" variant="secondary" fullwidth />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-center gap-3 self-stretch lg:w-[768px] lg:gap-4 lg:self-center">
          <p className="text-center text-base not-italic font-semibold leading-[150%]">
            {"Efficient"}
          </p>
          <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
            <h2 className="self-stretch text-center text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
              {"Choose Our Expert Heating Services for Energy Efficiency"}
            </h2>
            <p className="self-stretch text-center text-base lg:text-lg not-italic font-normal leading-[150%]">
              {
                "Our heating services are designed to provide energy efficiency, cost savings, and are handled by our team of expert technicians."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 lg:gap-12 self-stretch">
          <div className="flex flex-col lg:flex-row lg:w-[1312px] items-center gap-12 self-stretch">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Energy Efficient Heating Solutions for your Home"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {"Upgrade your heating system to save on energy costs."}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Expert Technicians for Reliable Heating Installations"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Our team of expert technicians ensures reliable heating installations."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className="h-[198px] self-stretch bg-gray-300 shadow-2xl"></div>
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Stay Warm with Our Efficient Heating Solutions"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Experience warmth and comfort with our efficient heating solutions."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <Button buttonText="Learn More" variant="secondary" />
            <Button buttonText="Contact Us" variant="secondary" />
          </div>
        </div>
      </div>
      <div className="flex w-[375px] lg:w-[1440px] flex-col items-center gap-12 px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:item-start gap-12 self-stretch">
          <div className="flex flex-col items-center gap-2 self-stretch">
            <div className="flex flex-col items-center gap-5 self-stretch">
              <FlameOutline
                color={"#FF0000"}
                title={"open"}
                height="25px"
                width="25px"
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Selecting, Installing, and Maintaining Heating Systems"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {"Our team will guide you through the process."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
              <Button buttonText="Contact Us" variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 self-stretch">
            <div className="flex flex-col items-center gap-5 self-stretch">
              <FlameOutline
                color={"#FF0000"}
                title={"open"}
                height="25px"
                width="25px"
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Expert Heating System Installation"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "We specialize in professional heating system installations."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
              <Button buttonText="Contact Us" variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 self-stretch">
            <div className="flex flex-col items-center gap-5 self-stretch">
              <FlameOutline
                color={"#FF0000"}
                title={"open"}
                height="25px"
                width="25px"
              />
              <div className="flex flex-col items-center gap-5 self-stretch">
                <h4 className="self-stretch text-center text-2xl not-italic font-bold leading-[140%]">
                  {"Regular Maintenance for Optimal Performance"}
                </h4>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Keep your heating system running smoothly with our maintenance services."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
              <Button buttonText="Contact Us" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-start gap-5 self-stretch">
            <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%]">
              {"Expert Heating Services in the Capital Region"}
            </h2>
            <p className="self-stretch text-base not-italic font-normal leading-[150%]">
              {
                "Trust our certified team for all your heating needs in the capital region."
              }
            </p>
          </div>
          <div className="flex items-start gap-4 pt-4">
            <Button buttonText="Contact Us Today" variant="primary" />
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container center>
          <Faq
            title={"Heating FAQs"}
            description={
              "Find answers to commonly asked questions about heating systems, installation, and maintenance."
            }
            href={"/contact"}
            faqs={heatingFaqs}
          />
        </Container>
      </div>
    </>
  );
}
