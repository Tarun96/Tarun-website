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
  Code2
} from 'lucide-react';

const CosmicBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1614728853970-a86435e5e9e4?q=80&w=2600&auto=format&fit=crop"
        alt="Mars Terraforming Landscape"
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950/95"></div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
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
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
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
  <div className="group relative p-6 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-12 h-12 mb-4 rounded-lg bg-slate-800/80 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4 h-20 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-900/50 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ company, role, period, description }) => (
  <div className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950" />
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <span className="text-sm font-mono text-cyan-400">{period}</span>
    </div>
    <h4 className="text-lg text-slate-300 mb-3 flex items-center gap-2">
      <Briefcase className="w-4 h-4" /> {role}
    </h4>
    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
      {description}
    </p>
  </div>
);

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "tarun.kumar@example.com";
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <CosmicBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-cyan-400 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to Collaboration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tarun</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Expert in designing and building <br className="hidden md:block" />
            <span className="text-white font-semibold border-b border-cyan-500/50 mx-1">deterministic</span> 
            and 
            <span className="text-white font-semibold border-b border-purple-500/50 mx-1">probabilistic</span> 
            software systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2 shadow-lg">
              <Rocket className="w-4 h-4" />
              View Projects
            </button>
            <button onClick={copyEmail} className="px-8 py-3 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-medium rounded-lg transition-all flex items-center gap-2 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              {copied ? "Email Copied!" : "Contact Me"}
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-500" />
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Code2 className="text-purple-500" />
                The Philosophy
              </h2>
              <p className="text-slate-300 leading-relaxed drop-shadow-md">
                My work exists at the intersection of rigid logic and fluid intelligence.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/60 border-l-2 border-cyan-500 rounded-r-lg backdrop-blur-sm border-y border-r border-slate-800/50">
                  <h4 className="text-white font-semibold mb-1">Deterministic</h4>
                  <p className="text-sm text-slate-400">
                    Building backend systems with zero fault tolerance. Precise, scalable, and robust architectures that run the world's enterprises.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/60 border-l-2 border-purple-500 rounded-r-lg backdrop-blur-sm border-y border-r border-slate-800/50">
                  <h4 className="text-white font-semibold mb-1">Probabilistic</h4>
                  <p className="text-sm text-slate-400">
                    Leveraging AI to handle uncertainty. Creating generative models and intelligent agents that adapt, learn, and predict.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 font-mono text-sm overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-slate-500 ml-2">engineer.py</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-300">TarunTella</span>:</p>
                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8">self.role = <span className="text-green-400">"SSE @ ServiceNow"</span></p>
                <p className="pl-8">self.passion = <span className="text-green-400">"Building Systems"</span></p>
                <p className="pl-8">self.skills = [</p>
                <p className="pl-12 text-green-400">"Backend Engineering",</p>
                <p className="pl-12 text-green-400">"AI Architectures",</p>
                <p className="pl-12 text-green-400">"Product Strategy"</p>
                <p className="pl-8">]</p>
                <p className="pl-4">&nbsp;</p>
                <p className="pl-4"><span className="text-slate-500"># Combining stability with AI</span></p>
                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">build_future</span>(self):</p>
                <p className="pl-8"><span className="text-purple-400">return</span> self.deterministic() + self.probabilistic()</p>
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
              A comprehensive toolkit designed to ship products from zero to one.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard 
              icon={Server}
              title="Backend Engineering"
              description="Architecting scalable distributed systems, microservices, and robust APIs."
              tech={['Java', 'Python', 'Node.js', 'System Design', 'SQL/NoSQL']}
            />
            <SkillCard 
              icon={BrainCircuit}
              title="AI Engineering"
              description="Integrating LLMs, building RAG pipelines, and fine-tuning models for business logic."
              tech={['PyTorch', 'LangChain', 'HuggingFace', 'OpenAI API', 'Vector DBs']}
            />
            <SkillCard 
              icon={Briefcase}
              title="Product Thinking"
              description="Bridging the gap between code and customer value. Thinking like a PM to deliver impact."
              tech={['User Stories', 'Roadmapping', 'Agile', 'MVP Strategy']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Career Trajectory</h2>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
            <ExperienceCard 
              company="ServiceNow"
              role="Senior Software Engineer"
              period="Present"
              description="Leading development on core platform features. Focusing on reliability and performance optimization for enterprise-scale workflows. Mentoring junior engineers and driving architectural decisions."
            />
            
            <div className="pt-12 relative pl-8 border-l border-slate-800">
               <div className="absolute left-[-5px] top-12 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950" />
               <p className="text-slate-500 italic">Previous history...</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950/90 relative z-10 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Tarun Kumar Tella</h3>
            <p className="text-slate-500 text-sm">Building the future, one commit at a time.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
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
          animation: fade-in-up 0.8s ease-out forwards;
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
