'use client';

import { motion, type Variants } from 'motion/react';
import { type ReactNode } from 'react';

// Lightweight fade up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Stagger children animation
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface AnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Simple fade up on scroll
export function FadeUp({ children, className, delay = 0 }: AnimateProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Container with staggered children
export function Stagger({ children, className }: AnimateProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Item inside stagger container
export function StaggerItem({ children, className }: AnimateProps) {
  return (
    <motion.div
      variants={staggerItem}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
