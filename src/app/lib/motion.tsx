'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionPageProps {
    children: ReactNode;
  }

  const pageVariants = {
    initial: { opacity: 0, x: -200 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 200 },
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  
  const MotionPage: React.FC<MotionPageProps> = ({ children }) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
  

export default MotionPage;
