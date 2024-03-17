import { ContactProps, ContentProps, HeroProps } from "~/shared/types";

import heating1 from '~/assets/images/heating1.jpg';
import synchrony from '~/assets/images/synchrony.jpeg';

// Hero2 data on Financing page *******************
export const hero2Financing: HeroProps = {
    title: 'Financing',
    subtitle:
      'We understand your financing needs are as unique as the heating or cooling project specific to your home or business. Learn how to apply for a line of credit that\'s right for the project and budget!',
    /*tagline: 'About Us Page',*/
    image: {
      src: heating1,
      alt: 'Hero TailNext',
    },
  };

// Content data on Financing page *******************
export const contentFinancing: ContentProps = {
  id: 'contentOne-on-financing',
  hasBackground: true,
  header: {
    title: 'Expand your purchasing power with Promotional Financing through Synchrony.',
    //subtitle: '',
    //tagline: 'Content',
  },
  content:
    'Synchrony is one of the nation’s premier consumer financial services companies. Our roots in consumer finance trace back to 1932, and today we are the largest provider of private label credit cards in the United States based on purchase volume and receivables.',
  items: [
    {
      title: 'A simple application process, and fast credit decisions',
      //description:
        //'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Unsecured, revolving credit lines',
      //description:
      //  'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: `Promotional financing options*`,
      //description:
      //  'Subject to credit approval. Minimum monthly payments required. See store for details. For all promotions: Qualifying purchase must be made with your Home Design credit card issued by Synchrony Bank and a $29 account activation fee will apply and be charged at the time first purchase posts to account. For new accounts: Purchase APR is 26.99%; Minimum Monthly Interest Charge is $2. Existing cardholders should see their credit card agreement for their applicable terms. Subject to credit approval.',
    },
    {
      title: 'Convenient monthly payment options',
      //description:
      //  'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Online account management',
      //description:
      //  'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: synchrony,
    alt: 'Heating system image',
  },
  isReversed: false,
  isAfterContent: false,
};

export const contactFinancing: ContactProps = {
    hasBackground: false,
    header: {
      title: 'Apply today for a line of credit for your heating or cooling project!',
      //subtitle: 'Servicing Selkirk & New York\'s Capital District',
      //tagline: 'Contact',
    },
   /* content:
      'With over 15 years of experience, we are ready to assist you with any job, no matter how big or small. Please feel free to contact us through our online form, by phone, or by email..',
    items: [
      {
        title: 'Our Address',
        description: ['203 Cedar Grove Rd', 'Selkirk, NY 12158'],
        icon: IconMapPin,
      },
      {
        title: 'Contact',
        description: ['Phone: (518) 768-8800', 'Mail: office@cmmechanical.com'],
        icon: IconPhoneCall,
      },
      {
        title: 'Working hours',
        description: ['Monday - Friday: 08:00 AM - 4:30 PM'],
        icon: IconClock,
      },
    ],*/
    form: {
      //title: 'Ready to Get Started?',
      action: 'https://etail.mysynchrony.com/eapply/eapply.action ',
      method: 'post',
      inputs: [
        {
          type: 'hidden',
          name: 'mid',
          value: '5348121950077964',
        },
        {
          type: 'hidden',
          name: 'pcgc',
          value: 'C3',
        },
      ],
      /*textarea: {
        cols: 30,
        rows: 5,
        name: 'textarea',
        placeholder: 'Write your message...',
      },*/
      btn: {
        title: 'Apply Online',
        type: 'submit',
      },
    },
  };