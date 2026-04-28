import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certs = [
    {
      title: "Azure AI Engineer",
      platform: "Microsoft Azure",
      date: "2025",
      color: "#0078D4", // Azure Blue
      url: "https://learn.microsoft.com/api/credentials/share/en-us/BharadwajByroju/BEF07C3B83D1572E?sharingId=8D44A0E74A96DB43",
      skills: ["AI Engineering", "Azure AI Services"],
      logo: "/assets/azure-svgrepo-com.svg"
    },
    {
      title: "Azure Fundamentals",
      platform: "Microsoft Azure",
      date: "2023",
      color: "#0078D4", // Azure Blue
      url: "https://learn.microsoft.com/api/credentials/share/en-us/BharadwajByroju/6C40C768A1B7CFB?sharingId=8D44A0E74A96DB43",
      skills: ["Cloud Fundamentals", "Azure Services"],
      logo: "/assets/azure-svgrepo-com.svg"
    },
    {
      title: "Azure Data Scientist",
      platform: "Microsoft Azure",
      date: "2025",
      color: "#0078D4", // Azure Blue
      url: "https://learn.microsoft.com/api/credentials/share/en-us/BharadwajByroju/5201FEA5613D45F3?sharingId=8D44A0E74A96DB43",
      skills: ["Data Science", "Azure Machine Learning"],
      logo: "/assets/azure-svgrepo-com.svg"
    },
    {
      title: "AWS Cloud Foundations",
      platform: "Amazon Web Services",
      date: "2025",
      color: "#FF9900", // AWS Orange
      url: "https://www.credly.com/go/Jcj5elqB",
      skills: ["Cloud Foundations", "AWS Services"],
      logo: "/assets/aws-svgrepo-com.svg"
    },
    {
      title: "Oracle OCI Certified Generative AI Professional",
      platform: "Oracle",
      date: "2025",
      color: "#F00", // Oracle Red
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A1BD6D645AE60385A8E3E772DB1C65A817E08D0E37F02A9847FD71624DFCDB00",
      skills: ["Generative AI", "OCI"],
      logo: "/assets/oracle-svgrepo-com.svg"
    },
    {
      title: "Oracle OCI Certified Developer Professional",
      platform: "Oracle",
      date: "2025",
      color: "#F00", // Oracle Red
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=913588CC2AE59D0C4A8009BE7B4DA527A17505A3E9EF1B8E6EF4CCDAE5426CED",
      skills: ["Cloud Development", "OCI"],
      logo: "/assets/oracle-svgrepo-com.svg"
    },
    {
      title: "Oracle OCI Certified DevOps Professional",
      platform: "Oracle",
      date: "2025",
      color: "#F00", // Oracle Red
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DFD14C9E07D34C5F77558688E2AA998304844C81A88B4004EAA93B59F514CB63",
      skills: ["DevOps", "OCI"],
      logo: "/assets/oracle-svgrepo-com.svg"
    },
  ];

  return (
    <section id="certs" className="py-24 px-10 md:px-24 bg-primaryBg rounded-b-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-dark mb-12 flex items-center scale-y-[1.2] tracking-[-0.05em] origin-left" data-aos="fade-up">
          <span className="text-grayAccent mr-4 text-xl font-mono">04.</span> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-lg shadow-lg relative group overflow-hidden"
              data-aos={i % 2 === 0 ? "zoom-out-left" : "zoom-out-right"}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-dark opacity-10 group-hover:bg-redHighlight group-hover:opacity-100 transition-all"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded bg-neutral flex items-center justify-center overflow-hidden">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.platform} className="w-full h-full object-contain" />
                  ) : (
                    <span className="font-bold text-[10px] uppercase" style={{ color: cert.color }}>Logo</span>
                  )}
                </div>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`}>
                  <FiExternalLink className="text-grayAccent hover:text-redHighlight cursor-pointer transition-colors" />
                </a>
              </div>
              <h3 className="text-lg font-heading font-bold text-dark mb-1">{cert.title}</h3>
              <p className="text-sm text-grayAccent font-body mb-2">{cert.platform}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs font-mono text-dark/50">{cert.date}</span>
              </div>
              {cert.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="text-[11.5px] bg-dark/5 text-grayAccent px-2 py-1 rounded-full font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;