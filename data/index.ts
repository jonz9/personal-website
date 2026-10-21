export const links = {
  email: "mailto:j444zhan@uwaterloo.ca",
  cv: "https://drive.google.com/file/d/1uQQSRz8YF804P7k9ySMwJNK_uWBuBLiu/view?usp=sharing",
  github: "https://github.com/jonz9",
  linkedin: "https://www.linkedin.com/in/john-zhang4/",
};

export const navItems = [
  { name: "Research", link: "/#publications" },
  { name: "Experience", link: "/#experience" },
  { name: "Projects", link: "/#projects" },
];

export const publications = [
  {
    title: "Word Surprisal Correlates with Sentential Contradiction in LLMs",
    authors: ["Ning Shi", "Bradley Hauer", "David Basil", "John Zhang", "Grzegorz Kondrak"],
    venue: "EACL 2026",
    link: "https://aclanthology.org/2026.eacl-long.211/",
  },
  {
    title:
      "UAlberta at SemEval-2025 Task 2: Prompting and Ensembling for Entity-Aware Translation",
    authors: [
      "Ning Shi",
      "David Basil",
      "Bradley Hauer",
      "Noshin Nawal",
      "Jai Riley",
      "Daniela Teodorescu",
      "John Zhang",
      "Grzegorz Kondrak",
    ],
    venue: "SemEval 2025",
    note: "1st / 27 teams, Arabic",
    link: "https://aclanthology.org/2025.semeval-1.224/",
  },
];

export const experience = [
  {
    role: "Machine Learning Engineer",
    org: "Mecka AI",
    date: "2026 – now",
    text: "Egocentric video and hand-pose pipelines, motion-capture sync, and preference and RL fine-tuning for VLM video labeling.",
  },
  {
    role: "Machine Learning Engineer",
    org: "WAT.ai",
    date: "2025",
    text: "Emotion recognition from body language on BoLD, using pose keypoints and video transformers.",
  },
  {
    role: "Research Assistant",
    org: "Alberta Machine Intelligence Institute",
    date: "2025",
    text: "NLP research with Prof. Grzegorz Kondrak and Ning Shi on LLM surprisal and entity-aware machine translation.",
  },
  {
    role: "UI/UX Designer Intern",
    org: "FutureVault",
    date: "2024",
    text: "Prototyping and usability research for a document-management product.",
  },
  {
    role: "Firmware Developer",
    org: "UW BioMechatronics",
    date: "2023 – 24",
    text: "ESP32 BLE data transfer and Kalman filtering for an EMG sensor fabric.",
  },
];

export const projects = [
  {
    name: "Simulated Autonomous Navigation",
    tags: "C++ · ROS 2 · Gazebo",
    text: "A full ROS 2 navigation stack: costmaps, global map fusion, A* planning, and pure-pursuit control.",
    link: "https://github.com/jonz9/simulated-autonomous-navigation-system",
  },
  {
    name: "Gesture OS",
    tags: "Python · MediaPipe · TensorFlow",
    text: "Real-time device control from hand gestures, with small MLPs for static and temporal gestures.",
    link: "https://github.com/jonz9/gesture-tracked-navigator",
  },
  {
    name: "Verity",
    tags: "React · Node · Solidity",
    text: "Transparent charity donations tracked on a blockchain ledger. BlockHacks 2024 winner.",
    link: "https://github.com/jonz9/Charity-Management-System",
  },
];

export const earlierProjects = [
  { name: "CryptoKet", link: "https://github.com/jonz9/CryptoKet" },
  { name: "Movie Store", link: "https://github.com/jonz9/MovieStore" },
  { name: "Auto UV Sanitizer", link: "https://github.com/jonz9/Auto-UV-Sanitizer" },
  { name: "This site", link: "https://github.com/jonz9/personal-website" },
];
