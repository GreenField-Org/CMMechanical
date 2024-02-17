import { Metadata } from "next";
import Container from "../components/container/container";
import Cta from "../components/cta/cta";
import { Button } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container center>
          <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
            <p className="text-center text-base not-italic font-semibold leading-[150%]">
              {"Reliable"}
            </p>
            <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
              <h1 className="self-stretch text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]">
                {"Expert HVAC Services"}
              </h1>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "Trust our family-owned business for all your heating, cooling, and ductless needs in the capital region."
                }
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-4">
          <Button variant="shadow" color="primary">Learn More</Button>
            <Button variant="ghost" color="primary">Contact Us</Button>
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-10 self-stretch lg:gap-10 lg:flex-[1_0_0]">
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Expert Heating Services Available"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Our team of certified technicians provides top-notch heating services to keep your home warm and comfortable. From furnace repairs to boiler installations, we have the expertise to handle all your heating needs."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Professional Heating Repairs"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Is your heating system acting up? Don't worry, our skilled technicians are here to help. We offer prompt and reliable heating repair services to ensure your system is back up and running efficiently."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Efficient Heating Installations"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Upgrade your outdated heating system with our professional installation services. We'll help you choose the right heating system for your home and ensure a seamless installation process."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] lg:h-[640px] self-stretch lg:flex-[1_0_0] bg-gray-200" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <h3 className="self-stretch text-center text-[32px] not-italic font-bold leading-[120%] lg:w-[768px] lg:text-[40px]">
          {"Expert Cooling Services for Your Home or Business"}
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:item-start gap-12 self-stretch">
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {"Stay Cool with Our Professional Cooling Solutions"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Our experienced technicians provide top-notch cooling services to ensure your comfort."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {"Efficient Cooling Solutions for Every Space"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "We offer a wide range of cooling solutions tailored to meet your specific needs."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {
                    "Reliable Cooling Services for Residential and Commercial Properties"
                  }
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Our team is dedicated to delivering high-quality cooling services for homes and businesses."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-10 self-stretch lg:gap-10 lg:flex-[1_0_0]">
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Expert Ductless Services"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Our team of certified technicians specializes in providing top-notch ductless services, ensuring optimal comfort and energy efficiency for your home or business."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Why Choose Us?"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "With our extensive experience and Mitsubishi Diamond Contractor certification, we are equipped to handle all your ductless needs with precision and expertise."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-56 lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 lg:gap-4 flex-[1_0_0]">
                <h4 className="self-stretch text-2xl lg:text-[32px] not-italic font-bold leading-[140%] lg:leading-[130%]">
                  {"Frequently Asked Questions"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Find answers to common questions about our ductless services, installation process, and maintenance requirements in our FAQ section."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] lg:h-[640px] self-stretch lg:flex-[1_0_0] bg-gray-200" />
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <h3 className="self-stretch text-center text-[32px] not-italic font-bold leading-[120%] lg:w-[768px] lg:text-[40px]">
          {"Discover the Power of Mitsubishi Products for Your HVAC Needs"}
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:item-start gap-12 self-stretch">
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {"Benefit from the NYSERDA Program and Save on Energy Costs"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "At our family-owned HVAC business, we specialize in offering top-notch heating, cooling, and ductless services in the capital region."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {"Experience Superior Comfort with Mitsubishi HVAC Solutions"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "As a Mitsubishi Diamond Contractor certified business, we provide exceptional installation and maintenance services for Mitsubishi HVAC systems."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-[1_0_0] self-stretch">
            <div className="flex flex-col items-center gap-5 lg:gap-6 self-stretch">
              <div className="w-12 h-12" />
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h5 className="self-stretch text-center text-xl lg:text-2xl not-italic font-bold leading-[140%]">
                  {"Get Answers to Your HVAC Questions in Our FAQ Section"}
                </h5>
                <p className="self-stretch text-center text-base not-italic font-normal leading-[150%]">
                  {
                    "Have questions about our services? Check out our FAQ section for helpful information and solutions."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch pt-2">
            <Button variant="ghost" color="primary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
