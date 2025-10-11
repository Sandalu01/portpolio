import {
  mobile,
  backend,
  creator,
  iosdeveloper,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  payshia,
  starbucks,
  tesla,
  shopify,
  back,
  font,
  whetherapp,
  modern,
  food,
  mobilemart,
  TMV,
  japura,
  dev,
  reserve,
  weblink,
  realtime,
  object,
  advance
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Web Application Developer",
    icon: font,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
  {
    title: "SwiftUI Developer",
    icon: iosdeveloper,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];
export const education = [
  {
    date: "2018-2020",
    degree: "A/L Engineering Technology Steam",
    institution_name: "A/Thalawa National School",
    icon: TMV,
    iconBg: "#ffffff",
    points: [
      "Engineering Technology",
      "Science for Technology",
      "Information & Communication Technology",
    ],
  },
  {
    date: "2023-2024",
    degree: "Master Programme Diploma",
    institution_name: "Developer Stack Academy",
    icon: dev,
    iconBg: "#ffffff",
    points: [
      "Developed Java and JavaFX projects",
      "Learned React, JavaScript and Node.js",
      "Developed Ionic mobile applications with Firebase backend",
    ],
  },
  {
    date: "2021-2025",
    degree: "Bachelor of Information and Communication Tech. Honors (Specialized in Software)",
    institution_name: "Faculty Of Technology, University of Sri Jayewardenepura",
    icon: japura,
    iconBg: "#ffffff",
    points: [
      "Member of ICTS at Faculty Of Technology",
      "Member of Astronomy club at University of Sri Jayewardenepura",
    ],
  },
];

const experiences = [
  {
    title: "Intern Software Engineer",
    company_name: "Payshia Software Solutions (Pvt) Ltd",
    icon: payshia,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining responsive web applications using React.js, JavaScript, and modern frontend technologies",
      "Collaborating with UI/UX designers and backend developers to create seamless user experiences",
      "Implementing state management solutions using Redux and Context API for complex applications",
      "Optimizing application performance and ensuring cross-browser compatibility",
      "Participating in agile development processes and code review sessions",
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://media.istockphoto.com/id/1513285157/photo/leader-ceo-and-manager-in-a-boardroom-meeting-with-his-team-for-planning-strategy-and.jpg?s=612x612&w=0&k=20&c=5pazFxAN8yRzwVdhNsyxtSEqLfEdMlGVGdDbbe7L5Ec=",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://media.istockphoto.com/id/1499761455/photo/portrait-of-smiling-50s-stylish-confident-mature-businesswoman-middle-aged-company-ceo.jpg?s=612x612&w=0&k=20&c=rZmKoShimq1enUcdJveCEAe3OxE-cwgKw8moRx_1pvo=",
  },
];

const projects = [
  {
    name: "Food Order App",
    points: [
      "Ionic mobile application",
      "Used Firebase storage for uploading and retrieving images",
      "Used Firebase database for storing email and password authentication",
    ],
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "CSS, SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Sandalu01/Food-Order-App",
  },
  {
    name: "Object Detection",
    points: [
      "Real-time object detection using web camera",
      "Video-based object detection and classification",
      "AI model identifies different types of objects in images",
    ],
    tags: [
      {
        name: "Jupyter Notebook, Google Colab",
        color: "blue-text-gradient"
      },
      {
        name: "Python, COCO Model",
        color: "green-text-gradient",
      },
      {
        name: "COCO Dataset",
        color: "pink-text-gradient",
      },
    ],
    image: object, 
    source_code_link: "https://github.com/Sandalu-Xe/Object-detection",
  },
  {
    name: "Apple Frameworks",
    points: [
      "Developed using SwiftUI",
      "Displays current weather conditions and forecasts",
      "Interactive weather application with modern UI design",
    ],
    tags: [
      {
        name: "SpriteKit",
        color: "blue-text-gradient",
      },
      {
        name: "SF Symbols",         
        color: "green-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "pink-text-gradient",
      },
    ],
    image: modern,
    source_code_link: "https://github.com/Sandalu01/Apple-Framework",
  },
  {
    name: "Advanced Authentication in React",
    points: [
      "Email verification system with secure endpoints",
      "Welcome email templates and automated responses",
      "Forgot password and reset password functionality",
      "Secure authentication flow with JWT tokens",
    ],
    tags: [
      {
        name: "React, Express",
        color: "blue-text-gradient",
      },
      {
        name: "Mailtrap, Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: advance,
    source_code_link: "https://github.com/Sandalu-Xe/Advanced-Auth",
  },
  
  {
    name: "Weather App",
    points: [
      "Developed using SwiftUI",
      "5-day weather forecast with detailed information",
      "Automatic day/night mode switching based on time",
    ],
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Xcode 12.0+",
        color: "green-text-gradient",
      },
      {
        name: "SF Symbols",
        color: "pink-text-gradient",
      },
    ],
    image: whetherapp,
    source_code_link: "https://github.com/Sandalu01/Weather-App",
  },
];

const teamworks = [
  {
    name: "Reserve TT",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS, AWS",
        color: "pink-text-gradient",
      },
    ],
    points: [
      "Created a sleek and intuitive user interface",
      "Integrated API for real-time classroom booking updates",
      "Enhanced performance for a smooth user experience",
    ],
    image: reserve,
    source_code_link: "https://github.com/RavanaDevs/classroom-booking-system",
    webpage: "https://classroom-booking-system-dev.vercel.app/",
  },

  {
    name: "Real-Time Train Monitoring System",
    tags: [
      {
        name: "GPS, ESP32, Keypad, Node MCU, LCD Display",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB, Linode",
        color: "green-text-gradient",
      },
      {
        name: "React Bootstrap, Tailwind CSS, React, Node.js",
        color: "pink-text-gradient",
      },
    ],
    points: [
      "Created a sleek and intuitive user interface",
      "Integrated API for real-time train tracking updates",
      "Enhanced performance for a smooth user experience",
    ],
    image: realtime,
    source_code_link: "https://github.com/Ravana-ac",
    webpage: "https://train-tracking-system-tau.vercel.app/",
  },
];




export { services, technologies, experiences, testimonials, projects ,teamworks};
