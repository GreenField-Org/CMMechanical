import { Metadata } from "next";
import Container from "../components/container/container";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-3 self-stretch lg:gap-4">
            <p className="text-center text-base not-italic font-semibold leading-[150%]">
              {"Reliable"}
            </p>
            <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
              <h1 className="self-stretch text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]">
                {"Quality HVAC Services"}
              </h1>
              <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                {
                  "We are a family-owned HVAC business dedicated to providing top-quality heating and cooling services."
                }
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-4">
            <Button buttonText="Learn More" variant="primary" />
          </div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container center>
          <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch lg:flex-[1_0_0]">
            <h3 className="self-stretch text-[32px] lg:text-[40px] not-italic font-bold leading-[120%]">
              {"Our Journey to Becoming a Mitsubishi Diamond Contractor"}
            </h3>
            <p className="self-stretch text-lg not-italic font-normal leading-[150%]">
              {
                "We started as a family-owned HVAC business and now proudly offer heating, cooling, and ductless services in the capital region. Through our dedication and expertise, we have achieved the prestigious Mitsubishi Diamond Contractor certification."
              }
            </p>
          </div>
          <div className="h-[348px] lg:h-[640px] self-stretch lg:flex-[1_0_0] bg-gray-300"></div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="text-base not-italic font-semibold leading-[150%]">
            {"Experienced"}
          </p>
          <div className="flex flex-col items-start lg:item-center gap-5 lg:gap-6 self-stretch">
            <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
              {"Meet Our Team"}
            </h2>
            <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
              {"Our team members are experts in their respective fields."}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-14 lg:gap-24 self-stretch">
          <div className="flex flex-col items-start gap-12 self-stretch">
            {/* Team Members */}
          </div>
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-center gap-8 px-5 py-12 lg:w-[1440px] lg:gap-12 lg:px-16 lg:py-20">
        <p className="self-stretch text-base lg:text-lg not-italic font-bold leading-[150%]">
          {"Certified by top industry organizations for exceptional service"}
        </p>
        <div className="flex flex-col items-start gap-2 self-stretch">
          {/* Certifications */}
        </div>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-2 self-stretch lg:gap-6 lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 lg:gap-8 self-stretch">
              <div className="flex flex-col items-start gap-3 lg:gap-4 self-stretch">
                <p className="text-center text-base not-italic font-semibold leading-[150%]">
                  {"Reliable"}
                </p>
                <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                  <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                    {"Committed to Customer Satisfaction and Quality Service"}
                  </h2>
                  <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                    {
                      "At our family-owned HVAC business, we prioritize customer satisfaction and provide top-quality heating, cooling, and ductless services. With our Mitsubishi Diamond Contractor certification and expertise in the NYCERTA program, you can trust us for all your HVAC needs."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 self-stretch px-0 py-2">
                <div className="flex items-start gap-4 self-stretch">
                  <div className="w-4 h-4"></div>
                  <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                    {
                      "Expert HVAC Services for Residential and Commercial Clients"
                    }
                  </p>
                </div>
                <div className="flex items-start gap-4 self-stretch">
                  <div className="w-4 h-4"></div>
                  <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                    {
                      "Efficient Heating and Cooling Solutions for Year-Round Comfort"
                    }
                  </p>
                </div>
                <div className="flex items-start gap-4 self-stretch">
                  <div className="w-4 h-4"></div>
                  <p className="flex-[1_0_0] text-base not-italic font-normal leading-[150%]">
                    {"Ductless Systems for Flexible and Zoned Climate Control"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
          <div className="h-[348px] lg:h-[640px] self-stretch lg:flex-[1_0_0] bg-gray-300"></div>
        </Container>
      </div>
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start gap-5 lg:gap-6 lg:w-[560px] self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <h3 className="self-stretch text-[32px] lg:text-5xl not-italic font-bold leading-[120%]">
              {"Discover the Hassle-Free Process of Working with Us"}
            </h3>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
              {
                "At our family-owned HVAC business, we make it easy for you to get the heating, cooling, and ductless services you need. From the initial consultation to the installation and ongoing maintenance, we are with you every step of the way."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:item-start gap-12 lg:gap-8 self-stretch">
          <div className="flex flex-col items-start gap-3 self-stretch">
            <div className="w-12 h-12"></div>
            <h5 className="self-stretch text-xl not-italic font-bold leading-[140%]">
              {"Expert Consultation and Customized Solutions"}
            </h5>
            <p className="self-stretch text-base not-italic font-normal leading-[150%]">
              {
                "Our team of certified technicians will provide you with a thorough consultation, understanding your unique needs and recommending the best solutions for your home or business."
              }
            </p>
            <div className="flex flex-col items-start gap-2 self-stretch pt-2">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch">
            <div className="w-12 h-12"></div>
            <h5 className="self-stretch text-xl not-italic font-bold leading-[140%]">
              {"Efficient Installation and Quality Workmanship"}
            </h5>
            <p className="self-stretch text-base not-italic font-normal leading-[150%]">
              {
                "We ensure a seamless installation process, using top-of-the-line equipment and applying our expertise to deliver efficient and reliable results."
              }
            </p>
            <div className="flex flex-col items-start gap-2 self-stretch pt-2">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch">
            <div className="w-12 h-12"></div>
            <h5 className="self-stretch text-xl not-italic font-bold leading-[140%]">
              {"Ongoing Maintenance and Exceptional Service"}
            </h5>
            <p className="self-stretch text-base not-italic font-normal leading-[150%]">
              {
                "With our maintenance plans, we provide regular check-ups and prompt repairs to keep your HVAC system running smoothly. Count on us for exceptional service."
              }
            </p>
            <div className="flex flex-col items-start gap-2 self-stretch pt-2">
              <Button buttonText="Learn More" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
