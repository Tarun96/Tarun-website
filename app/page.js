"use client";

import React, { useState } from 'react';
import { 
  Atom, 
  Server, 
  BrainCircuit, 
  Briefcase, 
  Github, 
  Linkedin, 
  Mail, 
  Rocket,
  ChevronDown,
  Code2,
  GraduationCap,
  Terminal,
  Database,
  Cpu,
  Globe
} from 'lucide-react';

// --- PORTFOLIO DATA (UPDATE THIS SECTION) ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Tarun Kumar Tella",
    role: "Senior Software Engineer",
    company: "ServiceNow",
    email: "tarun.kumar.tella@example.com", // Update with your actual email
    linkedin: "https://www.linkedin.com/in/tarun-kumar-tella/",
    github: "https://github.com/", // Add your GitHub URL
    resume: "#" // Add link to resume if available
  },
  about: {
    title: "The Scientist of Systems",
    philosophy: "My work exists at the intersection of rigid logic and fluid intelligence.",
    description: "I am a Senior Software Engineer at ServiceNow, specializing in building high-scale, fault-tolerant backend systems while exploring the frontiers of Generative AI. I view software engineering as a dual discipline: the 'Deterministic' art of crafting reliable architectures, and the 'Probabilistic' science of integrating AI agents."
  },
  experience: [
    {
      company: "ServiceNow",
      role: "Senior Software Engineer",
      period: "Present",
      description: "Architecting and maintaining core platform services that power enterprise workflows. Focusing on high-availability distributed systems, performance optimization, and integrating AI-driven capabilities into the ServiceNow ecosystem. leading technical design reviews and mentoring junior engineers."
    },
    {
      company: "Previous Company (e.g., Infosys/Accenture)", // UPDATE ME
      role: "Software Engineer",
      period: "2021 - 2023",
      description: "Developed scalable microservices using Java and Spring Boot. Optimized database queries for high-volume transactions and migrated legacy monoliths to cloud-native architectures on AWS."
    },
    // Add more experience objects here
  ],
  education: [
    {
      degree: "B.Tech in Computer Science", // UPDATE ME
      school: "IIIT / University Name", // UPDATE ME
      year: "2017 - 2021",
      description: "Specialized in Algorithms, Distributed Systems, and Machine Learning."
    }
  ],
  skills: [
    {
      category: "Backend Engineering",
      icon: Server,
      description: "The Deterministic Core",
      tech: ["Java", "Spring Boot", "Microservices", "System Design", "Kafka", "Redis"]
    },
    {
      category: "AI & ML",
      icon: BrainCircuit,
      description: "The Probabilistic Frontier",
      tech: ["Python", "PyTorch", "LLMs", "RAG Pipelines", "LangChain", "Vector DBs"]
    },
    {
      category: "Data & Cloud",
      icon: Database,
      description: "Infrastructure & Storage",
      tech: ["AWS", "Azure", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"]
    },
    {
      category: "Product & Web",
      icon: Globe,
      description: "Full Stack & Strategy",
      tech: ["React.js", "Next.js", "Node.js", "Product Strategy", "Agile"]
    }
  ]
};

const CosmicBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1614728853970-a86435e5e9e4?q=80&w=2600&auto=format&fit=crop"
        alt="Cosmic Landscape"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950/95"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/60">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Atom className="h-6 w-6 text-cyan-400 animate-spin-slow" />
          <span className="text-lg font-bold tracking-tighter text-white">
            TARUN<span className="text-cyan-400">.DEV</span>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const SkillCard = ({ icon: Icon, title, description, tech }) => (
  <div className="group relative p-6 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-12 h-12 mb-4 rounded-lg bg-slate-800/80 flex items-center justify-center group-hover:bg-slate-700 transition-colors ring-1 ring-slate-700 group-hover:ring-cyan-500/30">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4 h-16 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-900/50 rounded-full hover:bg-cyan-900/50 transition-colors cursor-default">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ company, role, period, description }) => (
  <div className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0 group">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-cyan-500 transition-colors ring-4 ring-slate-950" />
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{company}</h3>
      <span className="text-sm font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">{period}</span>
    </div>
    <h4 className="text-lg text-slate-300 mb-3 flex items-center gap-2">
      <Briefcase className="w-4 h-4 text-purple-400" /> {role}
    </h4>
    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
      {description}
    </p>
  </div>
);

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = PORTFOLIO_DATA.personal.email;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => console.error('Failed to copy', err));
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      <CosmicBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-cyan-400 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm shadow-xl shadow-cyan-900/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to Collaboration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up [animation-delay:200ms]">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">{PORTFOLIO_DATA.personal.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up [animation-delay:400ms]">
            Expert in designing and building <br className="hidden md:block" />
            <span className="text-white font-semibold border-b-2 border-cyan-500/50 mx-1 hover:border-cyan-400 transition-colors">deterministic</span> 
            and 
            <span className="text-white font-semibold border-b-2 border-purple-500/50 mx-1 hover:border-purple-400 transition-colors">probabilistic</span> 
            software systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <a 
              href="#experience"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 flex items-center gap-2 shadow-lg"
            >
              <Rocket className="w-4 h-4" />
              View Work
            </a>
            <button 
              onClick={copyEmail}
              className="px-8 py-3 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 font-medium rounded-lg transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              {copied ? 'Email Copied!' : 'Contact Me'}
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <a href="#about"><ChevronDown className="w-6 h-6 text-slate-400" /></a>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <Code2 className="text-purple-500 h-8 w-8" />
                The Philosophy
              </h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.about.description}
                </p>
              </div>

              <div className="grid gap-4">
                <div className="p-5 bg-slate-900/60 border-l-4 border-cyan-500 rounded-r-xl backdrop-blur-sm border-y border-r border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                  <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" /> Deterministic
                  </h4>
                  <p className="text-sm text-slate-400">
                    Building backend systems with zero fault tolerance. Precise, scalable, and robust architectures that run the world's enterprises.
                  </p>
                </div>
                <div className="p-5 bg-slate-900/60 border-l-4 border-purple-500 rounded-r-xl backdrop-blur-sm border-y border-r border-slate-800/50 hover:bg-slate-900/80 transition-colors">
                  <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-purple-400" /> Probabilistic
                  </h4>
                  <p className="text-sm text-slate-400">
                    Leveraging AI to handle uncertainty. Creating generative models and intelligent agents that adapt, learn, and predict.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-20 blur-xl animate-pulse"></div>
              <div className="relative bg-slate-950/90 border border-slate-800 rounded-xl p-6 font-mono text-sm overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 ml-2">tarun_scientist.py</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">TarunTella</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                  <p className="pl-8">self.name = <span className="text-green-400">"{PORTFOLIO_DATA.personal.name}"</span></p>
                  <p className="pl-8">self.role = <span className="text-green-400">"{PORTFOLIO_DATA.personal.role}"</span></p>
                  <p className="pl-8">self.mission = <span className="text-green-400">"Build Scalable Intelligent Systems"</span></p>
                  <p className="pl-4">&nbsp;</p>
                  <p className="pl-4"><span className="text-slate-500"># Merging stability with innovation</span></p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">engineer_solutions</span>(self):</p>
                  <p className="pl-8"><span className="text-purple-400">while</span> <span className="text-orange-300">True</span>:</p>
                  <p className="pl-12">self.optimize(<span className="text-green-400">"Backend"</span>)</p>
                  <p className="pl-12">self.innovate(<span className="text-green-400">"AI_Agents"</span>)</p>
                  <p className="pl-12"><span className="text-purple-400">return</span> <span className="text-cyan-400">Impact</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A comprehensive toolkit designed to ship products from zero to one, scaling from a single user to millions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.category}
                description={skill.description}
                tech={skill.tech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Career Trajectory</h2>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative timeline line */}
            <div className="absolute top-0 bottom-0 left-[31px] w-px bg-slate-800 hidden sm:block"></div>

            {PORTFOLIO_DATA.experience.map((job, index) => (
              <ExperienceCard 
                key={index}
                company={job.company}
                role={job.role}
                period={job.period}
                description={job.description}
              />
            ))}
            
            <div className="relative pl-8 pt-8 sm:ml-0">
               <div className="absolute left-[-5px] top-10 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-950 hidden sm:block" />
               <p className="text-slate-500 italic text-sm">Initialization...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 bg-slate-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-cyan-500" /> Education
          </h2>
          
          <div className="grid gap-6">
             {PORTFOLIO_DATA.education.map((edu, index) => (
               <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors">
                 <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-8 h-8" />
                 </div>
                 <div>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                     <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                     <span className="text-sm font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded">{edu.year}</span>
                   </div>
                   <h4 className="text-lg text-slate-300 mb-2">{edu.degree}</h4>
                   <p className="text-slate-400 text-sm">{edu.description}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950/90 relative z-10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{PORTFOLIO_DATA.personal.name}</h3>
            <p className="text-slate-500 text-sm">Building the future, one commit at a time.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Github className="w-6 h-6" />
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
