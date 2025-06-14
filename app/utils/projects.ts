interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    githubLink: string;
}

export const projects: Project[] = [
    {
        title: " Simple AI Chatbot",
        description:
        "This project aims to explore the implementation of artificial intelligence in web applications, as well as open up opportunities for the development of more complex and efficient chatbots in the future.",
        image: "/images/ai_chatbot.png",
        tags: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript"],
        demoLink: "https://ai-web-app-beta.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/ai-web-app",
    },
    {
        title: "Modern Car Sales Website",
        description: "A car sales web project that I developed using Next.js, TypeScript, and SendGrid. The project provides an interactive and efficient user experience in searching and buying their dream car.",
        image: "/images/my_Cars.png",
        tags: ["Next.js", "TypeScript", "SendGrid", "Tailwind CSS"],
        demoLink: "https://my-cars-xgti.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/my-cars/tree/main",
    },
    {
        title: "Notes App - Fullstack MERN Application",
        description:
        "I developed Notes App, a web-based personal note-taking application designed to help users store and manage their notes securely and efficiently.",
        image: "/images/notes_app.png",
        tags: ["React", "MongoDB", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "JWT"],
        demoLink: "https://notes-app-pi-cyan.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/notes_app",
    },
    {
        title: "Financial Management App ",
        description: "I just finished a Laravel-based Financial Management project, which helps users manage their income and expenses in a more structured and easy-to-understand way.",
        image: "/images/finance_app.png",
        tags: ["Laravel", "PHP", "MYSQL", "Tailwind CSS", "Chart"],
        demoLink: "https://finyouth.web.id/",
        githubLink: "https://github.com/Aldinokhalifah/Coba.php/tree/main/LARAVEL/Manajemen%20Keuangan/manajemen_keuangan",
    },
    {
        title: "Employee Case Study",
        description: "This project is an implementation of the concept of Inheritance in object-oriented programming using Java. I created a simple system that represents different types of employees in a company.",
        image: "https://placehold.co/500x200?text=No+Image",
        tags: ["Java", "OOP"],
        demoLink: "https://github.com/Aldinokhalifah/coba_Java/blob/main/Latihan2/inheritanceLatihan3.java",
        githubLink: "https://github.com/Aldinokhalifah/coba_Java/blob/main/Latihan2/inheritanceLatihan3.java",
    },
]