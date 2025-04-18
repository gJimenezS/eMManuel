const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Using analytical and creative thinking to overcome challenges and deliver effective solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Teamwork",
    desc: "Collaborating with team members to leverage diverse skills for successful outcomes.",
  },
  {
    imgPath: "/images/time.png",
    title: "Responsibility",
    desc: "Embracing accountability and ensuring diligent execution in every project.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Emmanuel consistently delivered quality work, demonstrating exceptional professionalism and technical skills throughout his assignments. Emmanuel's dedication and commitment ensured that every project surpassed our expectations. We confidently endorse his outstanding performance and work ethic.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "Octuber 2023 - Present",
    responsibilities: [
      "Set up and maintain Pixel Streaming to deliver Unreal Engine content to web browsers.",
      "Develop the web interface for user interaction with streamed 3D content.",
      "Create server-side logic to handle communication between the web client and Unreal Engine.",
      "Design and manage databases for storing user and application data.",
    ],
  },
  {
    review: "Emmanuel's contributions to Copycom's graphic design and document services have been impressive. He consistently delivered creative solutions and efficient service to meet client needs.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Graphic Designer",
    date: "June 2021 - December 2022",
    responsibilities: [
      "Performed extensive graphic design and document editing to support client needs.",
      "Managed document creation, typing, and multi-format printing with precision.",
      "Provided direct customer service using Microsoft Office Suite, CorelDRAW, and Adobe Photoshop."
      ],
  },
  {
    review: "Emmanuel consistently delivered personalized financial solutions and exceptional service at Community Financial Service Center, INC. His dedication to resolving client inquiries and enhancing the customer experience was exemplary.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Delivered personalized financial solutions to clients, tailoring recommendations to their unique needs and goals.",
      "Efficiently managed customer inquiries and resolved complex issues, consistently achieving high satisfaction ratings.",
      "Collaborated with internal teams to streamline processes and ensure secure, high-quality service delivery.",
    ]    
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Enmanuel Henriquez",
    mentions: "Ecomars, LLC Founder",
    review: "I can’t say enough good things about Emmanuel; his proactive initiative and outstanding problem‑solving skills consistently led to swift, effective resolutions and elevated client satisfaction.",
    imgPath: "/images/client1.png",
  },

  {
    name: "Yassenia Nunez",
    mentions: "Manage of Community Financial Service Center, INC",
    review:
      "As Emmanuel’s manager at CFSC, I can confidently say he was an exceptional employee. He was always punctual, responsible, and highly efficient in his duties. Emmanuel stood out for his professionalism, willingness to help others, and consistent dedication to providing excellent service. It was a pleasure having him on our team.",
    imgPath: "/images/client4.png",
  },

  {
    name: "Genesis Jimenez",
    mentions: "Ecomars, LLC Founder",
    review:
      "Emmanuel was a dedicated and reliable worker who always gave his best in every task. He excelled in teamwork, communicating effectively and supporting his peers. His consistency in meeting deadlines and delivering high-quality work made him an invaluable asset.",
    imgPath: "/images/client2.png",
  }
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/emmanuell.196?igsh=MTB0bHIyYjI0ZGFncg==",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/emmanuelacostaayala/",
  },
];
export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
