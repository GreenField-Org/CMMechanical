import { Metadata } from "next";
import CallToAction2 from "~/components/widgets/CallToAction2";
import Content from "~/components/widgets/Content";
import Hero from "~/components/widgets/Hero";
import { callToAction2Nyserda, contentNyserda, hero2Nyserda } from "~/shared/data/pages/nyserda.data";

export const metadata: Metadata = {
    title: `NYSERDA Heat Pump Rebates | Authorized Installer Albany NY | C&M Mechanical`,
    description: 'C&M Mechanical is an authorized NYSERDA contractor helping Albany-area homeowners qualify for NY State heat pump rebates. Save thousands on ductless heat pump installation. Free assessment.',
    alternates: {
        canonical: '/nyserda',
    },
    };

const Page = () => {
    return (
        <>
            <Hero {...hero2Nyserda} />
            <Content {...contentNyserda} />
            <CallToAction2 {...callToAction2Nyserda} />
        </>
    )
}

export default Page;