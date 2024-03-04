import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Script from "next/script";

export default function ContactPage() {
  const items = [
    {
      label: "Installation",
      value: "installation",
    },
    {
      label: "Maintenance",
      value: "maintenance",
    },
    {
      label: "Repair",
      value: "repair",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  return (
    <div className="w-full mt-8 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact C&M Mechanical today!
      </h1>
      <h4 className="text-2xl text-primary font-bold text-center mb-8">
        Servicing Selkirk & New York&apos;s Capital District
      </h4>
      <p className="mb-8 max-w-[600px]">
        With over 15 years of experience, we are ready to assist you with any
        job, no matter how big or small. Please feel free to contact us through
        our online form and we will get back to you as soon as possible.
      </p>
      <iframe
        src="https://www.cognitoforms.com/f/LvQPwOaDqkqSdWMZXeMjwg/4"
        className="border-none shadow-2xl rounded-lg w-full"
        height="751"
      ></iframe>
      <Script src="https://www.cognitoforms.com/f/iframe.js"></Script>
    </div>
  );
}
