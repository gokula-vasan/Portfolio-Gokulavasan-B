import React, { useState, useEffect } from 'react';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll Spy using IntersectionObserver
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.35, rootMargin: '-80px 0px -20% 0px' }
      );

      observer.observe(el);
      return { observer, el };
    });

    // Scroll up show/hide
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container position-relative">
      {/* Dynamic Starry Sky Background Canvas */}
      <StarryBackground />

      {/* Floating Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Structured Single-Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer 
        className="py-4 border-top border-secondary-subtle border-opacity-10 mt-5"
        style={{
          background: 'rgba(2, 2, 8, 0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <div className="text-center text-sm-start">
              <h6 className="text-white fw-bold mb-1 font-heading">
                Gokul<span className="text-cyan">.</span>
              </h6>
              <small className="text-muted">© 2026 Gokulavasan B. All rights reserved.</small>
            </div>
            
            <div className="d-flex gap-4">
              <a href="#home" className="text-muted text-decoration-none fs-8 hover-white transition-all">Home</a>
              <a href="#about" className="text-muted text-decoration-none fs-8 hover-white transition-all">About</a>
              <a href="#skills" className="text-muted text-decoration-none fs-8 hover-white transition-all">Skills</a>
              <a href="#projects" className="text-muted text-decoration-none fs-8 hover-white transition-all">Projects</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Top Trigger Button */}
      <a
        href="#home"
        className={`position-fixed bottom-4 end-4 rounded-circle d-flex align-items-center justify-content-center btn-cosmic p-3 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          right: '2rem',
          bottom: '2rem',
          zIndex: 99,
          width: '45px',
          height: '45px',
          transition: 'var(--transition-smooth)',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </a>

      {/* Global CSS tweaks */}
      <style>{`
        .hover-white {
          transition: var(--transition-smooth);
        }
        .hover-white:hover {
          color: #fff !important;
        }
        .fs-8 {
          font-size: 0.78rem;
        }
        .fs-7 {
          font-size: 0.88rem;
        }
        .bg-purple-dim {
          background: rgba(189, 0, 255, 0.15) !important;
          border: 1px solid rgba(189, 0, 255, 0.3) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .word-break {
          word-break: break-all;
        }
      `}</style>
    </div>
  );
};

export default App;
