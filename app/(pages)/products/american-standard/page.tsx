import { Metadata } from "next";

export const metadata: Metadata = {
    title: `American Standard Products`,
  };

const Page = () => {
    return (
        <div>
        <iframe src="https://www.vpsupply.com/products.html?brands=35763" rel="nofollow" width="100%" height="850px" />
    </div>
    )
}

export default Page;