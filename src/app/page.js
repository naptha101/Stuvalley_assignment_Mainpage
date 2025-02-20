"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6 flex flex-col items-center"
    >
      {/* Header Section */}
      <header className="text-center max-w-3xl">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800"
        >
          Welcome to Information Center
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl text-gray-600 mt-2"
        >
          Your hub for Services, Products, and Research
        </motion.p>
      </header>

      {/* Sections Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-7xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <SectionCard
          title="Our Services"
          description="Explore the professional services we offer, including web development, AI solutions, and more."
          link="/services"
          imageSrc="/services.svg"
        />

        <SectionCard
          title="Our Products"
          description="Discover our innovative products designed to enhance your digital experience."
          link="/products"
          imageSrc="/products.svg"
        />

        <SectionCard
          title="Research Contributions"
          description="Browse our latest research papers and contributions in various domains."
          link="/research"
          imageSrc="/research.svg"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-10 text-center"
      >
        <p className="text-lg sm:text-xl text-gray-700">Ready to explore?</p>
        <Link
          href="/services"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
        >
          Get Started
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Information Center. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

/** Section Card Component */
function SectionCard({ title, description, link, imageSrc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:shadow-2xl"
    >
     
      <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link
        href={link}
        className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-95"
      >
        Learn More
      </Link>
    </motion.div>
  );
}
