import {
  IconArrowDown,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import oilHeating from '~/assets/images/oil_heating.jpg';
import nyserda from '~/assets/images/NYSERDA-Logo.png';
import mitsubishi from '~/assets/images/me-2color-1.png';
import diamondContractor from '~/assets/images/diamond-contractor.png';
import americanStandard from '~/assets/images/American-Standard-Logo.png';
import vpSupply from '~/assets/images/vp_supplylogo.webp';
import heating1 from '~/assets/images/heating1.jpg';
//import heating2 from '~/assets/images/heating2.jpg';
//import heating3 from '~/assets/images/heating3.jpg';
//import heating4 from '~/assets/images/heating4.jpg';
//import heating5 from '~/assets/images/heating_5.jpg';
//import heating6 from '~/assets/images/heating_6.jpg';
import cooling1 from '~/assets/images/cooling1.jpg';
import duct1 from '~/assets/images/duct1.jpg';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Experience top-quality <span className="hidden md:inline">heating, cooling, and ductless </span>
      <span className="sm:whitespace-nowrap">services</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold text-primary-600 decoration-1 underline-offset-2">
          C & M Mechanical
        </span>{' '}
        is a family-owned and operated business servicing the Capital Region.
      </span>{' '}
      We have over 15 years of delivering high quality service throughout the area.
    </>
  ),
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    icon: IconMail,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: oilHeating,
    alt: 'Oil Heating System',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nyserda,
      alt: 'ew York State NYSERDA program',
    },
    {
      link: 'https://react.dev/',
      src: mitsubishi,
      alt: 'Mitsubishi Electric ',
    },
    {
      link: 'https://tailwindcss.com/',
      src: diamondContractor,
      alt: 'Mitsuibishi Diamond Contractor',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: americanStandard,
      alt: 'American Standard',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: vpSupply,
      alt: 'CP Supply Corp',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">C&M Mechanical</span>
      </>
    ),
    subtitle:
      "We strive for the best customer service and satisfaction on the budget that is right for you.",
    //tagline: 'Features',
  },
  items: [
    {
      title: 'Reliablility',
      description:
        'Family is very important to us and we will treat you just like family. We will be there when you need us.',
      icon: IconListCheck,
      /*callToAction: {
        text: 'Discover now',
        href: '/',
      },*/
    },
    {
      title: 'Satisfaction',
      description:
        'We will make sure you are satisfied with our work. We will go above and beyond to make sure you are happy.',
      icon: IconComponents,
      /*callToAction: {
        text: 'Discover now',
        href: '/',
      },*/
    },
    {
      title: 'Best Products',
      description:
        'We will only use the best products for your home. We will make sure you are getting the best quality.',
      icon: IconBulb,
      /*callToAction: {
        text: 'Discover now',
        href: '/',
      },*/
    },
    /*{
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },*/
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Serices we provide',
    //subtitle: '',
    //tagline: 'Content',
  },
  content:
    'C&M Mechanical provides services for all tyoes of heating systems, including furnaces, boilers, and heat pumps.',
  items: [
    {
      title: 'Installation or repair of heating systems',
      //description:
        //'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Scheduled system inspections, maintenance, and tune-ups',
      //description:
      //  'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Replacement of Dirty or clogged filter',
      //description:
      //  'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
    {
      title: 'Address mechanical wear and tear',
      //description:
      //  'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'inspect and repair pilot or ignition control problems',
      //description:
      //  'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  /*images: [
    {
      src: '/heating1.jpg',
      alt: 'indoor heating system Image',
    }, 
    {
      src: '/heating2.jpg',
      alt: 'outdoor cooling system Image',
    },
    {
      src: '/heating3.jpg',
      alt: 'outdoor cooling system Image',
    },
    {
      src: '/heating4.jpg',
      alt: 'outdoor cooling system Image',
    },
    {
      src: '/heating_5.jpg',
      alt: 'outdoor cooling system Image',
    },
    {
      src: '/heating_6.jpg',
      alt: 'outdoor cooling system Image',
    },
  ],*/
  image: {
    src: heating1,
    alt: 'indoor heating system Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Let C&M Mechanical help you beat the summer heat with our quality residential and commercial Air Conditioning installation and maintenance services.',
  items: [
    {
      title: 'AC Installation',
    },
    {
      title: 'AC Repair',
    },
    {
      title: 'Duct cleaning and repair',
    },
    {
      title: 'Indoor air quality assessments',
    },
    {
      title: 'AMintenance',
    },
  ],
  image: {
    src: cooling1,
    alt: 'outdoor cooling system Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Content data on Home page *******************
export const contentHomeThree: ContentProps = {
  id: 'contentOne-on-home-three',
  hasBackground: true,
  content:
    'Looking for an alternative heating and cooling solution that is easy to install, cost-effective, and can even help improve indoor air quality? Sometimes referred to as split systems, ductless heating and cooling offers a simple way to replace inefficient window air conditioning units, space heaters and electric baseboard heaters. They can be installed in homes, apartments or condominiums, or to improve temperature control in specific rooms. Ductless systems can even be fit for buildings that currently use ducted forced-air systems.',
  items: [
    {
      title: 'Zone consultation and planning for optimal efficiency',
    },
    {
      title: 'Indoor air quality assessments',
    },
    {
      title: 'Installation, inspection, and maintenance of ductless systems',
    },
  ],
  image: {
    src: duct1,
    alt: 'outdoor hvac system Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Sed ac magna sit amet risus tristique interdum.',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Don\'t take our word for it. Hear what our customers are saying about us.',
  },
  testimonials: [
    {
      name: 'Shannon Bishop',
      job: 'Home Owner',
      testimonial: `In March of this year I needed a new furnace ASAP. I gathered multiple quotes, C&M was most affordable and helped me out right away. They are very responsive, reliable, on time, and professional. I was referred by a friend and very thankful I chose C&M. I highly recommend C&M! You won't be disappointed. Jim and Chris are great!!  Thank you C&M!!`,
      /*image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },*/
      href: 'https://g.co/kgs/6qi6uQG',
    },
    {
      name: 'Robert Posch',
      job: 'Home Owner',
      testimonial: `C&M was listed among NYSERDA contractors. I received 4 proposals from different contractors. James invested the time to thoroughly evaluate our current LP ducted heat system, the home floor plan and our currently unmet AC needs. He proposed a ductless heat pump for loft, and ducted replacement for 1st floor. The proposal, though not the least expensive, was the most thorough and took ALL factors into consideration. Other contractors seemed rushed, not nearly as thorough in their evaluations and more pressure to sign proposal and get out the door. When the date arrived for install, James and son arrived as scheduled, conducted themselves in the most professional manner and completed Phase I ductless install. Second Phase Ducted system was delayed due to manufacturers supply issues. James communicated regularly with updates and as soon as equipment was available installed the ducted system. His preferred approach was EXCELLENT! We had AC during the recent hot spell, which cooled our loft and remarkably, our 1st floor to comfort. It has been over a month and I cannot express our gratitude for the level of professionalism and quality of our installation. I highly recommend C&M.`,
      /*image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },*/
      href: 'https://g.co/kgs/DgNYKbN',
    },
    {
      name: 'Zach Rebeor',
      job: 'Home Owner',
      testimonial: `I needed a hot water tank removed and switched to an electric one. I contacted Jim and he was able to set up a time and gave me all the information I needed. The install was quick and my new water heater is running great. Very pleased with how quick and efficient both Jim and Chris were. Thank you again for your help and expertise!`,
      /*image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },*/
      href: 'https://g.co/kgs/ttXSS5e/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Servicing Selkirk & New York\'s Capital District',
    tagline: 'Contact',
  },
  content:
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
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
