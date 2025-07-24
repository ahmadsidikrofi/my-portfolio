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
            "   - Link: https://ortho-ai-doctor-topaz.vercel.app",
            "",
            "2. Flowbeat",
            "   - Real-time monitoring system for patients and enabling doctors to track vitals remotely",
            "   - Tech: Laravel, JWT, Next.js, ShadCN, React Native, NativeWind, MySQL, ",
            "",
            "3. FinTrack-app",
            "   - Personal finance tracker with monthly reports, cashflow insights, and AI-powered advice via IBM Watson",
            "   - Tech: Laravel Sanctum, JWT, Next.js, Tailwind CSS, ShadCN, MySQL",
            "   - Link: https://fin-track-app.vercel.app",
            "",
            "4. Converto",
            "   - A simple yet powerful tool to convert audio, video, and image files instantly",
            "   - Tech: Next.js, Tailwind CSS, ShadCN, UploadThing (File), No Database",
            "   - Link: https://converto-bay.vercel.app",
            "5. Setup-in",
            "   - A multi-vendor marketplace with store creation, cart & checkout flow, Midtrans integration, and order tracking",
            "   - Tech: Next.js, NextAuth.js, ShadCN, Prisma, Postgresql, Supabase, Midtrans API",
            "   - Link: https://setup-in.vercel.app/",
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
            "Frontend:      React, Next.js, TailwindCSS, ShadCN",
            "Backend:       Laravel, Express.js, FastAPI",
            "Databases:     PostgreSQL, MySQL, MongoDB, Redis, InfluxDB, ChromaDB",
            "AI & LLM:      Langchain, CrewAI, IBM Watson, OpenAI API, Gemini API, RAG",
            "Tools:         Git, k6, Grafana, Prometheus",
            "",
            "Curious how I use these? Type 'projects' to find out!",
        ],
    },
    experience: {
        title: "👜Work Experience",
        content: [
            "👜Work Experience:",
            "",
            "AI Software Engineer (Freelance) | M&A Associates Orthodontics (Feb 2025 – Present)",
            "• Integrated AI capabilities into Ortho-AI, an orthodontic patient management platform",
            "• Developed Python backend with FastAPI",
            "• Implementing Langchain and RAG to enhance LLM-based clinical support",
            "• Built SQL agent for intelligent data querying using natural language prompts",
            "• Delivered contextual data retrieval and smart output generation tailored to user queries",
            "",
            "Fullstack Developer (Intern) | Hosting CMS Project",
            "• Built a fully functional web hosting CMS platform with customizable frontend",
            "• Engineered backend and CMS using Laravel and PostgreSQL for content and site management",
            "• Successfully deployed and hosted the full platform to production",
            "",
            "Type 'projects' to see my recent work.",
        ],
    },
    contact: {
        title: "📨 Lets Get In Touch",
        content: [
            "📨 Lets Get In Touch:",
            "",
            "Email:       ahmadsidikrofiudin@email.com",
            "Phone:       (+62)851-5745-5205",
            "LinkedIn:    linkedin.com/in/ahmad-sidik-rofiudin-6b2b58217/",
            "GitHub:      github.com/ahmadsidikrofi",
            "Instagram:   rofi.js",
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
            `• Web Developer Occupacy - BNSP`,
            `• Next.js Udemy Certification` ,
            `• Software Engineer Certificate: Hackerrank`,
            `• SQL Advance Certificate: Hackerrank`,
            `• Frontend Developer React Certificate: Hackerrank`,
            `• Use Generative AI Certificate`,
            `• IBM Granite Models Certificate`,
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
  
  Here is the portfolio data:
  
  ---
  
  ${formatPortfolioContext()}
  ---
  `;
