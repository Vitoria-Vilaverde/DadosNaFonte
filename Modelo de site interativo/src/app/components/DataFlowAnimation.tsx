import { motion } from 'motion/react';

interface DataFlowAnimationProps {
  className?: string;
}

export function DataFlowAnimation({ className = '' }: DataFlowAnimationProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="w-1.5 h-8 bg-gradient-to-t from-blue-600 to-teal-500 rounded-full"
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
