import type { Metadata } from 'next';
import Script from 'next/script';

import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <iframe src="https://www.cognitoforms.com/f/LvQPwOaDqkqSdWMZXeMjwg/4" style={{border: 0, width: '100%', height:"889"}}></iframe>
      <Script src="https://www.cognitoforms.com/f/iframe.js"></Script>
    </>
  );
};

export default Page;
