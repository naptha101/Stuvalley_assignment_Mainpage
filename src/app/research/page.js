"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Research() {
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const res = await fetch("/api/research");
        const data = await res.json();
        setResearch(data);
      } catch (error) {
        console.error("Error fetching research:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResearch();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-8"
      >
        Research Contributions
      </motion.h1>

      {loading ? (
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-lg"
        >
          Loading research data...
        </motion.p>
      ) : research.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 italic text-lg"
        >
          No research contributions available.
        </motion.p>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {research.map((paper) => (
            <motion.div
              key={paper._id}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-lg rounded-xl p-6 transition-transform"
            >
              <h2 className="text-2xl font-bold text-blue-600">{paper.title}</h2>
              <p className="text-gray-700 mt-2">
                <strong>Year:</strong> {paper.year}
              </p>
              <p className="text-gray-700">
                <strong>Type:</strong> {paper.type}
              </p>
              <p className="text-gray-600 mt-2">{paper.description}</p>
              <motion.a
                href={paper.doi}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
