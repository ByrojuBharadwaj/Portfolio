import React from 'react';

const About = () => (
  <section id="about" className="py-24 px-10 md:px-24 bg-primaryBg rounded-t-3xl">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right">
        <h2 className="text-3xl font-heading font-bold text-dark mb-8 flex items-center scale-y-[1.2] tracking-[-0.05em] origin-left">
          <span className="text-grayAccent mr-4 text-xl font-mono">01.</span> About Me
        </h2>
        <div className="space-y-4 text-dark font-body">
          <p>
            Greetings, I'm Bharadwaj Byroju, a Software Engineer with 4 years of experience building software products that sit at the intersection of backend engineering, software architecture, and applied AI. What defines my work isn't any single technology it's a consistent obsession with the product problem underneath the code: figuring out what a system needs to do, why it needs to do it that way, and where the current design will eventually break. I take pride in making complexity invisible to the people using what I build, and in getting the architecture decisions right before they become expensive to reverse.
          </p>
          <p>
            My journey in software has been one of deliberate expansion. I started at Cognizant Technology Solutions, building and transforming enterprise payment platforms learning what it means to operate systems at scale under real production pressure. That experience shaped my instinct for reliability and systems thinking. From there, I moved into AI-driven product engineering at Arizona State University, where I designed and shipped a real-time conversational AI platform that handled the kind of unpredictable, low-latency requirements that push both infrastructure and model design to their limits. Each role added a different dimension to how I think about building software products.
          </p>
          <p>
            Some of the technologies I work with regularly include…..
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-[15.1px] text-grayAccent">
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Python</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Terraform</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Java</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Playwright</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> TypeScript/Node.js</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> DBMS</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Docker/Kubernetes</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Agentic AI/Frameworks</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> AWS/Azure</li>
            <li className="flex items-center gap-2"><span className="text-dark">▹</span> Multi-step Workflow</li>
          </ul>
        </div>
      </div>
      <div className="relative group mx-auto md:mx-0" data-aos="zoom-in">
        <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-dark rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10 rounded-lg"></div>
          <img src="/assets/about-image.jpeg" alt="Profile" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default About;