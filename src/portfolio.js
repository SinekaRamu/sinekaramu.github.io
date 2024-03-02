//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sineka",
  logo_name: "SR",
  nickname: "sinek",
  full_name: "Sineka Ramamoorthy",
  subTitle:
    "Full Stack Developer, Embedded Programming, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1uPQhiS4hsXx-mrZB1b_Otg4MiXM3ulpC/view?usp=sharing",
  mail: "mailto:sineka.ramamoorthy@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sinekaramu",
  linkedin: "https://www.linkedin.com/in/sineka-ramamoorthy/",
  gmail: "sineka.ramamoorthy@gmail.com",
  instagram: "https://www.instagram.com/sineka_ramamoorthy/",
};

const skills = {
  data: [
    {
      title: "Full Stack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web  applications",
        "⚡ Utilizing GitHub as the primary version control platform, I guarante smooth collaboration and effective code management.",
        "⚡ Building responsive website front end using ReactJS, bootstrap, picocss",
        "⚡ Creating application backend in Node, Express, PostgreSQL, Docker",
        "⚡ Integration of third party services such as Netlify, github pages",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
    {
      title: "Embedded Engineer",
      fileName: "DesignImg",
      skills: [
        "⚡ Developed Embedded Projects using Arduino Uno, ESP32 and RaspberryPi Pico",
        "⚡ Integration with Arduino ide, Thonny",
        "⚡ Created simple projects which helpful for student learnings",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "St. Anne's College of Engineering and Techonology",
      subtitle: "Bachelor in Engineering",
      logo_path: "ssec.png",
      alt_name: "AU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have completed my bachelors degree in Electronics and communication Engineering",
        "⚡ I have implemented several Embedded projects based on what I've leart under my electronics Engineering course. ",
        "⚡ I have organized workshops and syposium ",
        "⚡ I have secured 9.82 CGPA.",
      ],
      website_link: "https://www.stannescet.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've 2 years experience in a start-up environments at IIT Research Park and I've completed one internship. I've mostly done projects on my own and I am actively looking for challenging job. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Development Trainee",
          company: "Mediwave Digital Private Limited",
          company_url: "https://www.mediwavedigital.com/",
          logo_path: "valora.jpg",
          duration: "Aug 2023 - JUN 2024",
          location: "Puducherry, India",
          description: `• Proficiently acquired core competencies in web development,
          demonstrating mastery of HTML, CSS, and JavaScript through
          independent study.
          • Implemented both back-end and front-end solutions, leveraging Node.js,
          Axios Framework, the Express framework, ReactJS, and TypeScript.
          • Database management with mySQL, PostgreSQL, Sequelize and
          Docker, Redis
          • Utilizing GitHub as the primary version control platform, I guarantee
          smooth collaboration and effective code management.
          .
          `,

          color: "#0071C5",
        },

        {
          title: "Junior Electronics Engineer",
          company: "ISMO Bio-Photonics Private Limited",
          company_url: "https://ismobiophotonics.com/",
          logo_path: "nightowls.jpg",
          duration: "Jun 2022 - Aug 2023",
          location: "IIT Research Park, Chennai.",
          description: `Designing Embedded systems, documentation, Hardware wiring and software programming, testing, calibration, troubleshooting.
          Building PCB boards, manufacturing in low budget.
          Designed and implemented a Microfluids pump, resulting in a 60% improvement in company processes.
          Utilized tools such as Altium Designer, Allegro, Arduino IDE, STM32 CubeMX, Cube IDE, Inkscape, Nextion Editor, Raspberry Pi.
          `,
          color: "#ee3c26",
        },
        {
          title: "Industrial Intern",
          company: "ISMO Bio-Photonics Private Limited",
          company_url: "https://ismobiophotonics.com/",
          logo_path: "nightowls.jpg",
          duration: "Oct 2021 - Mar 2022",
          location: "IIT Research Park, Chennai.",
          description: `Completed an embedded project involving UI design, programming,
          hardware assembly, calibration, testing and documentation.
          • Microfluidics Syringe pump is an Industrial Projects that was used in the research labs for drug delivery
          `,
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Workshop Trainee",
          company: "Edilabs Technology Solutions",
          company_url: "https://ediylabs.com/",
          logo_path: "cwoc.png",
          duration: "Feb 2020 - Present",
          location: "Cuddalore",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sineka.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://www.linkedin.com/in/sineka-ramamoorthy/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Todo-app",
      url: "https://github.com/sinekaRamu/todo-app-ts",
      description:
        "This app will be helpful for organizing tasks and to create checklist. created using reactJS, typescript, bootstrap, react-dom and datas stored in the local storage. ",
      languages: [
        {
          name: "bootstrap",
          iconifyClass: "skill-icons:bootstrap",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Adoptisity",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/Adoptisity",
          iconifyClass: "ri:github-fill",
        },

        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "FinSplit",
      url: "https://github.com/rajmahadev8/Fin-Split",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Fileblok",
      url: "https://github.com/sinekaramu/Fileblok",
      description:
        "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "Votechain",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },

    {
      id: "9",
      name: "node-blockchain",
      url: "https://github.com/sinekaramu/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Know Me Well",
      url: "https://github.com/sinekaramu/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Bloggify",
      url: "https://github.com/sinekaramu/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/Bloggify",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "API",
      url: "https://github.com/sinekaramu/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/stargazers",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "react-calculator",
      url: "https://github.com/sinekaramu/react-calculator",
      description:
        "Simple Calculator, which get two input values and evaluates the result.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/sinekaramu/react-calculator",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
