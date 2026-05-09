"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery Audit",
    description: "We analyze your current stack and identify high-impact automation opportunities."
  },
  {
    number: "02",
    title: "Rapid Architecture",
    description: "Our engineers build a custom blueprint of your AI agents and integrated workflows."
  },
  {
    number: "03",
    title: "Deployment & Scale",
    description: "Go live with your new system and watch your operational efficiency skyrocket."
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We <span className="text-gradient">Deliver</span></h2>
            <p className="text-muted">A streamlined path from manual chaos to automated excellence.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-black text-white/5 mb-6 leading-none">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
