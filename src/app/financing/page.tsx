import { Button } from "@nextui-org/react";
import Container from "../components/container/container";
import Image from "next/image";

export default function FinancingPage() {
  return (
    <div className="rounded-lg shadow-2xl bg-slate-100 p-3">
      <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:pt-28">
        <div className="flex flex-col items-start gap-5 lg:gap-20 self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch lg:flex-[1_0_0]">
            <h1 className="self-stretch text-[40px] lg:text-[56px] not-italic font-bold leading-[120%]">
              {"Flexible Financing Options"}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch lg:flex-[1_0_0]">
            <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
              {
                "We understand your financing needs are as unique as the heating or cooling project specific to your home or business.  Learn how to apply for a line of credit that's right for the project and budget!"
              }
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-[374px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16">
        <Container>
          <div className="flex flex-col items-start gap-2 lg:gap-6 self-stretch lg:flex-[1_0_0]">
            <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
              <div className="flex flex-col items-start gap-5 lg:gap-6 self-stretch">
                <h2 className="self-stretch text-4xl lg:text-5xl not-italic font-bold leading-[120%]">
                  {
                    "Expand your purchasing power with Promotional Financing through Synchrony."
                  }
                </h2>
                <p className="self-stretch text-base lg:text-lg not-italic font-normal leading-[150%]">
                  {
                    "Synchrony is one of the nation's premier consumer financial services companies. Our roots in consumer finance trace back to 1932, and today we are the largest provider of private label credit cards in the United States based on purchase volume and receivables."
                  }
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-6 self-stretch lg:gap-8">
                  <ul className="list-disc mx-5">
                    <li>
                      {
                        "A simple application process, and fast credit decisions"
                      }
                    </li>
                    <li>{"Unsecured, revolving credit lines"}</li>
                    <li>{"Promotional financing options"}</li>
                    <li>{"Convenient monthly payment options"}</li>
                    <li>{"Online account management"}</li>
                  </ul>
                  <div className="my-0 mx-auto">
                    <Image
                      src="/synchrony.jpg"
                      width={300}
                      height={300}
                      alt="Synchrony"
                      className="shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <form
                name="eTailAppForm"
                action="https://etail.mysynchrony.com/eapply/eapply.action "
                method="post"
              >
                <input type="hidden" name="mid" value="5348121950077964" />
                <input type="hidden" name="pcgc" value="M900" />
                <Button type="submit" variant="shadow" color="primary">
                  Apply Online
                </Button>
              </form>
            </div>
          </div>
          <div className="h-[348px] lg:h-[640px] lg:flex-[1_0_0] self-stretch bg-slate-100" />
        </Container>
      </div>
    </div>
  );
}
