import verity from "@/public/assets/projects/verity.png";
import cryptoket from "@/public/assets/projects/cryptoket.png";
import tmdbmovies from "@/public/assets/projects/TMDBMovies.png";
import uvsanitizer from "@/public/assets/projects/uvsanitizer.png";
import thissite from "@/public/assets/projects/this-site.png";
import inprogress from "@/public/assets/projects/workinprogress.png";
import black from "@/public/assets/projects/black.webp";

export const jobTitles = [
  "Software Developer",
  "UI Designer",
  "Computer Engineer",
];

export const navItems = [
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  // { name: "Photography", link: "/photography" },
];

export const aboutItems = [
  "I'm a 2nd year, Computer Engineering student at the University of Waterloo, located in Ontario, Canada.",
  "Interested in embedded software systems and human-computer interaction, I'm excited to learn from those around me and take on opportunities. When not being abused by course work, I like to do personal research and indulge in projects on app-development, embedded systems, and computer vision.",
  "When I'm not busy with any of the above, I take my pick of playing guitar, listening to music, playing video games, or reading books.",
];

export const updates = [
  "Learning more about embedded software and computer vision :)",
];

export const experienceData = [
  {
    title: "UI/UX Designer",
    companyName: "FutureVault",
    date: "May 2024 - August 2024",
    content: [
      "Drove user-centric product development by conducting client research, usability testing, collaborating in cross-functional teams, and creating high-fidelity wireframes using Figma and Illustrator",
      "Streamlined Agile processes within a Scrum team, enhancing sprint efficiency by 20% through effective backlog grooming, sprint planning, and stakeholder alignment",
    ],
  },
  {
    title: "Software Developer",
    companyName: "UW BioMechatronics Team",
    date: "Sept 2023 - Apr 2024",
    content: [
      "Optimized EMG fabric's client-side program for BLE data transfer with the ESP32, improving memory management and latency, and reducing program build time by 25%",
      "Improved EMG sensor feedback display accuracy by 28% and reduced response time by 20% through debugging signal processing algorithms and optimizing a Kalman Filter for effective noise reduction",
    ],
  },
  {
    title: "Computer Technician Intern",
    companyName: "reBoot Canada",
    date: "Jun 2022 - Aug 2022",
    content: [
      "Assisted the reBoot team with online sales by confirming purchases and shipping out 100+ products",
      "Repaired and refurbished 200+ laptops / PCs to ensure they were up to store standards",
    ],
  },
];

export const projectItems = [
  {
    name: "Shot",
    subtitle: "Automatic Portolio Management for Photographers",
    link: "https://github.com/jonz9/Portfolio-Management-System",
    github: "https://github.com/jonz9/Portfolio-Management-System",
    description:
      "A photo management platform that enables photographers to upload, organize, and categorize images through buckets and an image classifer ML model. Built with authorization and S3 integration, photos can be organized seamlessly into a user's account under automatically classified categories.",
    image: black,
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "AWS",
      "OpenCV",
      "Python",
    ],
  },
  {
    name: "Verity",
    subtitle: "Charity Management System { BlockHacks 2024 Winner }",
    link: "https://charity-management-system-akle.vercel.app/",
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
    subtitle: "Concurrent Cryptocurrency Tracking Website",
    link: "https://crypto-ket-johns-projects-3415155d.vercel.app/",
    github: "https://github.com/jonz9/CryptoKet",
    description:
      "Designed with the CoinGecko API to manipulate current cryptocurrency data such as price, trading volume, and synchronous growth, along with IAM management",
    image: cryptoket,
    technologies: ["React", "TypeScript", "Tailwind", "Clerk", "ShadCN"],
  },
  {
    name: "Automatic UV Sanitizer",
    subtitle: "Final Design Project for ECE198",
    link: "https://drive.google.com/file/d/1gk1BDBBo0buBlnHNTibTfT1PPigvsSfO/view?usp=sharing",
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
    link: "/",
    github: "https://github.com/jonz9/personal-website.git",
    description:
      "Shows the experiences I have, the type of learner I am, and the skills I have accumulated over numerous opportunities. This site will continue to update throughout my career as an engineer.",
    image: thissite,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Sentry"],
  },
];
