import React from 'react';
import { Cpu, Globe, MessageSquare, Users } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">NEXUS AI</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Leading the transition to an AI-first economy. 
              Engineering the tools of tomorrow, today.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">AI Web Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agent Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Workflow Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 transition-colors">
                <Globe className="w-5 h-5 text-muted hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-muted hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 transition-colors">
                <Users className="w-5 h-5 text-muted hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 Nexus AI Automation. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
