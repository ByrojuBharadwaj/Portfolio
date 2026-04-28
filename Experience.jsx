import React from 'react';

const Experience = () => {
  const jobs = [
    {
      company: "Arizona State University",
      title: "Software Engineer (Support Aide)",
      range: "Jun 2024 - Dec 2025",
      duties: [
        "I designed and shipped Edu-Agent an enterprise-grade real-time conversational AI for academic support. I led the multi-step workflow architecture, engineered LLM-driven TTS prosody via ElevenLabs and Azure to improve speech naturalness, and fine-tuned models to reduce latency by 30%. The system improved student inquiry resolution speed by 45%, validated through live voice traffic analytics and A/B testing."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      title: "Software Engineer (Programmer Analyst)",
      range: "Jan 2022 - Dec 2023",
      duties: [
        "I engineered the transformation of a Global Payment Concierge platform migrating it from a legacy ML-based intent detection model to a next-generation generative AI agent, achieving 98% uptime. I built Python-based LLM service logic integrated with JavaScript frontends, enabling context-aware payment dispute resolution synced with enterprise CRM systems establishing a scalable foundation for agentic payment operations across global transaction pipelines."
      ]
    },
    {
      company: " ",
      title: "",
      range: "",
      duties: [],
      note: "Support Aide and Programmer Analyst are organizational titles."
    }
  ];

  return (
    <section id="experience" className="py-24 px-10 md:px-24 bg-primaryBg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-dark mb-12 flex items-center scale-y-[1.2] tracking-[-0.05em] origin-left" data-aos="fade-down-left">
          <span className="text-grayAccent mr-4 text-xl font-mono">02.</span> Where I've Worked
        </h2>
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div key={i}>
              <h3 className="text-xl font-heading font-bold text-dark">
                {job.company}
                <span className="text-accent"> @ {job.title}</span>
              </h3>
              <p className="font-mono text-sm text-grayAccent mb-4">{job.range}</p>
              <ul className="space-y-4">
                {job.duties.map((duty, j) => (
                  <li key={j} className="flex gap-4 text-dark font-body text-[15.4px]">
                    <span className="text-accent text-xs">▹</span>
                    {duty}
                  </li>
                ))}
              </ul>
              {job.note && (
                <p className="mt-8 font-body text-[15.4px]">
                  <span className="font-bold" style={{ color: '#8B4513' }}>Note</span>
                  <span className="text-dark">: {job.note}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
