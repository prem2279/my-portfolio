'use client';
import { useState } from 'react';
import Reveal from "./Reveal";
import { contactData, resumeEncryptedPath } from "@/src/data/portfolio-data";
import { fetchAndDecryptAsset, triggerDownload } from "@/src/utils/file-utils";

export default function Contact() {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ASSET_KEY || "";
  const [isDownloading, setIsDownloading] = useState(false);

  const handleLinkClick = async (e: React.MouseEvent, item: any) => {
    if (item.isResume) {
      e.preventDefault();
      if (isDownloading) return;

      setIsDownloading(true);
      try {
        // Fetch and Decrypt on Demand
        const url = await fetchAndDecryptAsset(resumeEncryptedPath, SECRET_KEY, 'application/pdf');
        if (url) {
          triggerDownload(url, "Prem_Kumar_Gundu_Resume.pdf");
          // Cleanup
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        } else {
          alert("Error loading resume.");
        }
      } catch (err) {
        console.error("Download failed", err);
      } finally {
        setIsDownloading(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-black text-center mb-14 text-dark">Let's Connect</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, idx) => (
            <Reveal key={idx}>
              <a 
                href={item.link} 
                onClick={(e) => handleLinkClick(e, item)}
                target={item.link.startsWith('http') ? "_blank" : undefined}
                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group block cursor-pointer"
              >
                <div className="bg-glass p-8 rounded-2xl border border-primary/20 text-center hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <i className={item.icon}></i>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray mb-2">{item.label}</div>
                  <div className="text-primary-dark font-bold font-serif text-lg group-hover:text-primary transition-colors">
                    {item.isResume && isDownloading ? 'Downloading...' : item.value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}