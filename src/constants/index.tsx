// Exporting features data for the website, which highlights key features of the product
export const features = [
  {
    id: '0', // Unique identifier for the feature
    icon: '/images/feature-1.png', // Path to the feature icon image
    caption: 'Easy integration', // Short description of the feature
    title: 'Work smarter not harder', // Title for the feature
    text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.", // Detailed explanation of the feature
    button: {
      // Button related to this feature
      icon: '/images/magictouch.svg', // Icon for the button
      title: 'Watch the demo', // Button label
    },
  },
  {
    id: '1',
    icon: '/images/feature-2.png',
    caption: 'Secure & trustworthy',
    title: 'Sleep easy, we got your back',
    text: 'Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.',
    button: {
      icon: '/images/docs.svg',
      title: 'Read the docs',
    },
  },
];

// Exporting details data for specific capabilities or benefits of the product
export const details = [
  {
    id: '0', // Unique identifier for the detail
    icon: '/images/detail-1.png', // Path to the detail icon image
    title: 'AI automated video editing', // Title describing the feature
  },
  {
    id: '1',
    icon: '/images/detail-2.png',
    title: 'Collaborate with your team', // Title for this feature
  },
  {
    id: '2',
    icon: '/images/detail-3.png',
    title: 'Ultra fast cloud-engine', // Title for this feature
  },
  {
    id: '3',
    icon: '/images/detail-4.png',
    title: '24 / 7 Customer support', // Title for this feature
  },
];

// Exporting FAQ (Frequently Asked Questions) data with common customer inquiries
export const faq = [
  {
    id: '0', // Unique identifier for the FAQ entry
    question: 'How easy is it to setup Xora?', // The question
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.', // The answer to the question
  },
  {
    id: '1',
    question: 'Can I integrate Xora with other platforms?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '2',
    question: 'How often do you add new content?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '3',
    question: 'What your refund policy?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '4',
    question: 'Do you have corporate plans?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '5',
    question: 'What happens when I’m out of storage?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '6',
    question: 'Can I upgrade my plan?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '7',
    question: 'How do I invite my team?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '8',
    question: 'Do you offer training for individuals and teams?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '9',
    question: 'I’m locked out of my account what do I do?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
];

// Exporting pricing plans data with features included for each plan
export const plans = [
  {
    id: '0', // Unique identifier for the plan
    title: 'Core', // Name of the plan
    priceMonthly: 19, // Monthly price for the plan
    priceYearly: 12, // Yearly price for the plan
    caption: 'Best for solo creators', // Brief description of who this plan is ideal for
    features: [
      '100MB Cloud storage', // Feature 1 of the plan
      '100+ prompt templates', // Feature 2 of the plan
      '5 projects', // Feature 3 of the plan
      '24/7 support', // Feature 4 of the plan
    ],
    icon: '/images/circle.svg', // Icon representing the plan
    logo: '/images/plan-1.png', // Logo image for the plan
  },
  {
    id: '1',
    title: 'Overdrive',
    priceMonthly: 79,
    priceYearly: 59,
    caption: 'Most popular plan',
    features: [
      'All Starter features',
      '1TB additional storage',
      'Unlimited projects',
      'Analytics',
    ],
    icon: '/images/triangle.svg',
    logo: '/images/plan-2.png',
  },
  {
    id: '2',
    title: 'Team',
    priceMonthly: 39,
    priceYearly: 29,
    caption: 'Exclusively for teams',
    features: [
      'All Overdrive features',
      '10TB additional storage',
      '50% off per member',
      'Real-time collaboration',
    ],
    icon: '/images/hexagon.svg',
    logo: '/images/plan-3.png',
  },
];

// Array of testimonial data
export const testimonials = [
  {
    id: '0',
    name: 'Jessica Saunders',
    role: 'Globalnomads',
    avatarUrl: '/images/testimonials/jessica-saunders.png',
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: '1',
    name: 'Mark Erixon',
    role: 'Vid capital intl',
    avatarUrl: '/images/testimonials/mark-erixon.png',
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: '2',
    name: 'Melanie Hurst',
    role: 'Cyberleap',
    avatarUrl: '/images/testimonials/melanie-hurst.png',
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: '3',
    name: 'Alicia Barker',
    role: 'Cyberleap',
    avatarUrl: '/images/testimonials/alicia-barker.png',
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: '4',
    name: 'Becky Snider',
    role: 'Floclips',
    avatarUrl: '/images/testimonials/becky-snider.png',
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: '5',
    name: 'Jim Bradley',
    role: 'Vid capital intl',
    avatarUrl: '/images/testimonials/jim-bradley.png',
    comment:
      'The efficiency boost is undeniable. This platform has transformed our workflow, forever.',
  },
];

// Array of company logo data
export const logos = [
  {
    id: '0',
    title: 'Afterpay', // Company name
    url: '/images/logos/afterpay.svg', // Logo image path
    width: 156, // Logo width
    height: 48, // Logo height
  },
  {
    id: '1',
    title: 'Amplitude',
    url: '/images/logos/amplitude.svg',
    width: 194,
    height: 48,
  },
  {
    id: '2',
    title: 'Sonos',
    url: '/images/logos/sonos.svg',
    width: 115,
    height: 48,
  },
  {
    id: '3',
    title: 'Maze',
    url: '/images/logos/maze.svg',
    width: 142,
    height: 48,
  },
  {
    id: '4',
    title: 'Drips',
    url: '/images/logos/drips.svg',
    width: 77,
    height: 48,
  },
];

// SVG component for iOS icon
export const Ios = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
        fill="#EAEDFF"
      />
      <path
        d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

// SVG component for Android icon
export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
        fill="#EAEDFF"
      />
      <path
        d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
        fill="#EAEDFF"
      />
      <path
        d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
        fill="#EAEDFF"
      />
      <path
        d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L19.8992 17.5664L25.0844 11.3955Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

// Define the Windows component
export const Windows = () => {
  return (
    <svg
      width="33" // Set the width of the SVG
      height="32" // Set the height of the SVG
      viewBox="0 0 33 32" // Set the viewBox for scaling the SVG
      fill="none" // Set the fill color to none (transparent)
      xmlns="http://www.w3.org/2000/svg" // Set the XML namespace for the SVG
    >
      {/* Define the first path for the left side of the Windows icon */}
      <path
        d="M17.674 2.64859L29.4077 0.0307338C30.3171 -0.165605 31.1678 0.603406 31.1678 1.63418V12.7273C31.1678 13.6272 30.5078 14.3635 29.7011 14.3635H17.9674C17.1607 14.3635 16.5006 13.6272 16.5006 12.7273V4.25204C16.5006 3.46669 16.9846 2.79585 17.674 2.64859Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the second path for the right side of the Windows icon */}
      <path
        d="M17.674 29.3507L29.4077 31.9686C30.3171 32.1649 31.1678 31.3959 31.1678 30.3651V19.272C31.1678 18.3721 30.5078 17.6358 29.7011 17.6358H17.9674C17.1607 17.6358 16.5006 18.3721 16.5006 19.272V27.7473C16.5006 28.5326 16.9846 29.2035 17.674 29.3507Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the third path for the bottom left side of the Windows icon */}
      <path
        d="M11.7925 3.82676L2.99217 5.90466C2.31748 6.06827 1.8335 6.73912 1.8335 7.50811V12.7275C1.8335 13.6273 2.49352 14.3636 3.30021 14.3636H12.1005C12.9072 14.3636 13.5672 13.6273 13.5672 12.7275V5.41383C13.5672 4.38305 12.7018 3.5977 11.7925 3.82676Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the fourth path for the bottom right side of the Windows icon */}
      <path
        d="M2.99217 26.0948L11.7925 28.1727C12.7018 28.4018 13.5672 27.6164 13.5672 26.5856V19.272C13.5672 18.3721 12.9072 17.6358 12.1005 17.6358H3.30021C2.49352 17.6358 1.8335 18.3721 1.8335 19.272V24.4913C1.8335 25.2603 2.31748 25.9312 2.99217 26.0948Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
    </svg>
  );
};

// Define the Web component
export const Web = () => {
  return (
    <svg
      width="33" // Set the width of the SVG
      height="32" // Set the height of the SVG
      viewBox="0 0 33 32" // Set the viewBox for scaling the SVG
      fill="none" // Set the fill color to none (transparent)
      xmlns="http://www.w3.org/2000/svg" // Set the XML namespace for the SVG
    >
      {/* Define the first path for the top part of the Web icon */}
      <path
        d="M12.5484 0.847986C11.8284 2.95995 11.3164 5.15192 10.9164 7.34388C14.6285 6.92789 18.3727 6.92789 22.0848 7.34388C21.6848 5.15192 21.1728 2.97595 20.4528 0.847986C20.4307 0.759613 20.4238 0.686493 20.4164 0.607564C20.4131 0.572174 20.4097 0.535616 20.4048 0.495992C19.1567 0.191997 17.8447 0 16.5006 0C15.1405 0 13.8445 0.191997 12.5804 0.495992C12.5741 0.546895 12.5728 0.592737 12.5715 0.637543C12.5696 0.7054 12.5677 0.770896 12.5484 0.847986Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the second path for the top-right part of the Web icon */}
      <path
        d="M24.8211 7.67982C26.8852 8.03181 28.9172 8.52781 30.9333 9.1358C29.3493 5.82385 26.6771 3.15189 23.365 1.56792C23.989 3.56789 24.485 5.61585 24.8211 7.67982Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the third path for the bottom-left part of the Web icon */}
      <path
        d="M9.54034 30.2556C9.51633 30.2556 9.48833 30.2636 9.46033 30.2716C9.43233 30.2796 9.40433 30.2876 9.38033 30.2876C6.27619 28.7517 3.74809 26.2077 2.19602 23.1037C2.19602 23.0797 2.20402 23.0517 2.21202 23.0237C2.22002 22.9957 2.22802 22.9677 2.22802 22.9437C4.1801 23.5197 6.19619 23.9517 8.19628 24.2877C8.54829 26.3037 8.96431 28.3037 9.54034 30.2556Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the fourth path for the bottom-right part of the Web icon */}
      <path
        d="M30.8053 23.1197C29.2213 26.3037 26.5811 28.8797 23.365 30.4316C23.973 28.3997 24.485 26.3517 24.8211 24.2877C26.8372 23.9517 28.8212 23.5197 30.7733 22.9437C30.7637 22.9823 30.7772 23.0208 30.7896 23.0558C30.7977 23.079 30.8053 23.1006 30.8053 23.1197Z"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
      {/* Define the fifth path for the left side of the Web icon */}
      <path
        d="M9.54041 1.74401C8.96438 3.69598 8.54836 5.67994 8.21235 7.69591C6.14826 8.01591 4.10017 8.54394 2.212 9.13594C3.74809 11.2399 6.27619 13.7839 9.38033 15.3279C9.40433 15.3279 9.43233 15.3359 9.46033 15.3439C9.48833 15.3519 9.51633 15.3599 9.54034 15.3599C12.6445 15.3599 15.1725 13.7839 16.7246 11.6879C16.7246 11.6879 17.7326 10.6959 18.7446 10.6959C19.7566 10.6959 20.7646 11.6879 20.7646 11.6879C22.3167 13.7839 24.8447 15.3599 27.9488 15.3599C29.5089 15.3599 31.1809 14.5659 31.7648 13.2079C32.1968 12.1739 31.6848 10.8839 30.7738 9.67992C29.5178 7.91592 28.4537 6.19991 27.5406 4.93591C27.1486 4.32191 26.6766 3.31991 26.2366 2.72791C24.6126 1.21991 22.6845 0 20.4166 0.60792C21.1727 2.97592 21.6847 5.15191 22.0847 7.34391C18.3727 6.92791 14.6285 6.92791 10.9164 7.34391C11.3164 5.15191 11.8284 2.95991 12.5484 0.84791"
        fill="#EAEDFF" // Set the fill color of the path to a light color
      />
    </svg>
  );
};

export const links = [
  {
    id: '0',
    title: 'Ios',
    icon: <Ios />, // React component for the Ios icon
    url: '#',
  },
  {
    id: '1',
    title: 'Android',
    icon: <Android />, // React component for the Android icon
    url: '#',
  },
  {
    id: '2',
    title: 'Windows',
    icon: <Windows />, // React component for the Windows icon
    url: '#',
  },
  {
    id: '3',
    title: 'Web',
    icon: <Web />, // React component for the Web icon
    url: '#',
  },
];

export const socials = [
  {
    id: '0',
    title: 'x',
    icon: '/images/socials/x.svg', // Path to the 'x' social icon SVG
    url: '#',
  },
  {
    id: '1',
    title: 'Threads',
    icon: '/images/socials/threads.svg', // Path to the 'Threads' social icon SVG
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    icon: '/images/socials/instagram.svg', // Path to the 'Instagram' social icon SVG
    url: '#',
  },
  {
    id: '3',
    title: 'Discord',
    icon: '/images/socials/discord.svg', // Path to the 'Discord' social icon SVG
    url: '#',
  },
];
