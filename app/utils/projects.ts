interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    githubLink: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "AssetFlow — Asset Management System",
        description: "Fullstack MVP for company asset management built during internship at PT. Probesco Disatama. Features role-based access, dynamic forms, real-time dashboard with charts, audit logs, and multi-branch support.",
        image: "",
        tags: ["Next.js", "Express.js", "PostgreSQL", "TanStack Query", "Recharts", "Tailwind CSS"],
        demoLink: "https://github.com/Aldinokhalifah",
        githubLink: "https://github.com/Aldinokhalifah",
        featured: true,
    },
    {
        title: "Financial Management App",
        description: "Laravel-based financial management with AI-powered consultation, income & expense tracking, data visualization, and interactive dashboard. Deployed with a live production domain.",
        image: "/images/finance_app.png",
        tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "AI"],
        demoLink: "https://finyouth.web.id/",
        githubLink: "https://github.com/Aldinokhalifah/Ginger-Majesty",
        featured: true,
    },
    {
        title: "Crypto Tracker",
        description: "Fullstack app with real-time crypto data, currency converter, 7-day historical charts, and a caching system to optimize API usage. Deployed on Railway + Vercel.",
        image: "/images/crypto_tracker.png",
        tags: ["React", "Express.js", "Tailwind CSS", "API", "Chart"],
        demoLink: "https://crypto-cek.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/crypto-cek",
        featured: false,
    },
    {
        title: "Digital Subscription System",
        description: "Java backend system simulating a full subscription business flow — plan management, invoice generation, payment processing, auto-renewal, and upgrade/downgrade with 68 test scenarios.",
        image: "/images/subscription_system.png",
        tags: ["Java", "OOP", "Layered Architecture", "Unit Testing"],
        demoLink: "https://github.com/Aldinokhalifah/coba_Java/tree/main/Sistem_Subcription_Digital",
        githubLink: "https://github.com/Aldinokhalifah/coba_Java/tree/main/Sistem_Subcription_Digital",
        featured: false,
    },
    {
        title: "Notes App — Fullstack MERN",
        description: "Personal note-taking app with JWT authentication, protected routes, CRUD operations, and responsive UI. Built with full MERN stack and deployed on Vercel.",
        image: "/images/notes_app.png",
        tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        demoLink: "https://notes-app-pi-cyan.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/notes_app",
        featured: false,
    },
    {
        title: "Simple AI Chatbot",
        description: "Conversational AI chatbot powered by Gemini API, built with Next.js and TypeScript. Delivers real-time, context-aware responses with a clean and intuitive UI.",
        image: "/images/ai_chatbot.png",
        tags: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
        demoLink: "https://ai-web-app-beta.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/ai-web-app",
        featured: false,
    },
    {
        title: "Collaborative Access",
        description: "Advanced Solidity smart contract with time-locked multi-approval access control, snapshot-based governance, role management (ADMIN/MEMBER), and defensive security invariants.",
        image: "/images/collaborative_access.png",
        tags: ["Solidity", "Hardhat", "Ethers.js", "Blockchain"],
        demoLink: "https://github.com/Aldinokhalifah/coba_solidity/blob/main/Latihan%20Solidity%203/contracts/CollaborativeAccess.sol",
        githubLink: "https://github.com/Aldinokhalifah/coba_solidity/blob/main/Latihan%20Solidity%203/contracts/CollaborativeAccess.sol",
        featured: false,
    },
]