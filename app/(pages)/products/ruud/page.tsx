import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Ruud Products`,
    alternates: {
        canonical: '/products/ruud',
    },
  };
  
const Page = () => {
  return (
    <>
      <iframe
        src="https://greenervigil.github.io/ruud_landing/"
        rel="nofollow"
        width="100%"
        height="850px"
      ></iframe>
    </>
  );
};

export default Page;
