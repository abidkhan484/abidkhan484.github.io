/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abid's Portfolio",
  description:
    "An enthusiastic individual who is always driven to work on complete products that establish resilient and adaptable social and technical systems, in order to make a positive impact.",
  og: {
    title: "Abid Khan Portfolio",
    type: "website",
    url: "https://abidkhan484.github.io",
  },
};

//Home Page
const greeting = {
  title: "Abid Khan",
  logo_name: "AbidKhan",
  // nickname: "abid",
  subTitle:
    "An enthusiastic individual who is always driven to work on complete products that establish resilient and adaptable social and technical systems, in order to make a positive impact.",
  resumeLink:
    "https://docs.google.com/document/d/1B5GzQKHHBD_i27T21CK9Lr68PvQ1RqdHb-m0gYFRWmg/view?usp=sharing",
  portfolio_repository: "https://github.com/abidkhan484/abidkhan484.github.io",
  githubProfile: "https://github.com/abidkhan484",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/abidkhan484",
  // linkedin: "https://www.linkedin.com/in/abidkhan484",
  // gmail: "abidkhan484@gmail.com",
  // facebook: "https://www.facebook.com/careless.abid",
  // twitter: "https://twitter.com/abidkhan484"

  {
    name: "Github",
    link: "https://github.com/abidkhan484",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abidkhan484/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abidkhan484@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/abidkhan484",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/careless.abid",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, Javascript",
        "⚡ Creating application backend in Python, PHP, Javascript",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#ffde57",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#8993be",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Devops Interests",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/abidkhan484",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/abidkhan484",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/abidkhan484",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/careless.abid",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@abid23",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Daffodil International University",
      subtitle: "B.Sc in Computer Science and Engineering",
      logo_path: "daffodil_logo.png",
      alt_name: "Daffodil_University",
      duration: "2012 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done a couple of courses on Full Stack Development and Cloud Concepts.",
      ],
      website_link: "https://daffodilvarsity.edu.bd",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link:
        "https://www.sololearn.com/Certificate/CT-K98NXKMY/pdf",
      alt_name: "Python3 Tutorial",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Abid Khan is an accomplished professional with a diverse skill set and extensive experience in the field. His expertise spans across multiple domains, and he has consistently delivered exceptional results throughout his career.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Developer",
          company: "Mir Info Systems Ltd",
          company_url: "https://mirinfosys.com/",
          logo_path: "mirinfosys_logo.png",
          duration: "Nov 2020 - Present",
          location: "Mohakhali DOHS, Dhaka",
          description:
            "Clean code practices were applied to develop readable, maintainable, and scalable code for the web application. The frontend and backend of an existing application were separated to achieve independence. APIs for the Flexiplan app, which consumes various channels, were built and tested, following Scrum methodology for project status updates.",
          color: "#0879bf",
        },
        {
          title: "Assosiate Software Developer",
          company: "Mir Info Systems Ltd",
          company_url: "https://mirinfosys.com/",
          logo_path: "mirinfosys_logo.png",
          duration: "Apr 2018 - Nov 2020",
          location: "Mohakhali DOHS, Dhaka",
          description:
            "Content-configurable admin panel, APIs, and automated services were developed for United Hospital and Skitto, while an intranet portal was created for IFIC Bank, with ongoing maintenance support provided for various clients.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Applications and deploy them to servers including cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abid_khan.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with planinng with High Level Design including Backend Development, Frontend Development (partially) and Deployment.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@abidkhan484",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Vill: Sutrapur, Thana & Post: Kaliakair-1750, Dist: Gazipur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/xj5srriy7iKujzqp6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
