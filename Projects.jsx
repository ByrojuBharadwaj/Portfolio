import React, { useState } from 'react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Serverless RAG API",
      desc: "A backend-first platform that transforms scattered PDFs and text documents into a queryable knowledge API. Documents are uploaded to S3, parsed, chunked, embedded using OpenAI embeddings, and stored in Pinecone for semantic retrieval. A FastAPI backend deployed on AWS Lambda behind API Gateway exposes clean /ingest and /query endpoints returning grounded answers with citations powered by GPT-3.5-turbo. Terraform provisions all infrastructure and GitHub Actions automates testing, artifact builds, and safe deployments end to end.",
      tech: ["Python", "API", "OpenAI GPT-3.5Turbo", "AWS Lambda", "Node.js", "Terraform"],
      image: "/assets/serverless-rag-api.jpeg",
      link: "https://github.com/ByrojuBharadwaj/My-Project-Serverless-RAG-API"
    },
    {
      title: "Live Meeting Suggestions Copilot",
      desc: "A real-time AI meeting copilot that listens to live audio, transcribes it in 30-second chunks via Groq Whisper, and continuously surfaces 3 fresh, context-aware suggestions the user can act on immediately. A 5-type suggestion taxonomy ensures diversity and relevance. Clicking a suggestion opens a streaming detailed answer; users can also chat freely against the full meeting context. All Groq API calls are proxied through thin Next.js API routes — no API key is ever stored server-side.",
      tech: ["TypeScript", "Next.js", "TailwindCSS", "Groq", "Web MediaRecorder API"],
      image: "/assets/live-meeting-suggestions.jpeg",
      link: "https://github.com/ByrojuBharadwaj/My-Project-Live-Transcriptions-suggestions-"
    },
    {
      title: "TypeScript-LoggingFramework — Enterprise-Style",
      desc: "A modular, extensible logging framework inspired by enterprise logging systems. It supports named loggers with configurable log levels (DEBUG → FATAL), pluggable appenders, and pluggable formatters. The AsyncAppender wraps any delegate appender and offloads writes to the Node.js event loop via setImmediate batching, with a bounded queue and graceful shutdown flush.",
      tech: ["TypeScript", "Node.js", "System Design", "Async Batching"],
      image: "/assets/logging-framework.jpeg",
      link: "https://github.com/ByrojuBharadwaj/My-Project-TypeScript-LoggingFramework"
    },
    {
      title: "Book Recommendation System",
      desc: "Built a modular recommendation pipeline using TruncatedSVD collaborative filtering, TF-IDF reranking, and NLP-based query understanding to deliver relevant results under CPU constraints. Designed batch candidate generation, vectorized scoring, and cold-start handling for efficient, scalable inference, and containerized the system with Docker for reproducible deployment.",
      tech: ["Python", "Machine Learning", "Numpy", "Scikit", "Pandas"],
      image: "/assets/book-recommendation-system.jpeg",
      link: ""
    },
    {
      title: "Asana Automation Test Suite",
      desc: "A data-driven, end-to-end test automation suite built with Playwright and TypeScript targeting an Asana-like project management application. Test cases and credentials are externalized to JSON, enabling dynamic test generation without code modification. Implements POM for maintainability, beforeEach isolation hooks, parallel test execution, and captures screenshots, traces, and video on failure.",
      tech: ["Playwright", "TypeScript", "Page-Object Model", "WebKit", "Test Reports"],
      image: "/assets/asana-test-automation.jpeg",
      link: "https://github.com/ByrojuBharadwaj/My-Project-Asana-Automation-Test-Suite"
    },
    {
      title: "Secure Task Management System",
      desc: "A full-stack, monorepo task management platform engineered with a security-first architecture. The Angular 18 dashboard leverages signals and a Bearer token HTTP interceptor. The NestJS backend enforces JWT authentication with Passport.js and RBAC. SQLite persists data via TypeORM with auto-schema synchronization. A dedicated AuditModule logs all operations ensuring full traceability.",
      tech: ["TypeScript", "Angular", "TailwindCSS", "REST API", "JWT authentication"],
      image: "/assets/secure-task-management.jpeg",
      link: "https://github.com/ByrojuBharadwaj/My-Project-Secure-Task-Management-System"
    }
  ];

  return (
    <section id="my-work" className="py-24 px-10 md:px-24 bg-[#EFC39C]">
      <div className="max-w-6xl mx-auto"> 
        <h2 className="text-5xl font-heading font-bold text-dark mb-20 scale-y-[1.2] tracking-[-0.05em] origin-left" data-aos="fade-down-right">
          <span className="text-grayAccent mr-4 text-xl font-mono">03.</span> Some Things I’ve Built
        </h2>

        {(showAll ? projects : projects.slice(0, 3)).map((proj, i) => (
          <div key={i} className="relative grid grid-cols-12 gap-4 items-center mt-[10px] mb-18 md:mb-32" data-aos="zoom-in">
            {/* Project Image */}
            <div className={`col-span-12 md:col-span-7 relative group ${i % 2 !== 0 ? 'md:col-start-6' : ''}`}>
              {/* Mac Browser Frame */}
              <div className="bg-yellowHighlight pt-8 pb-1 px-1 rounded-t-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="absolute top-2 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="bg-dark/10 absolute inset-0 z-10 group-hover:bg-transparent transition-all rounded-lg"></div>
                <img src={proj.image} className="rounded-b-lg shadow-xl w-full h-[220px] md:h-[600px] object-cover" alt={proj.title} />
              </div>
            </div>

            {/* Project Content */}
            <div className={`col-span-12 md:col-span-5 z-20 flex flex-col ${i % 2 === 0 ? 'md:-ml-24 text-right items-end' : 'md:col-start-1 md:row-start-1 md:-mr-24 text-left items-start'}`}>
              <p className="text-[#fbf1e8] font-mono text-sm">Featured Project</p>
              <h3 className="text-2xl font-heading font-bold text-dark mb-4">{proj.title}</h3>
              <div className="bg-accent p-6 rounded-lg shadow-xl text-dark mb-4 text-sm leading-relaxed backdrop-blur-sm">
                {proj.desc}
              </div>
              <ul className={`flex flex-wrap gap-4 font-mono text-[12.5px] text-grayAccent mb-4 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {proj.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-redHighlight transition-colors"
                >
                  <FiGithub size={22} />
                </a>
              )}
            </div>
          </div>
        ))}
        {!showAll && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-sm text-dark border-[3px] border-[#8a4c16] px-6 py-3 rounded hover:bg-dark/10 transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;