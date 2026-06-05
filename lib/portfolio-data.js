const customLink = [
    {
        label: "Link",
        url: 'https://www.udemy.com/certificate/UC-ecc7593c-b3b8-4ba5-be3d-57ff470519f7/'
    },
    {
        label: "Link",
        url: 'https://drive.google.com/file/d/1NgQWkHQ4DUZ5eNI2qmrLdS0KidYlKtnB/view?usp=sharing'
    },
    {
        label: "Link",
        url: "https://www.hackerrank.com/certificates/b0e30360c7fd"
    },
    {
        label: "Link",
        url: "https://www.hackerrank.com/certificates/9a0003f25dcf"
    },
    {
        label: "Link",
        url: "https://www.hackerrank.com/certificates/3a7d0090b6ee"
    },
    {
        label: "Link",
        url: "https://drive.google.com/file/d/1HJ9t2z25iEXVWAaFW7MVvkxaaXPCYaTT/view?usp=sharing"
    },
    {
        label: "Link",
        url: "https://drive.google.com/file/d/1R_Ii6uQPgs40ghs_ULepKvMqjebWYWaH/view?usp=sharing"
    }
    // next_js_udemy: ,
    // bnsp: ,
    // software_engineer: '',
    // sql_advance: '',
    // frontend_developer: '',
    // use_generative_ai: '',
    // ibm_granite_models: '',
]

const portfolioData = {
    welcome: {
        title: "Welcome",
        content: [
            "Hi, I'm Rofi, a Software & AI Engineer.",
            "Welcome to my interactive 'AI powered' portfolio terminal!",
            "Type 'help' to see available commands."
        ]
    },
    help: {
        title: "Help",
        content: [
            "Available commands:",
            "  about          - Learn about me",
            "  projects       - View my projects",
            "  skills         - See my technical skills",
            "  experience     - My work experience",
            "  contact        - How to reach me",
            "  education      - My educational background",
            "  certifications - View my certifications",
            "  leadership     - Leadership and community involvement",
            "  clear          - Clear the terminal",
        ],
    },
    about: {
        title: "About Rofi",
        content: [
            "🙋🏻‍♂️ Hello, I'm Ahmad Sidik Rofiudin!",
            "",
            "I develop full-stack systems, bring AI into the mix, and deploy to the cloud",
            "I am a passionate Software & AI Engineer with expertise in building",
            "scalable applications and intelligent systems. I love solving complex",
            "problems and creating innovative solutions that make a difference.",
            "",
            "Background:",
            "- Previously collaborated on developing an AI-powered orthodontic system using Langchain and RAG",
            "- Previously contributed to a real-time dashboard for monitoring heart disease patients",
            "- Previously built a content management dashboard for web and mobile hosting platforms",
            "- Focus on full-stack development and practical AI integration for real-world use cases",
            "- Skilled in Next.js, React Native, Laravel, Golang, Express.js, and modern cloud technologies",
            "",
            "When I'm not coding, you can find me exploring new technologies,",
            "contributing to open source projects, or mentoring fellow developers.",
            "",
            "Discover more by entering 'projects', 'skills', or 'contact' commands"
        ],
    },
    projects: {
        title: "Recent Projects",
        content: [
            "💻 Projects:",
            "",
            "1. OrthoAI System",
            "   - AI-assisted orthodontic platform integrating Langchain and RAG to support clinical decisions",
            "   - Tech: Python, Langchain, ChromaDB, Redis, FastAPI, Gemini API, Next.js",
            "   - Link: [Visit Project](https://ortho-ai-doctor-topaz.vercel.app)",
            "",
            "2. Flowbeat",
            "   - Real-time monitoring system for patients and enabling doctors to track vitals remotely",
            "   - Tech: Laravel, JWT, Next.js, ShadCN, React Native, NativeWind, MySQL, ",
            "",
            "3. FinTrack-app",
            "   - Personal finance tracker with monthly reports, cashflow insights, and AI-powered advice via IBM Watson",
            "   - Tech: Laravel Sanctum, JWT, Next.js, Tailwind CSS, ShadCN, MySQL",
            "   - Link: [Visit Project](https://fin-track-app.vercel.app)",
            "",
            "4. Converto",
            "   - A simple yet powerful tool to convert audio, video, and image files instantly",
            "   - Tech: Next.js, Tailwind CSS, ShadCN, UploadThing (File), No Database",
            "   - Link: [Visit Project](https://converto-bay.vercel.app)",
            "5. Setup-in",
            "   - A multi-vendor marketplace with store creation, cart & checkout flow, Midtrans integration, and order tracking",
            "   - Tech: Next.js, NextAuth.js, ShadCN, Prisma, Postgresql, Supabase, Midtrans API",
            "   - Link: [Visit Project](https://setup-in.vercel.app/)",
            "",
            "Want to collaborate? Just type 'contact' to get in touch",
        ],
    },
    skills: {
        title: "👨🏻‍💻👩🏻‍💻 Tech Stack I Use",
        content: [
            "👨🏻‍💻👩🏻‍💻 Tech Stack I use:",
            "",
            "Languages:     JavaScript, TypeScript, Python, PHP, Go",
            "Frontend:      React, Next.js, Svelte, TailwindCSS, Shadcn, Threejs, GSAP, Framer Motion, HTML, CSS, Bootstrap",
            "Backend:       Laravel, Expressjs, Hono, FastAPI, Golang",
            "Databases:     PostgreSQL, MySQL, MongoDB, Redis, InfluxDB, SQLite ChromaDB, Supabase, Firebase",
            "AI & LLM:      Langchain, CrewAI, IBM Watson, OpenAI API, Gemini API, RAG",
            "Tools:         Git, k6, Grafana, Prometheus, Docker, Vercel",
            "",
            "Curious how I use these? Type 'projects' to find out!",
        ],
    },
    experience: {
        title: "👜Work Experience",
        content: [
            "👜Work Experience:",
            "",
            "1. Software Engineer | Telkom University – FEB, Bandung (Sep 2025 - Present)",
            "   • Designed and developed MIRA, an embedded web platform and AI-powered WhatsApp bot to automate academic administration.",
            "   • Devised a scalable scheduling system with an interactive drag-and-drop calendar.",
            "   • Executed real-time conflict detection algorithms to prevent scheduling overlaps.",
            "   • Developed a dynamic contract management engine to automate quarterly KPI calculations.",
            "   • Integrated an AI-based WhatsApp bot to automate scheduled notifications and reminders.",
            "   • Refactored backend architecture into modular services for better maintainability.",
            "",
            "2. AI Engineer | M&A Associates Orthodontics (Orthonova), Tokyo (Feb 2025 - Sep 2025)",
            "   • Architected an AI-powered conversational assistant using Google Gemini for clinical operations.",
            "   • Implemented context-aware AI workflows for highly accurate conversation-driven data retrieval.",
            "   • Incorporated doctor-to-doctor communication context to assist clinical decision support.",
            "   • Built a natural language search system leveraging LangChain SQL Agent, reducing retrieval time by 40%.",
            "   • Engineered a RAG pipeline to summarize clinical conversations, reducing manual input by over 50%.",
            "   • Unified structured database and unstructured patient data through context-aware system design.",
            "   • Architected scalable frontend architecture using Next.js, Tailwind CSS, and shadcn/ui.",
            "",
            "3. Fullstack Developer | Icommits IT Consultant, Bandung (Jun 2023 – Oct 2023)",
            "   • Created and developed a custom CMS using Laravel to enable dynamic website content management.",
            "   • Developed and deployed a web hosting landing platform with customizable pages.",
            "   • Enabled dynamic page generation for users to manage custom headers, text, and media.",
            "   • Collaborated with internal IT to troubleshoot and ensure reliable website functionality.",
            "",
            "Type 'projects' to see my recent work.",
        ],
    },
    contact: {
        title: "📨 Lets Get In Touch",
        content: [
            "📨 Lets Get In Touch:",
            "",
            "Email:       ahmadsidikrofiudin@gmail.com",
            "Phone:       (+62)851-5745-5205",
            "LinkedIn:    [/in/ahmadsidikrofiudin](https://www.linkedin.com/in/ahmad-sidik-rofiudin/)",
            "GitHub:      [@ahmadsidikrofi](https://github.com/ahmadsidikrofi)",
            "Instagram:   [@rofi.js](https://www.instagram.com/rofi.js/)",
            "",
            "Feel free to reach out for collaboration opportunities!",
        ],
    },
    education: {
        title: "🎓 Education",
        content: [
            "🎓 Education:",
            "",
            "Bachelor's of Information System",
            "Telkom University (2020 - 2024)",
            "• Focused on software engineering, AI, and data structures",
            "• GPA: 3.83/4.0",
            "",
            "📘 Learning & Certifications:",
            "• Continuous professional development through certifications",
            "• Self-guided study in cloud technologies and artificial intelligence",
        ],
    },
    certifications: {
        title: "📜 Certifications",
        content: [
            "📜 Certifications:",
            "",
            `• Web Developer Occupacy - BNSP [Link](https://drive.google.com/file/d/1NgQWkHQ4DUZ5eNI2qmrLdS0KidYlKtnB/view?usp=sharing)`,
            `• Next.js Udemy Certification [Link](https://www.udemy.com/certificate/UC-ecc7593c-b3b8-4ba5-be3d-57ff470519f7/)`,
            `• Software Engineer Certificate: Hackerrank [Link](https://www.hackerrank.com/certificates/b0e30360c7fd)`,
            `• SQL Advance Certificate: Hackerrank [Link](https://www.hackerrank.com/certificates/9a0003f25dcf)`,
            `• Frontend Developer React Certificate: Hackerrank [Link](https://www.hackerrank.com/certificates/3a7d0090b6ee)`,
            `• Use Generative AI Certificate [Link](https://drive.google.com/file/d/1HJ9t2z25iEXVWAaFW7MVvkxaaXPCYaTT/view?usp=sharing)`,
            `• IBM Granite Models Certificate [Link](https://drive.google.com/file/d/1R_Ii6uQPgs40ghs_ULepKvMqjebWYWaH/view?usp=sharing)`,
            "",
            "Visit my LinkedIn profile - 'contact' - for a complete list of certifications.",
        ],
    },
    leadership: {
        title: "🫂 Leadership & Community",
        content: [
            "🫂Leadership & Community:",
            "",
            "🎤 Speaking Engagements:",
            "• Keynote Speaker – 'Data Warehouse and Business Intelligence'",
            "• Keynote Speaker – 'Mastering Data Visualization with Tableau'",
            "",
            "🧑‍🏫 Academic & Technical Leadership:",
            "• Lab Assistant – Programming Fundamentals Laboratory (Daspro)",
            "• Secretary – Assistant Coordinator of Algorithm & Programming Practice",
            "",
            "🤝 I’m passionate about mentoring and contributing to academic and tech communities.",
        ],
    },
};

function formatPortfolioContext() {
    let contextString = "";
    for (const key in portfolioData) {
        const section = portfolioData[key];
        contextString += `**${section.title}**\n`;
        contextString += section.content.join('\n');
        contextString += '\n\n';
    }
    return contextString;
}

export const portfolioSystemPrompt = `
  You are a helpful AI assistant embedded in Ahmad Sidik Rofiudin's portfolio.
  Your name is Rofi-AI.
  You must answer questions based ONLY on the context provided below.
  Be friendly, concise, and helpful.
  If a question is outside of the provided context, politely say that you can only answer questions about Rofi's portfolio.
  
  CRITICAL INSTRUCTION: When you list items such as certifications, projects, contact or anything else that contains a markdown link in the context (e.g. [Link](https://...)), you MUST include that exact markdown link in your response so the user can click it. Do NOT remove the links.

  Here is the portfolio data:
  
  ---
  
  ${formatPortfolioContext()}
  ---
  `;
