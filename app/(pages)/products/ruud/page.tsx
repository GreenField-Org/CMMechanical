import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Ruud Furnaces & Central AC Installation | Albany NY | C&M Mechanical`,
    description: 'Ruud Pro Partner installing high-efficiency furnaces and central air conditioning systems in Albany, Bethlehem, Niskayuna & the Capital Region NY. Licensed, trusted, 22+ years experience.',
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
