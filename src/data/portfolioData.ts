export const personalInfo = {
  name: "Emir Alam",
  handle: "emiralam",
  headline: "Physics & Systems",
  subheadline: "Physics @ BSc (Hons) | Low-Level Systems",
  tagline:
    "Developing Software for over a decade.",
  technicalTagline: "Systems · Physics · Low-Level",
  email: "contact@bytemir.dev",
  github: "https://github.com/bytemir",
};

export type SkillCategory = {
  id: string;
  label: string;
  command: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    command: "cat /sys/languages",
    skills: ["Python", "C"],
  },
  {
    id: "architecture",
    label: "Systems Architecture",
    command: "cat /sys/architecture",
    skills: [
      "Low-Level Hardware Simulation",
      "Custom ISA Design",
      "Emulator & Assembler Development",
      "Build Automation",
      "Compiler Development",
    ],
  },
  {
    id: "tools",
    label: "Tools & Infrastructure",
    command: "cat /sys/toolchain",
    skills: [
      "Linux (Arch)",
      "GCC Toolchain",
      "VCPKG",
      "Git",
      "RayLib",
      "RayGUI",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  techStack: string;
  description: string;
  links: { label: string; url: string }[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "e8-cpu",
    title: "Custom 8-Bit CPU Architecture, Emulator & Assembler",
    techStack: "Python, C & Logisim Evolution",
    description:
      "Designed an 8-bit CPU in Logisim Evolution. Features a custom 32-bit ISA, a functional Emulator written in C, and RGB display capabilities. Modelled CPU logic gates, registers, and memory management to demonstrate a deep understanding of the fetch-decode-execute cycle and low-level hardware-software interfacing. Developed a lightweight Python assembler to translate human-readable assembly into binary format, establishing the project's software toolchain.",
    links: [
      { label: "CPU & Emulator", url: "https://github.com/bytemir/e8" },
      {
        label: "Assembler",
        url: "https://github.com/bytemir/e8-assembler",
      },
    ],
    metrics: [
      { label: "ISA Width", value: "32-bit" },
      { label: "Architecture", value: "8-bit" },
      { label: "Toolchain", value: "3-layer" },
    ],
  },
  {
    id: "hydrogen-orbitals",
    title: "Hydrogen Orbitals Visualizer",
    techStack: "C & SDL2",
    description:
      "A Quantum mechanics visualizer written in C with SDL2. Computes and renders 2D cross-sections of hydrogen electron orbital probability densities. Visualizing the wave functions of a single electron bound to a hydrogen nucleus.",
    links: [
      {
        label: "Repository",
        url: "https://github.com/bytemir/hydrogen-orbitals",
      },
    ],
    metrics: [
      { label: "Renderer", value: "SDL2" },
      { label: "Domain", value: "QM" },
      { label: "Dimensions", value: "2D" },
    ],
  },
  {
    id: "flint-compiler",
    title: "Custom Static-Typed Compiler",
    techStack: "C, GCC Toolchain",
    description:
      "Developed a single-pass compiler in C that tokenizes and parses a custom statically typed language to output standard C source code. Built a tokenizer and an internal symbol table to handle type tracking and check for duplicate variable declarations. Integrated the codebase with the GCC system toolchain to automatically compile and link the generated C source code into executable binaries.",
    links: [
      { label: "Repository", url: "https://github.com/bytemir/flint" },
    ],
    metrics: [
      { label: "Passes", value: "Single" },
      { label: "Output", value: "C source" },
      { label: "Type System", value: "Static" },
    ],
  },
  {
    id: "phys-engine",
    title: "2D Rigid Body Physics Engine",
    techStack: "C, RayLib & RayGui",
    description:
      "Developed an interactive real-time 2D Physics Simulation Engine, featuring numerical integration for multi-force systems, impulse-based rigid body collisions, and fluid drag. Engineered vector projection boundary algorithms to process dynamic object-to-surface interactions across elastic spring bumpers and solid rigid ramps. Designed a dual-panel structural UI using RayGui to dynamically configure entity mass, dimensions, material stiffness, and damping coefficients.",
    links: [{ label: "Repository", url: "https://github.com/bytemir/phys" }],
    metrics: [
      { label: "Integration", value: "Numerical" },
      { label: "Collisions", value: "Impulse" },
      { label: "UI", value: "RayGui" },
    ],
  },
  {
    id: "nbody",
    title: "N-Body Gravitational Simulator",
    techStack: "C & RayLib",
    description:
      "Built a real-time Gravitational N-Body Simulator written in C using RayLib, featuring dynamic particle spawning and velocity-based color rendering with additive blending. Capable of simulating large-scale cosmic structures and high-velocity galactic collisions.",
    links: [
      {
        label: "Repository",
        url: "https://github.com/bytemir/gravitational-nbody",
      },
    ],
    metrics: [
      { label: "Forces", value: "N-body" },
      { label: "Blending", value: "Additive" },
      { label: "Runtime", value: "Real-time" },
    ],
  },
  {
    id: "linux-infra",
    title: "Linux Environment & Build Automation",
    techStack: "Infrastructure & Systems Architecture",
    description:
      "Configured and fine-tuned a daily driver Arch Linux environment, implementing custom window managers and modifying kernel parameters to optimize system efficiency. Authored Bash scripts to automate compilation pipelines, dependency linking, and build processes utilizing GCC and system toolchains. Highly familiar with the Linux directory structure, user/permission management, and system dependencies.",
    links: [],
    metrics: [
      { label: "Distro", value: "Arch" },
      { label: "Toolchain", value: "GCC" },
      { label: "Automation", value: "Bash" },
    ],
  },
];

export const research = {
  title: "Quantum Resolution: The Physical Significance of ℏ",
  focus: "Theoretical Physics & Quantum Mechanics",
  summaryPoints: [
    "Investigated the physical reality of the reduced Planck constant, defining it as a fundamental geometric metric of phase space rather than a mere algebraic shorthand.",
    "Derived the canonical commutation relation [q̂,p̂] = iℏ from first principles of operator mechanics using test wave functions.",
    "Formulated a rigorous wave-geometric proof using Fourier boundaries to demonstrate that a single discrete quantum state occupies an indivisible, minimum phase space area, establishing a physical limit to state density resolution.",
  ],
  preprintUrl:
    "https://github.com/bytemir/Independent-Research-Preprints/blob/main/Theoretical%20Physics/Quantum%20Resolution_%20The%20Physical%20Significance%20of%20%E2%84%8F.pdf",
};

export const education = {
  degree: "Bachelor of Science (Hons) in Physics",
  expectedGraduation: "2029",
  status: "Completed Academic Year 1 (On track to First Class Honours)",
};

export const achievements = {
  athletics: {
    title: "Athletics",
    description:
      "Taekwondo (ITF) 1st Dan Black Belt | Two-time Gold Medalist & Silver Medalist, active in MMA and weight training.",
  },
  strategic: {
    title: "Strategic Interests",
    description:
      "Chess and team-based strategy games — pattern recognition, positional play, and long-horizon planning.",
  },
  hackathons: {
    title: "Hackathons",
    description:
      "Active competitor. Participated in United Hacks V7, collaborating in a 48-hour sprint to prototype a functional hardware/software project.",
  },
};

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "About" },
];
