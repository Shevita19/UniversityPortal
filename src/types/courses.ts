export interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  eligibility: string;
  subjects: string[];
  labs?: Lab[];
  careers: string[];
}

export interface Lab {
  name: string;
  equipment: string[];
  description: string;
}

export const btechCourses: Record<string, Course> = {
  cse: {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering",
    duration: "4 Years",
    description: "A comprehensive program focusing on computer science fundamentals, software development, and emerging technologies.",
    eligibility: "10+2 with Physics, Chemistry, Mathematics with minimum 60% marks",
    subjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Cybersecurity"
    ],
    labs: [
      {
        name: "Programming Lab",
        equipment: ["High-end Workstations", "Development IDEs", "Version Control Systems"],
        description: "Modern programming environment for practical coding experience"
      },
      {
        name: "Networks Lab",
        equipment: ["Cisco Routers", "Switches", "Network Analyzers"],
        description: "Hands-on networking and security practice"
      },
      {
        name: "AI/ML Lab",
        equipment: ["GPU Servers", "Deep Learning Frameworks", "Data Analysis Tools"],
        description: "Advanced computing facility for AI/ML projects"
      }
    ],
    careers: [
      "Software Developer",
      "System Architect",
      "Data Scientist",
      "Cloud Engineer",
      "Security Analyst"
    ]
  },
  ece: {
    id: "btech-ece",
    name: "B.Tech in Electronics & Communication",
    duration: "4 Years",
    description: "Program covering electronic systems, communication technologies, and signal processing.",
    eligibility: "10+2 with Physics, Chemistry, Mathematics with minimum 60% marks",
    subjects: [
      "Digital Electronics",
      "Analog Circuits",
      "Communication Systems",
      "Signal Processing",
      "Microprocessors",
      "VLSI Design",
      "Embedded Systems",
      "Wireless Communications",
      "Internet of Things"
    ],
    labs: [
      {
        name: "Electronics Lab",
        equipment: ["Oscilloscopes", "Signal Generators", "Circuit Design Tools"],
        description: "Fully equipped electronics testing and development facility"
      },
      {
        name: "Communication Lab",
        equipment: ["RF Equipment", "Antenna Systems", "Communication Modules"],
        description: "Modern communication systems laboratory"
      }
    ],
    careers: [
      "Electronics Engineer",
      "Communication Engineer",
      "VLSI Designer",
      "IoT Developer",
      "Systems Engineer"
    ]
  }
};

export const bcaCourse: Course = {
  id: "bca",
  name: "Bachelor of Computer Applications",
  duration: "3 Years",
  description: "Undergraduate program focusing on computer applications and software development.",
  eligibility: "10+2 with Mathematics with minimum 50% marks",
  subjects: [
    "Programming Fundamentals",
    "Web Development",
    "Database Management",
    "Software Engineering",
    "Computer Networks",
    "Mobile Application Development",
    "Digital Marketing",
    "Project Management"
  ],
  labs: [
    {
      name: "Software Development Lab",
      equipment: ["Development PCs", "Mobile Development Kits", "Web Servers"],
      description: "Complete software development environment"
    }
  ],
  careers: [
    "Software Developer",
    "Web Developer",
    "System Administrator",
    "Database Administrator",
    "IT Consultant"
  ]
};

export const mcaCourse: Course = {
  id: "mca",
  name: "Master of Computer Applications",
  duration: "2 Years",
  description: "Advanced program in computer applications with specialization options.",
  eligibility: "Bachelor's degree with Mathematics with minimum 55% marks",
  subjects: [
    "Advanced Algorithms",
    "Cloud Computing",
    "Big Data Analytics",
    "Enterprise Software Development",
    "Information Security",
    "Research Methodology",
    "Artificial Intelligence",
    "Software Project Management"
  ],
  labs: [
    {
      name: "Advanced Computing Lab",
      equipment: ["High Performance Servers", "Cloud Platforms", "Big Data Tools"],
      description: "State-of-the-art computing facility for advanced projects"
    },
    {
      name: "Research Lab",
      equipment: ["Research Workstations", "Specialized Software", "Development Tools"],
      description: "Dedicated research and development environment"
    }
  ],
  careers: [
    "Senior Software Engineer",
    "Project Manager",
    "Solutions Architect",
    "Research Analyst",
    "Technology Consultant"
  ]
}; 