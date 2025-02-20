// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
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
  threejs,
  linkedin,
  github,
} from "../assets";
import ThreeJS from "../assets/tech/ThreeJS.png";
import aws from "../assets/tech/aws-logo-2.png";
import java from "../assets/tech/java-5.png";
import kotlin from "../assets/tech/kotlin.png";
import instagram from '../assets/socials/instagram.svg'

// Navbar Links
export const NAV_LINKS = [
  {
    id: "home",
    title: "Home",
    link: "home",
  },
  {
    id: "work",
    title: "My Projects",
    link: "works",
  },
  {
    id: "experience",
    title: "Work Experience",
    link: "experience",
  },
  {
    id: "contact",
    title: "Contact",
    link: "contact",
  },
  {
    id: "",
    title: "",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: ThreeJS,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack Web Developer",
    company_name: "MK Corporate Solutions",
    icon: "/MK.png",
    iconBg: "white",
    date: "January 2021 - December 2022",
    points: [
      "Developed and maintained full-stack web applications using technologies like TypeScript, React.js, Node.js, Express.js, and MongoDB, delivering robust and high-performing solutions.",
      "Collaborated in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives, ensuring timely project delivery and effective communication with cross-functional teams.",
      "Designed RESTful APIs and integrated third-party services to connect front-end applications with back-end databases, improving functionality and data flow.",
      "Led front-end development using React.js, building dynamic, responsive, and user-friendly interfaces with reusable components for optimized performance.",
      "Optimized application performance by implementing lazy loading, code splitting, and efficient database queries, reducing load times and improving user experience.",
      "Utilized version control tools like Git and GitHub to manage code, track changes, and collaborate with fellow developers."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "MK Corporate Solutions",
    icon: "/MK.png",
    iconBg: "white",
    date: "August 2020 - December 2020",
    points: [
      "Worked on back-end development using Node.js and Express.js to build and optimize RESTful APIs for seamless data exchange between the client and server.",
      "Implemented database solutions using MongoDB, handling CRUD operations and data management to support application features.",
      "Performed thorough code reviews to identify potential errors or inconsistencies within the software application.",
      "Assisted senior developers with debugging complex issues that arose during the testing phase.",
    ],
  },
  
] as const;


// Projects
export const PROJECTS = [
  {
    name: "Netfilx Clone",
    description:
      "This Netflix Clone is a full-stack streaming platform built with React.js, Node.js, Express.js, and MongoDB, styled using Tailwind CSS. It features JWT authentication, a responsive UI, and the ability to search for movies, TV shows, and actors. Users can watch trailers, view similar content recommendations, and fetch their search history for a seamless streaming experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tmdb_api",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "search",
        color: "pink-text-gradient",
      },
    ],
    image: "/netflix.png",
    source_code_link: "https://github.com/vishnuyvr/Netflix-Clone",
    live_site_link: "https://nflix-clone-by-vishnuyvr.onrender.com/",
  },
  {
    name: "Car Rental Website User Interface",
    description:
      "Designed a user-friendly user interface for a car rental website by leveraging the React framework. Implemented dynamic client-side routing using React Router, allowing users to navigate seamlessly between different sections of the website without page reloads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "useState",
        color: "pink-text-gradient",
      },
      {
        name: "useEffect",
        color: "blue-text-gradient",
      },
      {
        name: "useParams",
        color: "green-text-gradient",
      },
    ],
    image: "/car-rental.png",
    source_code_link: "https://github.com/vishnuyvr/car-rental-app",
    live_site_link: "https://vishnu-car-rental-app.vercel.app/home",
  },
  {
    name: "Android Quiz App",
    description:
      "Developed this quiz app using Kotlin language in Android Studio, where the user can take pre-existing quizzes and get the score after completing the quiz. Designed a user-friendly user interface that is functional, optimal, and polished on devices of several types (smartphones, tablets) and in both orientations (portrait and landscape). Enhanced the user interface by employing audio and video files that are responsive to certain actions.",
    tags: [
      {
        name: "android_app",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android_Studio",
        color: "pink-text-gradient",
      },
    ],
    image: "/Android.png",
    source_code_link: "https://github.com/vishnuyvr/Android-Quiz-App",
    live_site_link: "https://github.com/vishnuyvr/Android-Quiz-App",
  },
  {
    name: "AWS Big Data Project",
    description:
      "Designed an architecture where it ingests JSON data into Amazon Kinesis Data Streams, where it is converted to Apache Parquet using Kinesis Data Firehose. The processed data is stored in an S3 Data Lake and queried using Amazon Athena. Finally, the queried data is analyzed and visualized in Tableau for insights. ",
    tags: [
      {
        name: "Amazon_Web_Services",
        color: "blue-text-gradient",
      },
      {
        name: "S3_Data_Lake",
        color: "green-text-gradient",
      },
      {
        name: "Glue_Catalog",
        color: "pink-text-gradient",
      },
    ],
    image: "/aws.png",
    source_code_link: "https://github.com/vishnuyvr/AWS-Big-Data-Project",
    live_site_link: "https://github.com/vishnuyvr/AWS-Big-Data-Project",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "www.linkedin.com/in/vishnu-vardhan-reddy-y-1a4b23b9",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/vishnu_yvvr?igsh=MXNra25meW1idTBuNw==",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/vishnuyvr?tab=repositories",
  },
] as const;
