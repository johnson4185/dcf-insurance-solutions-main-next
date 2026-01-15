"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface ProductStatsProps {
  stats: Stat[];
}

export default function ProductStats({ stats }: ProductStatsProps) {
  return (
    <section className="py-8 bg-gray-900">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
