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
        image: "/images/Crypto_Tracker.png",
        tags: ["React", "Express.js", "Tailwind CSS", "API", "Chart"],
        demoLink: "https://crypto-cek.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/crypto-cek",
        featured: true,
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
        title: "Modern Car Sales Website",
        description: "Interactive car sales platform with SendGrid email integration, WhatsApp API, detailed product pages, and fully responsive design built with Next.js 14.",
        image: "/images/my_Cars.png",
        tags: ["Next.js", "TypeScript", "SendGrid", "Tailwind CSS"],
        demoLink: "https://my-cars-xgti.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/my-cars",
        featured: false,
    },
    {
        title: "Collaborative Access",
        description: "Advanced Solidity smart contract with time-locked multi-approval access control, snapshot-based governance, role management (ADMIN/MEMBER), and defensive security invariants.",
        image: "",
        tags: ["Solidity", "Hardhat", "Ethers.js", "Blockchain"],
        demoLink: "https://github.com/Aldinokhalifah/coba_solidity/blob/main/Latihan%20Solidity%203/contracts/CollaborativeAccess.sol",
        githubLink: "https://github.com/Aldinokhalifah/coba_solidity/blob/main/Latihan%20Solidity%203/contracts/CollaborativeAccess.sol",
        featured: false,
    },
    {
        title: "Dictionary App",
        description: "Clean dictionary app using Next.js and Free Dictionary API with audio pronunciation, part-of-speech breakdown, and graceful error handling in a modular component structure.",
        image: "/images/Dictionary_App.png",
        tags: ["Next.js", "Tailwind CSS", "REST API"],
        demoLink: "https://webku-taupe.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/webku/tree/main/dictionary-app",
        featured: false,
    },
]