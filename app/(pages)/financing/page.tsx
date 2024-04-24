import { Metadata } from "next";
import WidgetWrapper from "~/components/common/WidgetWrapper";
import Contact from "~/components/widgets/Contact";
import Content from "~/components/widgets/Content";
import Hero2 from "~/components/widgets/Hero2";
import { contactFinancing, contentFinancing, hero2Financing } from "~/shared/data/pages/financing.data";

export const metadata: Metadata = {
    title: 'Financing Options',
    alternates: {
        canonical: '/financing',
    },
  };

const Page = () => {
    return (
        <>
        <Hero2 {...hero2Financing}/>
        <Content {...contentFinancing} />
        <WidgetWrapper hasBackground containerClass="flex flex-col md:flex-row justify-center items-center gap-20 -start-10">
            <div className="text-xs w-4/5 md:w-1/3">
            <div>Subject to credit approval.</div>
            <div>
                Minimum monthly payments required. See store for details. For all promotions: Qualifying purchase must be made with your Home Design credit card issued by Synchrony Bank and a $29 account activation fee will apply and be charged at the time first purchase posts to account. For new accounts: Purchase APR is 26.99%; Minimum Monthly Interest Charge is $2. Existing cardholders should see their credit card agreement for their applicable terms. Subject to credit approval.
            </div>    
            </div>
        <form name="eTailAppForm" action="https://etail.mysynchrony.com/eapply/eapply.action " method="post"> 
            <input type="hidden" name="mid" value="5348121950077964" />
            <input type="hidden" name="pcgc" value="M900" />
            <button type='submit' className="btn btn-primary sm:mb-0">
             Apply Online
            </button>
        </form>
        </WidgetWrapper>
        </>
    );
}

export default Page;
