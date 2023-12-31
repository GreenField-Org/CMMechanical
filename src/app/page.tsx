import Image from "next/image";
import Cta from "./components/cta/cta";
import Faq from "./components/faq/faq";
import Carousel from "./components/carousel/carousel";
import Button from "./components/button/button";
import Container from "./components/container/container";
import { ConstructOutline } from "react-ionicons";
import Testimonial from "./components/testimonial/testimonial";
import Section from "./components/section/section";

export default function Home() {
  return (
    <>
      <div className="flex w-[375px] h-[812px] flex-col items-center lg:w-[1440px] lg:h-[824px]">
        <div className="flex-[1_0_0] self-stretch bg-slate-800">
          <video src="https://picsum.photos/200/300" />
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
      <Section>
        <div className="flex flex-col lg:flex-row items-start gap-12 self-stretch lg:items-center lg:gap-20">
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-6 self-stretch lg:gap-8">
              <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
                <p className="text-center text-base not-italic font-semibold leading-[150%]">
                  {"Efficient"}
                </p>
                <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
                  <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
                    {"Expert Heating Services for Your Home"}
                  </h2>
                  <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
                    {
                      "Stay warm and comfortable with our top-notch heating services. We specialize in providing efficient heating solutions tailored to your needs."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 self-stretch px-0 py-2 lg:flex-row">
                {/*list*/}
                <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4 lg:flex-[1_0_0]">
                  <h6 className="self-stretch text-lg not-italic font-bold leading-[140%] lg:text-xl">
                    {"Reliable Solutions"}
                  </h6>
                  <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                    {
                      "Our team of experts will ensure your home is cozy and warm throughout the winter."
                    }
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4 lg:flex-[1_0_0]">
                  <h6 className="self-stretch text-lg not-italic font-bold leading-[140%] lg:text-xl">
                    {"Flexible Options"}
                  </h6>
                  <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                    {
                      "Choose from a wide range of heating systems that suit your budget and preferences."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
          <div className="h-[348px] self-stretch lg:h-[640px] lg:flex-[1_0_0] bg-slate-800">
            {/*Image*/}
            <img
              src={"https://picsum.photos/seed/picsum/200/300"}
              width={200}
              height={200}
              alt="test image"
            />
          </div>
        </div>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
              <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
                <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
                  {"Cooling Services for a Comfortable Home"}
                </h2>
                <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
                  {
                    "Stay cool all summer long with our reliable and efficient cooling services. Our team of experts is dedicated to providing top-notch installation, repair, and maintenance services for all your cooling needs."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="primary" />
            </div>
          </div>
          <div className="h-[348px] self-stretch lg:h-[640px] lg:flex-[1_0_0] bg-slate-800">
            <img
              src={"https://picsum.photos/seed/picsum/200/300"}
              width={200}
              height={200}
              alt="test image"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
              <p className="text-center text-base not-italic font-semibold leading-[150%]">
                {"Efficient"}
              </p>
              <div className="flex flex-col items-start gap-5 self-stretch lg:gap-6">
                <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
                  {"Ductless Services for Optimal Home Comfort"}
                </h2>
                <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
                  {
                    "Experience the ultimate comfort and energy efficiency with our top-of-the-line ductless services. Our expert technicians will install, repair, and maintain your ductless system, ensuring optimal performance and cost savings."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
          <div className="h-[348px] self-stretch lg:h-[640px] lg:flex-[1_0_0]" />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col items-start gap-10 self-stretch lg:gap-10 lg:flex-[1_0_0]">
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-[166px] lg:h-[130px] bg-slate-800" />
              <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] lg:gap-4">
                <h4 className="self-stretch text-2xl not-italic font-bold leading-[140%] lg:text-[32px] lg:leading-[130%]">
                  {"Discover Our Products"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "We offer a wide range of high-quality Mitsubishi heating, cooling, and ductless products. Our products are designed to provide efficient and reliable solutions for your home."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-[166px] lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] lg:gap-4">
                <h4 className="self-stretch text-2xl not-italic font-bold leading-[140%] lg:text-[32px] lg:leading-[130%]">
                  {"Join the NYSERTA Program"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "We are proud to be part of the NYCERTA program, which promotes energy efficiency and sustainability. By working with us, you can contribute to a greener future for your community."
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start gap-8 self-stretch">
              <div className="w-0.5 h-[166px] lg:h-[130px]" />
              <div className="flex flex-col justify-center items-start gap-3 flex-[1_0_0] lg:gap-4">
                <h4 className="self-stretch text-2xl not-italic font-bold leading-[140%] lg:text-[32px] lg:leading-[130%]">
                  {"Frequently Asked Questions"}
                </h4>
                <p className="self-stretch text-base not-italic font-normal leading-[150%]">
                  {
                    "Have questions? Check out our FAQ section to find answers to common inquiries about our services, products, and more."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="h-[348px] self-stretch lg:h-[640px] lg:flex-[1_0_0]" />
        </Container>
      </Section>
      {/* Testimonials */}
      <Cta />
    </>
  );
}
