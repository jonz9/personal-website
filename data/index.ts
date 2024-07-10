import verity from "@/public/assets/projects/verity.png";
import cryptoket from "@/public/assets/projects/cryptoket.png";
import tmdbmovies from "@/public/assets/projects/TMDBMovies.png";
import uvsanitizer from "@/public/assets/projects/uvsanitizer.png";

export const jobTitles = [
  "Software Developer",
  "UI Designer",
  "Computer Engineer",
];

export const navItems = [
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Photography", link: "/photography" },
];

export const aboutItems = [
  "I'm a 1st year, computer engineering student at the University of Waterloo, located in Ontario, Canada.",
  "For this summer co-op term, I'm currently working as a UI/UX Designer at FutureVault, a SaaS company located in downtown Toronto.",
  "I've been interested in computer systems and software development for the past couple of years, and in my off-time, I like to do personal research and indulge in projects on web-development, design, embedded systems and artificial intelligence.",
  "When I'm not busy with any of the above, I take my pick of playing guitar, listening to music, playing video games, reading books, or doing absolutely nothing.",
];

export const updates = [
  "Learning SpringBoot, Sql, and AWS Cognito. Probably building a photography storage software using those after that before integrating into this website. Deal-fishing for a cam.",
];

export const experienceData = [
  {
    title: "UI/UX Designer",
    companyName: "FutureVault",
    icon: "",
    date: "May 2024 - NOW",
    points: [""],
  },
  {
    title: "Software Developer",
    companyName: "UWaterloo BioMechatronics Design Team",
    icon: "",
    date: "Sept 2023 - Apr 2024",
    points: [""],
  },
  {
    title: "Computer Technician Intern",
    companyName: "reBoot Canada",
    icon: "",
    date: "Jun 2022 - Aug 2022",
    points: [""],
  },
];

export const projectItems = [
  {
    name: "Verity",
    subtitle: "Charity Management System { BlockHacks 2024 }",
    link: "https://charity-management-system-akle-oy44kixsg.vercel.app/",
    github: "https://github.com/jonz9/Charity-Management-System",
    description:
      "Management database and server, integrated with blockchain technology to aid charities in achieving transparent donations and tracked destination. The system registrate charities that apply onto the database and will push transations/donations onto the blockchain using the Astrokode IDE.",
    image: verity,
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "AstroKode",
      "MongoDB",
      "Docker",
      "Tailwind",
    ],
  },
  {
    name: "CryptoKet",
    subtitle: "Concurrent cryptocurrency tracking website",
    link: "https://crypto-ket-git-main-johns-projects-3415155d.vercel.app/",
    github: "https://github.com/jonz9/CryptoKet",
    description:
      "Designed with the CoinGecko API to manipulate current cryptocurrency data such as price, trading volume, and synchronous growth, along with IAM management",
    image: cryptoket,
    technologies: ["React", "TypeScript", "Tailwind", "Clerk", "ShadCN"],
  },
  {
    name: "Automatic UV Sanitizer",
    subtitle: "Final Design Project for ECE198",
    link: "https://uofwaterloo-my.sharepoint.com/:w:/g/personal/oalfayez_uwaterloo_ca/Ec0n0QmRmedKibQU786NN2sBhWpqmjQsxTW6X6RdRm-3vA",
    github: "https://github.com/jonz9/Auto-UV-Sanitizer.git",
    description:
      "UV Sanitizer designed as a solution to combat the high density of bacteria on hospital door handles. Configured peripheral settings using the STM32CubeIDE to output UV rays in automatic intervals, whilst also optimizing energy consumption due to both manual and automatic options",
    image: uvsanitizer,
    technologies: ["C", "STM32", "GitLab"],
  },
  {
    name: "Movie Retail Site",
    subtitle: "Site that displays up-to-date movie data",
    link: "https://movie-store-sigma.vercel.app/",
    github: "https://github.com/jonz9/MovieStore",
    description:
      "Consuming the TMDBMovies API, it displays concurrent movie data, with implementation of user authentication and protocols, and facilitates seamless movie purchases through the database powered by Firestore",
    image: tmdbmovies,
    technologies: ["Vue", "JavaScript", "Firebase", "Firestore", "CSS"],
  },
  {
    name: "This Website",
    subtitle: "A site designed and built to show who I am as a student",
    link: "",
    github: "https://github.com/jonz9/personal-website.git",
    description:
      "Shows the experiences I have, the type of learner I am, and the skills I have accumulated over numerous opportunities. This site will continue to throughout my career as an engineer!",
    image: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Aceternity UI",
      "Sentry",
    ],
  },
];
