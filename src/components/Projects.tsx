import React from 'react';
import { ExternalLink, ShieldAlert, ShoppingBag, Layers } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  icon: React.ReactNode;
  borderType: 'cyan' | 'purple';
}

export const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      title: 'Employee Management System',
      subtitle: 'Full-Stack Enterprise Portal',
      description: 'Developed a robust full-stack Employee Management System (MERN) equipped with scalable RESTful APIs, modern dashboard interfaces, and granular user provisioning. Enhanced administrative authorization using secure JWT encryption protocols and strict Role-Based Access Control (RBAC) tiers.',
      techStack: ['React.JS', 'Express.JS', 'Node.JS', 'MongoDB', 'Bootstrap', 'JWT', 'RBAC'],
      github: 'https://github.com',
      demo: 'https://ems-sigma-three.vercel.app/',
      icon: <ShieldAlert size={28} className="text-cyan" />,
      borderType: 'cyan',
    },
    {
      title: 'Elite Shop',
      subtitle: 'Online Product Selling Platform',
      description: 'Engineered a high-concurrency MERN e-commerce architecture utilizing robust ACID-compliant transactional flows to preserve absolute database consistency. Formulated an association rule learning algorithm for native Market Basket Analysis to deliver immediate "Frequently Bought Together" product suggestions.',
      techStack: ['Node.JS', 'Express.JS', 'React.JS', 'MongoDB', 'Bootstrap', 'Market Basket Analysis', 'ACID Transactions'],
      github: 'https://github.com',
      demo: 'https://online-product-selling-web.vercel.app/',
      icon: <ShoppingBag size={28} className="text-purple" />,
      borderType: 'purple',
    },
  ];

  return (
    <section id="projects" className="py-5 position-relative">
      {/* Decorative nebula spots */}
      <div className="nebula-purple" style={{ top: '20%', right: '5%' }} />
      <div className="nebula-cyan" style={{ bottom: '10%', left: '5%' }} />

      <div className="container py-4">
        {/* Section Header */}
        <div className="section-title-container">
          <h2 className="section-title fw-extrabold text-white">Featured Projects</h2>
          <div className="glow-underline"></div>
        </div>

        {/* Projects Cards Showcase */}
        <div className="row g-5 justify-content-center">
          {projectsData.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div 
                className={`space-card h-100 d-flex flex-column justify-content-between ${
                  project.borderType === 'purple' ? 'space-card-purple' : ''
                }`}
                style={{
                  background: 'rgba(6, 6, 18, 0.65)',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <div>
                  {/* Top Bar / Category and Icon */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '56px',
                        height: '56px',
                        background: project.borderType === 'cyan' ? 'rgba(0, 242, 254, 0.05)' : 'rgba(189, 0, 255, 0.05)',
                        border: `1.5px solid ${project.borderType === 'cyan' ? 'var(--cyan-glow)' : 'var(--purple-glow)'}`,
                        boxShadow: `0 0 15px ${project.borderType === 'cyan' ? 'var(--cyan-glow)' : 'var(--purple-glow)'}33`
                      }}
                    >
                      {project.icon}
                    </div>
                    <span 
                      className="px-3 py-1 rounded-pill fs-8 fw-bold d-flex align-items-center gap-1"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <Layers size={12} /> MERN STACK
                    </span>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-white fw-bold mb-1">{project.title}</h3>
                  <h6 className={`mb-3 fw-semibold ${project.borderType === 'cyan' ? 'text-cyan' : 'text-purple'}`}>
                    {project.subtitle}
                  </h6>
                  
                  <p className="text-muted fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges Row */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="d-flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-cosmic py-2 px-4 fs-7"
                    >
                      <i className="bi bi-github me-1"></i> Repository
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cosmic-outline py-2 px-4 fs-7"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
