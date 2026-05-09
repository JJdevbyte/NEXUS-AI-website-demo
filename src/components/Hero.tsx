"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Bot, Zap, Globe } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen AI Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
          >
            Automate the <span className="text-gradient">Impossible.</span><br />
            Scale the Exceptional.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-xl text-muted mb-12 leading-relaxed"
          >
            Nexus AI empowers forward-thinking businesses with autonomous agents, 
            intelligent workflows, and high-conversion web platforms. 
            Reclaim your time and dominate your market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Our Tools
            </Button>
          </motion.div>

          {/* Feature Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <Bot className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-muted">AI Agents</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-sm font-medium text-muted">Workflows</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-muted">Web Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-background bg-slate-800" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted">50+ Projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
