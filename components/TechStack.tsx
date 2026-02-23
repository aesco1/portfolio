'use client';

import { motion } from 'framer-motion';

const row1 = [
  'Python',
  'Java',
  'PHP',
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'SQL',
  'WordPress',
  'Flask',
  'jQuery',
];

const row2 = [
  'Mermaid.js',
  'Next.js',
  'React',
  'Git',
  'MySQL',
  'Apache',
  'Ollama',
  'VS Code',
  'PyCharm',
];

const row3 = [
  'Visual Studio',
  'Adobe Creative Cloud',
  'REST APIs',
  'AJAX',
  'JSON',
  'Node.js',
  'Docker',
  'Linux',
  'Vercel',
  'GitHub',
];

const MarqueeRow = ({ items, duration = 30 }: { items: string[]; duration?: number }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -33.33 * duplicatedItems.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="text-gray-300 text-base md:text-lg hover:text-purple-400 transition-colors cursor-default inline-block"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function TechStack() {
  return (
    <div className="w-full text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2">
          Experienced with all these tools and technologies
        </h2>
        <p className="text-gray-400 italic text-sm">
          (and many more)
        </p>
      </motion.div>

      <div className="space-y-2 overflow-hidden">
        <MarqueeRow items={row1} duration={40} />
        <MarqueeRow items={row2} duration={35} />
        <MarqueeRow items={row3} duration={38} />
      </div>
    </div>
  );
}
