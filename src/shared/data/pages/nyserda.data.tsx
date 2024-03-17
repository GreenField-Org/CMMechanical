import { CallToActionProps, ContactProps, ContentProps, HeroProps } from "~/shared/types";

import findContractors1 from '~/assets/images/FindContractors1.jpg';
import nysClean from '~/assets/images/nysClean.jpeg';
import synchrony from '~/assets/images/synchrony.jpeg';
import { IconDownload, IconMail } from "@tabler/icons-react";

// Hero2 data on Financing page *******************
export const hero2Nyserda: HeroProps = {
    title: 'New York State Energy Research and Development Authority (NYSERDA)',
    subtitle:
      'We are a certified contractor of the NYSERDA program. We can help you with the paperwork and the installation of your new heating or cooling system. Learn more about the program and how to apply!',
    /*tagline: 'About Us Page',*/
    image: {
      src: findContractors1,
      alt: 'NYS Contractor',
    },
    callToAction: {
        text: 'Learn More',
        href: 'https://www.nyserda.ny.gov/About',
        targetBlank: true,
    },
    callToAction2: {
        text: 'NYSERDA Opportunities',
        href: 'https://www.nyserda.ny.gov/Funding-Opportunities',
        targetBlank: true,
        },
  };

// Content data on NYSERDA page *******************
export const contentNyserda: ContentProps = {
  id: 'contentOne-on-nyserda',
  hasBackground: true,
  header: {
    title: 'What is the NYSERDA Program?',
    subtitle: 'NYSERDA offers objective information and analysis, innovative programs, technical expertise, and support to help New Yorkers increase energy efficiency, save money, use renewable energy, and reduce reliance on fossil fuels. A public benefit corporation, NYSERDA has been advancing energy solutions and working to protect the environment since 1975',
    //tagline: 'Content',
  },
  content:
    'NYSERDA provides resources, expertise, and objective information so New Yorkers can make confident, informed energy decisions.',
  items: [
    {
      title: 'Enables communities, residents, and businesses to benefit from and take action on clean energy, climate, and resilience',
      //description:
        //'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Leverages program and private investments to support job creation and expand access to economic opportunities for underserved populations and other Disadvantaged Communities',
      //description:
      //  'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: `Overcomes risks and barriers to promote innovation and large-scale clean energy development`,
      //description:
      //  'Subject to credit approval. Minimum monthly payments required. See store for details. For all promotions: Qualifying purchase must be made with your Home Design credit card issued by Synchrony Bank and a $29 account activation fee will apply and be charged at the time first purchase posts to account. For new accounts: Purchase APR is 26.99%; Minimum Monthly Interest Charge is $2. Existing cardholders should see their credit card agreement for their applicable terms. Subject to credit approval.',
    },
  ],
  image: {
    src: nysClean,
    alt: 'New York State Clean Energy Community',
  },
  isReversed: true,
  isAfterContent: false,
};

// CallToAction data *******************
export const callToAction2Nyserda: CallToActionProps = {
    title: 'Contact us for more information',
    subtitle:
      'As a partnered contractor with they NYSERDA program we can help you with the paperwork and the installation of your new heating or cooling system. Learn more about the program and how to apply!',
    callToAction: {
      text: 'reach out to us for more information',
      href: '/contact',
      icon: IconMail,
    },
    items: [
      {
        title: 'Contact Us',
        description: 'Reach out to us with your questions around the program and how we can help you with the process.',
        href: '/contact',
      },
      {
        title: 'Learn more',
        description: 'Learn more about the program and how to apply. ',
        href: 'https://www.nyserda.ny.gov/About',
      },
      {
        title: 'Learn More about the program opportunities',
        description: 'Morbi orci nunc, euismod ac dui id, convallis.',
        href: 'https://www.nyserda.ny.gov/All-Programs',
      },
    ],
  };