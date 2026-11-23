export const skills = [
  { id: "languages", en: "Languages", vi: "Ngôn ngữ", items: ["TypeScript", "Java", "Dart", "SQL"] },
  { id: "backend", en: "Backend", vi: "Backend", featured: true, items: ["Node.js", "NestJS", "Spring Boot", "RESTful API", "JWT Authentication", "RBAC"] },
  { id: "database", en: "Database", vi: "Cơ sở dữ liệu", featured: true, items: ["PostgreSQL", "PostGIS", "MongoDB", "Mongoose", "TypeORM", "MySQL"] },
  { id: "frontend", en: "Frontend & Mobile", vi: "Frontend & Mobile", items: ["Next.js", "Flutter"] },
  { id: "tools", en: "Tools & DevOps", vi: "Công cụ & DevOps", items: ["Git", "GitHub", "Render", "Vercel", "Postman", "JMeter", "Selenium", "Resend", "Firebase", "Supabase", "Figma", "Draw.io"] },
  { id: "ai", en: "AI-assisted development", vi: "Phát triển với AI", items: ["Claude Code", "GitHub Copilot", "ChatGPT", "Gemini", "Prompt engineering", "AI-assisted debugging", "Code review & verification"] }
] as const;
