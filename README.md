# 🚀 Terminal-Style AI Portfolio

A fully interactive, terminal-inspired portfolio website built with modern web technologies and powered by AI. This project transforms a traditional portfolio into an engaging command-line experience where visitors can type commands or chat directly with an AI assistant to learn more about the developer.

## ✨ Features

- **💻 Interactive Terminal UI**: A sleek, hacker-style command-line interface that feels like a real terminal.
- **🤖 AI-Powered Assistant**: Integrated with **Google Gemini (2.5 Flash)** via the Vercel AI SDK. The AI acts as a personal assistant, answering questions and providing information based on the portfolio context.
- **⚡ Command Execution**: Supports standard terminal commands (e.g., `help`, `about`, `projects`, `skills`, `experience`, `clear`, etc.) that can be typed or clicked.
- **🔗 Smart Markdown Parsing**: Automatically converts markdown links from the AI's response into clickable HTML links right inside the terminal.
- **🎮 3D Elements**: Incorporates 3D visuals using React Three Fiber and GSAP for a modern, dynamic touch (like the interactive lanyard).
- **📱 Responsive Design**: Optimized for both desktop and mobile viewing with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`, `@ai-sdk/react`, `@ai-sdk/google`)
- **Components**: [Radix UI](https://www.radix-ui.com/) (for accessible UI primitives)
- **3D & Animation**: `@react-three/fiber`, `@react-three/drei`, `gsap`, `meshline`
- **Utilities**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js or Bun installed on your machine. You will also need a **Google Gemini API Key**.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd my-portfolio
   ```

2. **Install dependencies:**
   Using `bun` (recommended) or `npm`/`yarn`/`pnpm`:
   ```bash
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add your Google Gemini API key:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   bun run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `app/page.js` - Main entry point containing the terminal logic and layout.
- `app/api/chat/route.js` - Serverless API route handling the Vercel AI SDK stream with Google Gemini.
- `components/terminal.js` - The core terminal component rendering messages, handling inputs, and parsing links.
- `components/CustomTypingText.js` - Handles the typewriter animation effect for AI responses.
- `lib/portfolio-data.js` - Centralized data store (CV, projects, skills) and system prompt instructions for the AI.
- `lib/utils.js` - Helper functions, including the custom Markdown link parser (`parseLinks`).

## 💡 Customization

To make this portfolio your own:
1. Update the content in `lib/portfolio-data.js` with your personal information, work experience, projects, and custom links.
2. The AI's `portfolioSystemPrompt` will automatically adapt to the new context and answer questions based on your provided data.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
