/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Michal Pabjan",
  title: "Hi, I'm Michal",
  subTitle: emoji(
    "Frontend Software Developer 🚀 experienced in TypeScript / JavaScript / Reactjs NextJs and Microfrontend Architecture"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/l0gi0",
  linkedin: "https://www.linkedin.com/in/micha%C5%82-pabjan-8303a5201",
  gmail: "michaelpabjan@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED FRONTEND ENGINEER and DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop Frontend User Interfaces"
    ),
    emoji(
      "⚡ Design Robust Frontend Systems in Various Architectures"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡  Create Highly Interactive Resuable Components and UI Systems"
    ),
    emoji(
      "⚡  Provide The Best Performance and match Tech Stack to your needs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AGH University of Science and Technology",
      logo: require("./assets/images/agh-logo.jpeg"),
      subHeader: "Bachelor of Computer Science ",
      duration: "October 2018 - March 2021",
      desc: "Faculty of Applied Computer Science - Full Time Stationary Studies",
      descBullets: [
        "Strong Background in Algorithms, Data Structures, Mathematics and Physics",
        "Strong Background in Low Level Programming C/C++ and OOP"
      ]
    },
    {
      schoolName: "Computer Science Vocational High School",
      logo: require("./assets/images/zsp1-brzesko.png"),
      subHeader: "Secondary education",
      duration: "September 2014 - May 2018",
      descBullets: ["General knowledge about IT - Strong Background in Frontend Technologies"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend UI/UX", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "System Designs / Microfrontends",
      progressPercentage: "99%"
    },
    {
      Stack: "Algorithms,  Data Structures and OOP",
      progressPercentage: "99%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Software Developer",
      company: "Footballco",
      companylogo: require("./assets/images/Footballco-logo-2.png"),
      date: "April 2024 – Present",
      desc: "Maintained and improved a core UI component library for a platform serving over 40 million users, enhanced the design system with the UI/UX team, and co-developed the highly monetized Betting Goal6 game. I contributed to key performance and SEO optimizations and delivered features used by millions, earning strong recognition.",
      descBullets: [
      ]
    },
    {
      role: "Frontend Software Engineer",
      company: "Shell Energy Retail",
      companylogo: require("./assets/images/Shell-logo.png"),
      date: "June 2022  – April 2024",
      desc: "Engineered and Developed secure payments platform and account dashboard powering $32B+ in annual transactions. Built micro-frontends apps from scratch, and applied modern design system and architecture practices"
    },
    {
      role: "Frontend Developer (React)",
      company: "Docmatic",
      companylogo: require("./assets/images/docmatic-logo.jpeg"),
      date: "October 2020 – June 2022",
      desc: "Developed Docmatic, a complex web app for managing unstructured documents using AI and NLP technologies. Built a desktop Text Annotation Tool to generate training data for machine learning models"
    },
    {
      role: "Software Developer in Test",
      company: "Nokia",
      companylogo: require("./assets/images/nokia-logo.webp"),
      date: "October 2019 – September 2020",
      desc: "Developed a customizable dashboard for visualizing processed and aggregated 5G test data, enabling clear insights into network performance. Built a specialized tool for creating 5G technology diagrams and data flow visualizations, streamlining analysis and reporting for engineering teams"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "THE MOST ROBUST TECH I HELPED TO BUILD",
  projects: [
    {
      image: require("./assets/images/goal-logo.png"),
      projectName: "Goal",
      projectDesc: "The most popular web page about football",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://goal.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/graphcommerce-logo.png"),
      projectName: "GraphCommerce",
      projectDesc: "Framework for building headless ecommerce storefronts in React and Next.js. It provides a best-in-class example, including components and utilities, to deliver a high-performance, high-quality ecommerce Progressive Web App (PWA)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://graphcommerce.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications",

  achievementsCards: [
    {
      title: "Frontend Expert Certificate",
      subtitle:
        "Completing 35 frontend questions and passing the frontend assessment on AlgoExpert.io",
      image: require("./assets/images/frontend-expert.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate.algoexpert.io/FrontendExpert%20Certificate%20FE-a2647bc769"
        }
      ]
    },
    {
      title: "Team of The Year Winner",
      subtitle:
        "Won the Team of The Year 2022 award among other 200 company competitors.",
      image: require("./assets/images/team-of-the-year.png"),
      imageAlt: "Team of The Year Winner",
      footerLink: [
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
