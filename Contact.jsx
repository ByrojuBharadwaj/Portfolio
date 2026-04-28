import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-10 bg-white">
      <div className="max-w-4xl mx-auto bg-yellowHighlight p-12 md:p-20 text-center rounded-lg shadow-[0_20px_50px_rgba(249,218,127,0.3)]" data-aos="zoom-in">
        <p className="font-mono text-redHighlight mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark mb-6 scale-y-[1.2] tracking-[-0.05em]">Get In Touch</h2>
        <p className="text-dark max-w-lg mx-auto mb-10 font-body text-lg">
          My inbox is always open. Whether you have a question about AI architecture or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a 
          href="mailto:jung.dev@asu.edu" 
          className="mk-button px-10 py-5 border-2 border-grayAccent text-grayAccent font-heading font-bold hover:text-white transition-colors relative z-10"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
export default Contact;