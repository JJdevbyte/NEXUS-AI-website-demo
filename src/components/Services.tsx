"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import Image from 'next/image';

const services = [
  {
    title: "Intelligent Web Platforms",
    description: "High-performance websites designed for the AI-first world. Blazing speed, dynamic content, and conversion-optimized UX.",
    icon: Globe,
    color: "text-blue-400",
    className: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
  },
  {
    title: "Autonomous AI Agents",
    description: "Custom AI agents that handle lead gen, customer support, and complex reasoning 24/7.",
    icon: Bot,
    color: "text-primary",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Workflow Automation",
    description: "Connect your entire stack with intelligent triggers. Reclaim 40+ hours every single week.",
    icon: Zap,
    color: "text-secondary",
    className: "md:col-span-2 md:row-span-1",
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Capabilities</span></h2>
          <p className="text-muted max-w-xl">We don&apos;t just build tools; we build the engine for your business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass rounded-3xl p-8 relative group overflow-hidden flex flex-col justify-between",
                service.className
              )}
            >
              {service.image && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className={cn("p-3 rounded-2xl bg-white/5 inline-block mb-6", service.color)}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>

              <div className="relative z-10 mt-8 flex justify-end">
                <div className="p-2 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
