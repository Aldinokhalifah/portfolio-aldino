export interface Experience {
    role: string
    company: string
    type: string
    period: string
    location: string
    description: string
    bullets: string[]
    tags: string[]
    featured?: boolean
}

export const experiences: Experience[] = [
    {
        role: "Information Technology Intern",
        company: "PT. Probesco Disatama",
        type: "Internship",
        period: "Mar 2025 — Present",
        location: "Jakarta Pusat, Indonesia",
        description: "Building a fullstack internal meeting management application from scratch — covering scheduling, notulen, action items, AI-powered insights, and a natural language AI Agent for meeting operations.",
        bullets: [
            "Developed Meeting Management App — a fullstack internal platform with role-based access control, meeting scheduling, and participant management using Next.js & Express.js",
            "Built rich text notulen editor using Tiptap with real-time sync and conflict-free refetch strategy",
            "Implemented meeting continuation system with carry-over action items and granular access control per participant",
            "Integrated OpenRouter LLM API to auto-generate AI meeting summaries triggered when host ends a meeting",
            "Built a Python FastAPI AI Agent with 15+ tools enabling natural language commands to create meetings, manage participants, and track action items via floating chat UI",
            "Designed and integrated 50+ REST API endpoints with PostgreSQL covering CRUD, schedule conflict detection, JWT auth, and centralized error handling",
        ],
        tags: [
            "Next.js", "Express.js", "PostgreSQL", "Python", "FastAPI",
            "TanStack Query", "Tiptap", "OpenRouter", "LLM", "Resend",
            "TailwindCSS", "GitHub"
        ],
        featured: true,
    },
    // {
    //     role: "Fullstack Web Developer",
    //     company: "Tech Startup Inc.",
    //     type: "Full-time",
    //     period: "Jan 2025 — Present",
    //     location: "Remote",
    //     description: "Led end-to-end development of a SaaS platform serving 5,000+ users in an agile environment.",
    //     bullets: [
    //         "Designed and built RESTful APIs with JWT authentication and input validation",
    //         "Optimized database queries reducing API response time by 40%",
    //         "Collaborated with product and design teams to ship features every 2 weeks",
    //         "Implemented caching strategies to reduce server load significantly",
    //     ],
    //     tags: ["Next.js", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    //     featured: true,
    // },
    // {
    //     role: "Backend Developer Intern",
    //     company: "Digital Agency Co.",
    //     type: "Internship",
    //     period: "Jul 2024 — Dec 2024",
    //     location: "Jakarta, Indonesia",
    //     description: "Developed and maintained backend services for client projects at a fast-paced digital agency.",
    //     bullets: [
    //         "Built CRUD APIs integrated with MongoDB for 3 client projects",
    //         "Wrote unit tests increasing code coverage from 40% to 75%",
    //         "Contributed to CI/CD pipeline setup using GitHub Actions",
    //         "Improved API performance by implementing server-side caching",
    //     ],
    //     tags: ["Node.js", "Express.js", "MongoDB", "Postman"],
    //     featured: true,
    // },
    // {
    //     role: "Frontend Developer",
    //     company: "Freelance",
    //     type: "Freelance",
    //     period: "Mar 2024 — Jun 2024",
    //     location: "Remote",
    //     description: "Delivered responsive web interfaces for clients across various industries.",
    //     bullets: [
    //         "Built and delivered 3 responsive websites on time and within budget",
    //         "Worked directly with clients to translate requirements into UI",
    //         "Iterated rapidly based on feedback with short turnaround time",
    //     ],
    //     tags: ["React", "Tailwind CSS", "JavaScript"],
    //     featured: false,
    // },
    // {
    //     role: "Web Development Tutor",
    //     company: "STT Nurul Fikri",
    //     type: "Part-time",
    //     period: "Aug 2024 — Jan 2025",
    //     location: "Depok, Indonesia",
    //     description: "Mentored junior students in web development fundamentals at university level.",
    //     bullets: [
    //         "Guided 20+ students through HTML, CSS, JavaScript, and basic backend",
    //         "Prepared and delivered structured weekly learning materials",
    //         "Held weekly code reviews to accelerate student progress",
    //     ],
    //     tags: ["HTML", "CSS", "JavaScript", "Teaching"],
    //     featured: false,
    // },
]

export const typeColor: Record<string, string> = {
    "Full-time": "bg-[#D4E9C8] text-[#2d5220]",
    "Internship": "bg-blue-50 text-blue-700",
    "Freelance": "bg-purple-50 text-purple-700",
    "Part-time": "bg-orange-50 text-orange-700",
}
