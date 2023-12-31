import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    books,
    msa,
    car,
    threejs,
    contact,
    matlab,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    mysql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "mySQL",
        type: "Backend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: matlab,
        name: "matlab",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    }

];

export const experiences = [
    {
        title: "Committee's Director",
        company_name: "MSA (Muslim Student Association)",
        icon: msa,
        iconBg: "#accbe1",
        date: "August 2022 - Present",
        points: [
            "Collaborated with team members to organize events, achieving a consistent turnout of 200+ attendees.",
        "Engaged in weekly interfaith dialogues to foster diversity, inclusivity, and respect among students and staff.",
        "Helped raise $10,000+ for charity through fundraising events and campaigns.",
        ],
    },
    {
        title: "Academic Instructor",
        company_name: "Hamzah Science Academy",
        icon: books,
        iconBg: "#fbc3bc",
        date: "August 2023 - Present",
        points: [
            "Taught comprehensive cultural studies to over 15 students with a engaging curriculum.",
            "Developed and implemented lesson plans to help students achieve academic success.",

        ],
    },
];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/achilles1801',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/majdkhawaldeh',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Android App Game',
        description: 'Developed a mobile game for Android devices, giving users multiple levels of difficulty and game modes to choose from.',
        link: 'https://github.com/achilles1801/android-game',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D-Portfolio Website',
        description: 'Built a 3D portfolio website, allowing users to view my projects and experience in a unique and interactive way.',
        link: 'https://github.com/achilles1801/3d-portfolio',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Flight Management System',
        description: 'Developed a flight management system using mySQL, allowing users to book flights and manage their travel plans.',
        link: '',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Rock Paper Scissors Game',
        description: 'Developed a tictactoe game using Java, allowing users to track their scores and play against challenging AI opponents.',
        link: 'https://github.com/achilles1801/rockpaperscissors',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Data Structures & Algorithms Project',
        description: 'Implemented the most efficient data structures and algorithms to solve a variety of problems, including sorting and searching.',
        link: 'https://github.com/achilles1801/CS1332',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'TBD',
        description: '',
        link: '',
    }
];
export const coursework = [
    {
        course: "Data Structures & Algorithms",
        institution: "Georgia Tech",
        description: "Explores fundamental data structures and algorithms for efficient data manipulation and problem-solving.",
        keyTopics: ["Linked Lists", "Trees and Graphs", "Sorting Algorithms", "Complexity Analysis"]
    }, 
     {
        course: "Object Oriented Programming",
        institution: "Georgia Tech",
        description: "Focuses on principles of object-oriented programming and design, encapsulation, inheritance, and polymorphism.",
        keyTopics: ["Classes and Objects", "Inheritance", "Polymorphism", "Design Patterns"]
    },
    {
        course: "Databases",
        institution: "Georgia Tech",
        description: "Covers database design, development, and management principles, including SQL and data modeling.",
        keyTopics: ["SQL", "Data Modeling", "Normalization", "Database Management Systems"]
    }   ,
     {
        course: "Android App Development",
        institution: "Georgia Tech",
        description: "Introduces Android development, focusing on creating interactive user interfaces and app functionality.",
        keyTopics: ["Android Studio", "UI/UX Design", "API Integration", "App Lifecycle"]
    }
    

];