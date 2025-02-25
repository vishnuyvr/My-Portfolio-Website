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
import java from "../assets/tech/Java.png";
import kotlin from "../assets/tech/Kotlin.png";
import jira from "../assets/tech/Jira.png";
import jenkins from "../assets/tech/Jenkins.png";
import selenium from "../assets/tech/Selenium.png";
import postman from "../assets/tech/Postman.png";
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
    name: "Jira",
    icon: jira,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Selenium",
    icon: selenium,
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
      "Developed and maintained scalable web applications using ReactJS, TypeScript, and Node.js, ensuring responsive and user-friendly UI/UX across multiple devices",
      "Collaborated in Agile/Scrum environments, leveraging Jira for sprint planning, task tracking, and progress reporting.",
      "Implemented robust backend services and RESTful APIs using Node.js, enhancing application performance and data handling.",
      "Integrated CI/CD pipelines using Jenkins to automate build, test, and deployment processes, reducing release times by 30%.",
      "Designed and executed end-to-end API tests using Postman, ensuring high-quality and secure data exchange between frontend and backend systems.",
      "Wrote automated UI test scripts using Selenium WebDriver, resulting in a 25% reduction in manual testing efforts and improved release reliability.",
      "Actively contributed to code reviews and knowledge-sharing sessions, promoting best practices in JavaScript, TypeScript, and test-driven development (TDD).",
      "Optimized application performance and reduced load times by 20% through efficient code splitting and lazy loading in ReactJS.",
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
      "Collaborated with senior developers to implement CI/CD pipelines using Jenkins, streamlining deployment processes and ensuring faster delivery cycles.",
      "Gained hands-on experience in writing clean, maintainable code and adhering to industry best practices in web development and testing.",
      "Participated in daily stand-ups and code reviews, gaining insights into best practices in scalable application development.",
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
