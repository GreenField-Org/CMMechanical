import Button from "@/app/components/button/button";
import Container from "@/app/components/container/container";
import Faq from "@/app/components/faq/faq";

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

export default function CoolingPage() {
    return (
        <>
        <div className="w-[375px] h-[352px] px-5 py-16 bg-black bg-opacity-50 flex-col justify-start items-start gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-56 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-[152px] flex-col justify-start items-start gap-3 flex">
            <div className="text-white text-base font-semibold leading-normal">Expertise</div>
            <div className="self-stretch h-[116px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch text-white text-[40px] lg:font-[56px] font-bold leading-[48px]">Stay Cool All</div>
                <div className="self-stretch text-white text-base lg:text-lg font-normal leading-normal">Trust our family-owned HVAC business in the capital region for reliable cooling services.</div>
            </div>
        </div>
        <div className="pt-4 justify-start items-start gap-4 inline-flex">
            <Button buttonText="Learn More" variant="secondary" />
            <Button buttonText="Contact Us" variant="secondary" />
        </div>
    </div>
</div>
<div className="w-[375px] h-[1014px] px-5 py-16 flex-col justify-start items-start gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-[886px] flex-col justify-start items-start gap-12 flex lg:flex-row">
        <div className="self-stretch h-[490px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="w-[142px] self-stretch origin-top-left rotate-90 border-2 border-black"></div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                    <div className="self-stretch text-2xl font-bold leading-[33.60px]">Expert Cooling Services</div>
                    <div className="self-stretch text-base font-normal leading-normal">We offer professional air conditioning installation, maintenance, and repair services to keep your home cool and comfortable.</div>
                </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="w-[142px] self-stretch origin-top-left rotate-90 opacity-0 border-2 border-black"></div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                    <div className="self-stretch text-2xl font-bold leading-[33.60px]">Quality AC Solutions</div>
                    <div className="self-stretch text-base font-normal leading-normal">Our team of certified technicians is experienced in providing top-notch air conditioning solutions tailored to your specific needs.</div>
                </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="w-[142px] self-stretch origin-top-left rotate-90 opacity-0 border-2 border-black"></div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                    <div className="self-stretch text-2xl font-bold leading-[33.60px]">Reliable AC Repair</div>
                    <div className="self-stretch text-base font-normal leading-normal">When your air conditioner breaks down, our experts are here to quickly diagnose and repair any issues, ensuring your system is up and running smoothly.</div>
                </div>
            </div>
        </div>
        <img className="self-stretch h-[348px]" src="https://via.placeholder.com/335x348" />
    </div>
</div>
<div className="w-[375px] h-[901px] px-5 py-16 flex-col justify-start items-start gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-[773px] flex-col justify-start items-start gap-12 flex">
        <div className="self-stretch h-[377px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[305px] flex-col justify-start items-start gap-3 flex">
                <div className="text-center text-base font-semibold leading-normal">Efficient</div>
                <div className="self-stretch h-[269px] flex-col justify-start items-start gap-5 flex">
                    <div className="self-stretch text-4xl font-bold leading-[43.20px]">Stay Cool with Mitsubishi Cooling Solutions</div>
                    <div className="self-stretch text-base font-normal leading-normal">Experience ultimate comfort with our range of Mitsubishi cooling products. From air conditioners to ductless systems, we have the perfect solution to keep your home cool and comfortable all year round.</div>
                </div>
            </div>
            <div className="pt-4 justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                    <div className="text-base font-normal leading-normal">Learn More</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                    <div className="text-base font-normal leading-normal">Sign Up</div>
                    <div className="w-6 h-6 relative"></div>
                </div>
            </div>
        </div>
        <img className="self-stretch h-[348px]" src="https://via.placeholder.com/335x348" />
    </div>
</div>
<div className="w-[375px] h-[1042px] px-5 py-16 flex-col justify-start items-start gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-[914px] flex-col justify-start items-start gap-12 flex">
        <div className="self-stretch h-[518px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-[306px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch text-[32px] font-bold leading-[38.40px]">Choose Our Cooling Services for Energy Efficiency, Cost Savings, and Improved Comfort</div>
                <div className="self-stretch text-base font-normal leading-normal">Our cooling services offer energy-efficient solutions that can help you save on your utility bills while ensuring optimal comfort in your home or office.</div>
            </div>
            <div className="self-stretch h-48 py-2 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative"></div>
                    <div className="grow shrink basis-0 text-base font-normal leading-normal">Energy-efficient cooling solutions for cost savings</div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative"></div>
                    <div className="grow shrink basis-0 text-base font-normal leading-normal">Enhanced comfort with our cooling services</div>
                </div>
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="w-4 h-4 relative"></div>
                    <div className="grow shrink basis-0 text-base font-normal leading-normal">Stay cool and save money with our cooling solutions</div>
                </div>
            </div>
        </div>
        <img className="self-stretch h-[348px]" src="https://via.placeholder.com/335x348" />
    </div>
</div>
<div className="w-[375px] h-[1681px] px-5 py-16 flex-col justify-start items-center gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-[281px] flex-col justify-start items-center gap-3 flex">
        <div className="text-center text-base font-semibold leading-normal">Efficient</div>
        <div className="self-stretch h-[245px] flex-col justify-start items-center gap-5 flex">
            <div className="self-stretch text-center text-4xl font-bold leading-[43.20px]">Easy and Convenient Cooling Services for You</div>
            <div className="self-stretch text-center text-base font-normal leading-normal">Scheduling and receiving cooling services from our company is a breeze. Our team of experts will guide you through the process, ensuring a seamless experience from start to finish.</div>
        </div>
    </div>
    <div className="self-stretch h-[1224px] flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch h-[1136px] flex-col justify-start items-center gap-12 flex">
            <div className="self-stretch h-[358px] flex-col justify-start items-start gap-6 flex">
                <img className="self-stretch h-[198px]" src="https://via.placeholder.com/335x198" />
                <div className="self-stretch h-[136px] flex-col justify-start items-center gap-5 flex">
                    <div className="self-stretch text-center text-2xl font-bold leading-[33.60px]">Step 1: Schedule Your Cooling Service</div>
                    <div className="self-stretch text-center text-base font-normal leading-normal">Contact us to schedule your cooling service appointment.</div>
                </div>
            </div>
            <div className="self-stretch h-[358px] flex-col justify-start items-start gap-6 flex">
                <img className="self-stretch h-[198px]" src="https://via.placeholder.com/335x198" />
                <div className="self-stretch h-[136px] flex-col justify-start items-center gap-5 flex">
                    <div className="self-stretch text-center text-2xl font-bold leading-[33.60px]">Step 2: Professional Cooling Service</div>
                    <div className="self-stretch text-center text-base font-normal leading-normal">Our certified technicians will arrive promptly and provide top-notch cooling services.</div>
                </div>
            </div>
            <div className="self-stretch h-[324px] flex-col justify-start items-start gap-6 flex">
                <img className="self-stretch h-[198px]" src="https://via.placeholder.com/335x198" />
                <div className="self-stretch h-[102px] flex-col justify-start items-center gap-5 flex">
                    <div className="self-stretch text-center text-2xl font-bold leading-[33.60px]">Step 3: Enjoy Cool Comfort</div>
                    <div className="self-stretch text-center text-base font-normal leading-normal">Sit back, relax, and enjoy the cool comfort of your home.</div>
                </div>
            </div>
        </div>
        <div className="pt-4 justify-start items-center gap-6 inline-flex">
            <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                <div className="text-base font-normal leading-normal">Schedule</div>
            </div>
            <div className="justify-center items-center gap-2 flex">
                <div className="text-base font-normal leading-normal">Contact</div>
                <div className="w-6 h-6 relative"></div>
            </div>
        </div>
    </div>
</div>
<div className="w-[375px] h-[312px] px-5 py-16 flex-col justify-start items-start gap-12 inline-flex lg:w-[1440px] lg:h-[470px] lg:px-16 lg:py-28 lg:gap-20">
    <div className="self-stretch h-[184px] flex-col justify-center items-start gap-6 flex">
        <div className="self-stretch h-28 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-[32px] font-bold leading-[38.40px]">Expert Cooling Services for You</div>
            <div className="self-stretch text-base font-normal leading-normal">Stay cool with our reliable cooling solutions</div>
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
            <div className="px-6 py-3 bg-black border border-black justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal leading-normal">Schedule</div>
            </div>
            <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                <div className="text-base font-normal leading-normal">Contact</div>
            </div>
        </div>
    </div>
</div>
<div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-[1440px] lg:gap-20 lg:px-16 lg:py-28">
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
    )
}