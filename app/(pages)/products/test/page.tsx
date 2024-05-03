import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Mitsubishi Products`,
    alternates: {
        canonical: '/products/test',
    },
  };
  
const Page = () => {
    return (
        <div>
            <iframe src="https://ruud.com/endeavor/" rel="nofollow" width="100%" height="850px" />
        </div>
    )
}

export default Page;