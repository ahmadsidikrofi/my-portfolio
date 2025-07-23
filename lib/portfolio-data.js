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
            "I am a passionate Software & AI Engineer with expertise in building",
            "scalable applications and intelligent systems. I love solving complex",
            "problems and creating innovative solutions that make a difference.",
            "",
            "When I'm not coding, you can find me exploring new technologies,",
            "contributing to open source projects, or mentoring fellow developers.",
        ],
    },
    projects: {
        title: "Recent Projects",
        content: [
            "Recent Projects:",
            "",
            "1. AI-Powered Analytics Dashboard",
            "   - Built with React, Python, and TensorFlow",
            "   - Real-time data processing and visualization",
            "",
            "2. Distributed Microservices Platform",
            "   - Node.js, Docker, Kubernetes",
            "   - Handles 10M+ requests per day",
            "",
            "3. Machine Learning Pipeline",
            "   - Python, Apache Airflow, AWS",
            "   - Automated model training and deployment",
        ],
    },
    skills: {
        title: "Technical Skills",
        content: [
            "Technical Skills:",
            "",
            "Languages:     JavaScript, TypeScript, Python, Java, Go",
            "Frontend:      React, Next.js, Vue.js, HTML5, CSS3",
            "Backend:       Node.js, Express, Django, FastAPI",
            "Databases:     PostgreSQL, MongoDB, Redis, Elasticsearch",
            "Cloud:         AWS, Google Cloud, Azure, Docker, Kubernetes",
            "AI/ML:         TensorFlow, PyTorch, Scikit-learn, OpenAI API",
            "Tools:         Git, Jenkins, Terraform, Grafana, Prometheus",
        ],
    },
    experience: {
        title: "Work Experience",
        content: [
            "Work Experience:",
            "",
            "Senior Software Engineer | TechCorp (2022 - Present)",
            "• Lead development of AI-powered features",
            "• Mentor junior developers and conduct code reviews",
            "• Architected scalable microservices infrastructure",
            "",
            "Software Engineer | StartupXYZ (2020 - 2022)",
            "• Built full-stack web applications using React and Node.js",
            "• Implemented CI/CD pipelines and automated testing",
            "• Collaborated with cross-functional teams on product development",
        ],
    },
    contact: {
        title: "Contact Information",
        content: [
            "Contact Information:",
            "",
            "Email:     ahmadsidikrofiudin@email.com",
            "LinkedIn:  linkedin.com/in/ahmad-sidik-rofiudin-6b2b58217/",
            "GitHub:    github.com/ahmadsidikrofi",
            "",
            "Feel free to reach out for collaboration opportunities!",
        ],
    },
    education: {
        title: "Education",
        content: [
            "Education:",
            "",
            "Master of Science in Computer Science",
            "Stanford University (2018 - 2020)",
            "• Specialization in Artificial Intelligence",
            "• GPA: 3.9/4.0",
            "",
            "Bachelor of Science in Software Engineering",
            "University of Technology (2014 - 2018)",
            "• Magna Cum Laude",
            "• President of Computer Science Society",
        ],
    },
    certifications: {
        title: "Certifications",
        content: [
            "Certifications:",
            "",
            "• AWS Certified Solutions Architect - Professional",
            "• Google Cloud Professional Machine Learning Engineer",
            "• Certified Kubernetes Administrator (CKA)",
            "• MongoDB Certified Developer",
            "• Scrum Master Certified (SMC)",
            "• TensorFlow Developer Certificate",
        ],
    },
    leadership: {
        title: "Leadership & Community",
        content: [
            "Leadership & Community:",
            "",
            "• Tech Lead for 15+ person engineering team",
            "• Organizer of local JavaScript meetup (500+ members)",
            "• Mentor at Code for Good hackathons",
            "• Speaker at 10+ tech conferences",
            "• Open source contributor (50+ repositories)",
            "• Volunteer coding instructor for underserved communities",
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
